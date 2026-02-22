'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        clientType: '',
        serviceType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="border-2">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 123-4567"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="clientType">Client Type *</Label>
            <Select
              value={formData.clientType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, clientType: value }))
              }
              required
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select client type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="serviceType">Service Interested In *</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, serviceType: value }))
              }
              required
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chairs">Chairs</SelectItem>
                <SelectItem value="sofas">Sofas</SelectItem>
                <SelectItem value="rolling-blinds">Rolling Blinds</SelectItem>
                <SelectItem value="vertical-blinds">
                  Vertical Blinds
                </SelectItem>
                <SelectItem value="vinyl-flooring">Vinyl Flooring</SelectItem>
                <SelectItem value="tiles">Tiles</SelectItem>
                <SelectItem value="carpet-rolls">Carpet Rolls</SelectItem>
                <SelectItem value="carpet-tiles">Carpet Tiles</SelectItem>
                <SelectItem value="multiple">Multiple Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={4}
              className="mt-1.5"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Request Free Quote'
            )}
          </Button>

          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">
                Thank you! We'll contact you soon.
              </span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-600 bg-red-50 p-3 rounded-lg text-sm">
              Something went wrong. Please try again or call us directly.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
