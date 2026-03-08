import { Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Durga Enterprises',
  description: 'Terms of Service for Durga Enterprises - Read our terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900">
              Durga Enterprises
            </span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing or using the services of Durga Enterprises, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Services Description</h2>
            <p className="text-slate-700 leading-relaxed">
              Durga Enterprises provides premium furnishing and flooring solutions including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-3">
              <li>Office and residential furniture (chairs, sofas)</li>
              <li>Window treatments (rolling blinds, vertical blinds)</li>
              <li>Flooring solutions (vinyl flooring, tiles, carpet rolls, carpet tiles)</li>
              <li>Installation and maintenance services</li>
              <li>Consultation and design services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. Quotations and Pricing</h2>
            <p className="text-slate-700 leading-relaxed">
              All quotations provided are valid for 30 days from the date of issue unless otherwise stated. Prices are 
              subject to change without notice. Final pricing will be confirmed in writing before any work commences. 
              All prices are exclusive of applicable taxes unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Orders and Payments</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Payment terms and conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>A deposit of 50% is required to confirm orders and commence work</li>
              <li>The remaining balance is due upon completion of installation</li>
              <li>Payment can be made via bank transfer, check, or approved credit terms</li>
              <li>Late payments may incur additional charges as per our payment policy</li>
              <li>We reserve the right to suspend or cancel services for non-payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Installation Services</h2>
            <p className="text-slate-700 leading-relaxed">
              Our professional installation team will schedule installation at a mutually agreed time. Customers must 
              ensure the installation site is accessible and prepared according to our pre-installation guidelines. 
              Any delays caused by site conditions not meeting requirements may result in additional charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Warranties</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We provide warranties on our products and services as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Product warranties: As per manufacturer specifications</li>
              <li>Installation warranty: 1 year on workmanship</li>
              <li>Warranties do not cover damage caused by misuse, negligence, or normal wear and tear</li>
              <li>Warranty claims must be reported within 7 days of discovery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Cancellations and Returns</h2>
            <p className="text-slate-700 leading-relaxed">
              Orders may be cancelled up to 48 hours after confirmation with a full refund of the deposit. Cancellations 
              after this period may incur charges for work already completed or materials ordered. Custom-made items are 
              non-refundable once production has commenced.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              Durga Enterprises shall not be liable for any indirect, incidental, special, consequential or punitive 
              damages resulting from your use of our services. Our total liability shall not exceed the amount paid 
              for the specific service or product in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed">
              All content, designs, and materials provided by Durga Enterprises remain our intellectual property. 
              Customers may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">10. Force Majeure</h2>
            <p className="text-slate-700 leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable 
              control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or 
              supply chain disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">11. Dispute Resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              Any disputes arising from these terms shall first be attempted to be resolved through good faith negotiations. 
              If resolution cannot be reached, disputes shall be subject to the jurisdiction of the courts in our business location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">12. Modifications to Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
              to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">13. Contact Information</h2>
            <p className="text-slate-700 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 text-slate-700">
              <p>Email: info@durgaenterprises.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Design Avenue, Business District, NY 10001</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
