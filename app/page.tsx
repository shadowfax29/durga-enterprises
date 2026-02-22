'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Layers,
  ChevronRight,
  Check,
  Phone,
  Mail,
  Building2,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { ServicesSection } from '@/components/services-section';
import { ClientTypesSection } from '@/components/client-types-section';
import { GallerySection } from '@/components/gallery-section';

export default function HomePage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document
      .getElementById('services')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900">
              Durga Enterprises
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#clients"
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Clients
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Gallery
            </a>
            <Button
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Get Quote
            </Button>
          </nav>
          <Button
            onClick={scrollToContact}
            className="md:hidden bg-emerald-600 hover:bg-emerald-700"
            size="sm"
          >
            Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
            >
              Premium Furnishing & Flooring Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your Space with
              <span className="text-emerald-600"> Expert Craftsmanship</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              From elegant furniture to premium flooring solutions, we deliver
              exceptional quality for homes and corporate spaces. Your vision,
              our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-base"
              >
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="text-base border-2"
              >
                Request Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '15+', label: 'Years Experience' },
                { value: '100%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Client Types Section */}
      <ClientTypesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Durga Enterprises?
            </h2>
            <p className="text-lg text-slate-600">
              We combine quality products, expert installation, and exceptional
              service to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Premium Quality',
                description:
                  'We source only the finest materials and products from trusted manufacturers.',
                icon: Check,
              },
              {
                title: 'Expert Installation',
                description:
                  'Our skilled technicians ensure perfect installation every time.',
                icon: Check,
              },
              {
                title: 'Competitive Pricing',
                description:
                  'Get the best value without compromising on quality.',
                icon: Check,
              },
              {
                title: 'Fast Turnaround',
                description:
                  'Efficient project management ensures timely completion.',
                icon: Check,
              },
              {
                title: 'Warranty Protection',
                description:
                  'Comprehensive warranties on all products and installations.',
                icon: Check,
              },
              {
                title: 'After-Sales Support',
                description:
                  'Dedicated support team available for all your needs.',
                icon: Check,
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-emerald-200 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Get Your Free Quote Today
              </h2>
              <p className="text-lg text-slate-600">
                Let's discuss your project and bring your vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Phone</div>
                        <div className="text-slate-600">+1 (555) 123-4567</div>
                        <div className="text-slate-600">+1 (555) 987-6543</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Email</div>
                        <div className="text-slate-600">
                          info@eliteinteriors.com
                        </div>
                        <div className="text-slate-600">
                          sales@eliteinteriors.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          Address
                        </div>
                        <div className="text-slate-600">
                          123 Design Avenue
                          <br />
                          Business District, NY 10001
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-100">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Business Hours
                    </h4>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Layers className="h-6 w-6 text-emerald-400" />
                  <span className="text-xl font-bold text-white">
                    Durga Enterprises
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  Your trusted partner for premium furnishing and flooring
                  solutions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>Furniture Solutions</li>
                  <li>Window Treatments</li>
                  <li>Flooring Installation</li>
                  <li>Carpet Services</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Our Projects</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Warranty Information</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-sm">
              <p>
                &copy; {new Date().getFullYear()} Durga Enterprises. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
