'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const galleryItems = [
  {
    category: 'Furniture',
    title: 'Modern Office Setup',
    description: 'Complete office furniture installation with ergonomic chairs',
  },
  {
    category: 'Blinds',
    title: 'Motorized Rolling Blinds',
    description: 'Smart home integration with automated window treatments',
  },
  {
    category: 'Flooring',
    title: 'Luxury Vinyl Planks',
    description: 'Waterproof vinyl flooring with realistic wood texture',
  },
  {
    category: 'Carpet',
    title: 'Corporate Carpet Tiles',
    description: 'Modular carpet solution for a modern office space',
  },
  {
    category: 'Furniture',
    title: 'Living Room Transformation',
    description: 'Premium sofas and accent chairs for residential project',
  },
  {
    category: 'Flooring',
    title: 'Porcelain Tile Installation',
    description: 'High-end ceramic tiles for kitchen and bathroom',
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-slate-600">
            Explore our recent projects and see the quality of our work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200"
            >
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                   <img src='./assets/office'/>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
