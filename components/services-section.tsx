'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Armchair,
  Sofa,
  Blinds,
  Grid3x3,
  Layers,
  Package,
} from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Chairs',
    description:
      'Premium office chairs, dining chairs, and chairs for every style and budget.',
    features: ['Ergonomic Design', 'Durable Materials', 'Custom Options'],
  },
  {
    icon: Sofa,
    title: 'Sofas',
    description:
      'Luxurious sofas and sectionals that combine comfort with sophisticated design.',
    features: ['Premium Upholstery', 'Custom Sizing', 'Multiple Styles'],
  },
  {
    icon: Blinds,
    title: 'Roller Blinds',
    description:
      'Motorized and manual rolling blinds for perfect light control and privacy.',
    features: ['Washing Available', "Repair & services", 'Easy Maintenance'],
  },
  {
    icon: Blinds,
    title: 'Vertical Blinds',
    description:
      'Elegant vertical blinds ideal for large windows and patio doors.',
    features: ['Wide Coverage', 'Easy Operation', 'Variety of Materials',"Repair & services"],
  },
  {
    icon: Grid3x3,
    title: 'Vinyl Flooring',
    description:
      'Water-resistant vinyl flooring with realistic wood and stone patterns.',
    features: ['Waterproof Options', 'Easy Installation', 'Low Maintenance',"Repair & services"],
  },
  // {
  //   icon: Layers,
  //   title: 'Tiles',
  //   description:
  //     'Ceramic, porcelain, and natural stone tiles for floors and walls.',
  //   features: ['Variety of Styles', 'Durable Finish', 'Professional Install'],
  // },
  {
  icon: Blinds,
  title: 'Mosquito Mesh',
  description:
    'High-quality mosquito mesh solutions for windows and doors with long-lasting durability.',
  features: ['Custom Fitting', 'Durable Frames', 'Easy Maintenance'],
},
{
  icon: Armchair,
  title: 'Cafeteria Chairs',
  description:
    'Comfortable and stylish cafeteria chairs suitable for schools, offices, and restaurants.',
  features: ['Stackable Design', 'Strong Frame', 'Modern Look'],
},
{
  icon: Grid3x3,
  title: 'Workstation Tables',
  description:
    'Modern workstation tables designed for productivity and office efficiency.',
  features: ['Cable Management', 'Modular Design', 'Custom Sizes'],
},
{
  icon: Layers,
  title: 'Aluminium Partitions',
  description:
    'Premium aluminium partition systems for offices and commercial spaces.',
  features: ['Sound Insulation', 'Modern Finish', 'Durable Structure'],
},  
  {
    icon: Package,
    title: 'Carpet Rolls',
    description:
      'High-quality carpet rolls in various textures, colors, and pile heights.',
    features: ['Stain Resistant', 'Comfort Padding'],
  },
  {
    icon: Package,
    title: 'Carpet Tiles',
    description:
      'Modular carpet tiles perfect for offices and easy maintenance.',
    features: ['Easy Replacement', 'Creative Patterns', 'Commercial Grade'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive furnishing and flooring solutions tailored to your
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-slate-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
