/*
  # Contact Inquiries Table

  ## Overview
  Creates a table to store contact form submissions from the Durga Enterprises website.
  This allows the business to track and manage customer inquiries for quotes and consultations.

  ## Tables Created
  - `contact_inquiries`
    - `id` (uuid, primary key) - Unique identifier for each inquiry
    - `name` (text) - Customer's full name
    - `email` (text) - Customer's email address
    - `phone` (text) - Customer's phone number
    - `client_type` (text) - Type of client: 'residential' or 'corporate'
    - `service_type` (text) - Service the customer is interested in
    - `message` (text, optional) - Additional details about the inquiry
    - `status` (text) - Inquiry status: 'new', 'contacted', 'quoted', 'completed', 'closed'
    - `created_at` (timestamptz) - When the inquiry was submitted
    - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Row Level Security (RLS) enabled
  - Public can insert inquiries (for form submissions)
  - Only authenticated admin users can view and manage inquiries

  ## Indexes
  - Index on created_at for efficient sorting
  - Index on status for filtering
  - Index on email for lookup
*/

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  client_type text NOT NULL CHECK (client_type IN ('residential', 'corporate')),
  service_type text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'completed', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);

-- Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert inquiries (for public form submissions)
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view inquiries (for admin dashboard)
CREATE POLICY "Authenticated users can view inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update inquiries
CREATE POLICY "Authenticated users can update inquiries"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
