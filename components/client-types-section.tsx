'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, Check } from 'lucide-react';

const clientTypes = [
  {
    icon: Home,
    title: 'Residential Services',
    description:
      'Transform your home into a haven of comfort and style with our comprehensive residential solutions.',
    benefits: [
      'Custom design consultation',
      'Professional measurement and installation',
      'Wide range of styles and materials',
      'Flexible scheduling for your convenience',
      'Warranty on all products and workmanship',
      'Post-installation support and care guidance',
    ],
    color: 'from-emerald-50 to-blue-50',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description:
      'Elevate your workspace with professional furnishing and flooring solutions designed for business environments.',
    benefits: [
      'Bulk pricing for large projects',
      'Commercial-grade products',
      'Minimal disruption to operations',
      'Fast turnaround times',
      'Compliance with safety standards',
      'Ongoing maintenance contracts available',
    ],
    color: 'from-blue-50 to-slate-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
];

export function ClientTypesSection() {
  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Serving Homes & Businesses
          </h2>
          <p className="text-lg text-slate-600">
            Whether you're renovating your home or upgrading your office, we
            have the expertise and products to meet your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clientTypes.map((clientType) => (
            <Card
              key={clientType.title}
              className="border-2 hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div
                  className={`bg-gradient-to-br ${clientType.color} rounded-2xl p-6 mb-6`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl ${clientType.iconBg} flex items-center justify-center mb-4`}
                  >
                    <clientType.icon
                      className={`h-8 w-8 ${clientType.iconColor}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {clientType.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {clientType.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {clientType.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
