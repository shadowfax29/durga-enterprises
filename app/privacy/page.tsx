import { Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Durga Enterprises',
  description: 'Privacy Policy for Durga Enterprises - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              Welcome to Durga Enterprises. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Identity Data: name, title</li>
              <li>Contact Data: email address, telephone numbers, physical address</li>
              <li>Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing and Communications Data: your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Data Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
              employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Data Retention</h2>
            <p className="text-slate-700 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Your Legal Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may use cookies to distinguish you from other users. This helps us to provide you with a good 
              experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may include links to third-party websites, plug-ins and applications. Clicking on those links 
              or enabling those connections may allow third parties to collect or share data about you. We do not control 
              these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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
