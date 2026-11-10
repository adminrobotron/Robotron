import React from 'react';
import { NavTab } from '../types';
import { useContent } from '../ContentContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EditableText } from './EditableText';

interface ContactViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActiveTab }) => {
  const { content } = useContent();
  const { contact } = content;

  return (
    <div className="space-y-12 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-6">
        <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 comic-border-ultra shadow-comic-xl inline-block w-full transform -skew-x-3">
          <div className="bg-[#bb0013] text-white font-anton text-sm sm:text-base px-4 py-1 inline-block comic-border-thick mb-6 transform -skew-x-6">
            GET IN TOUCH
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl text-[#fddc00] leading-none mb-8">
            CONTACT<br />
            <span className="text-white">US</span>
          </h1>
          <p className="font-bricolage text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Have questions about Robotron 2027? Reach out to us using the details below.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 comic-border-ultra shadow-comic-lg text-center transform -rotate-1">
            <div className="bg-[#fddc00] text-[#1a1a1a] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 comic-border-thick">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-2xl sm:text-3xl text-[#1a1a1a] mb-4">OFFICIAL EMAILS</h3>
            <ul className="font-bricolage text-zinc-800 space-y-3">
              {(contact?.emails || []).map((email, i) => (
                <li key={i} className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
                  <a href={`mailto:${email}`} className="text-[#bb0013] hover:underline hover:text-[#d90017] transition-colors">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 comic-border-ultra shadow-comic-lg text-center transform rotate-2">
            <div className="bg-[#bb0013] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 comic-border-thick">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-2xl sm:text-3xl text-[#1a1a1a] mb-4">CONNECT BY PHONE</h3>
            <ul className="font-bricolage text-zinc-800 space-y-3">
              {(contact?.phones || []).map((phone, i) => (
                <li key={i} className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
                  <a href={`tel:${phone}`} className="text-[#bb0013] hover:underline hover:text-[#d90017] transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#efe1c5] p-6 sm:p-8 comic-border-ultra shadow-comic-lg text-center transform -rotate-1">
            <div className="bg-[#1a1a1a] text-[#fddc00] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 comic-border-thick">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-2xl sm:text-3xl text-[#1a1a1a] mb-4">VISIT US</h3>
            <p className="font-bricolage text-zinc-800 text-sm sm:text-base leading-relaxed">
              {contact?.address || 'Park College of Engineering and Technology, Kaniyur, Coimbatore - 641659, Tamil Nadu, India'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#bb0013] py-10 comic-border-ultra shadow-comic-xl text-center transform rotate-2">
        <div className="bg-[#1a1a1a] p-8 sm:p-12 comic-border-thick inline-block">
          <h2 className="font-anton text-4xl sm:text-5xl text-[#fddc00] mb-6">
            READY TO<br />
            <span className="text-white">JOIN?</span>
          </h2>
          <button
            onClick={() => setActiveTab('register')}
            className="bg-[#fddc00] text-[#1a1a1a] font-anton text-xl sm:text-2xl tracking-wider px-8 py-4 comic-border-thick shadow-comic uppercase cursor-pointer hover:bg-white transition-all"
          >
            REGISTER NOW
          </button>
        </div>
      </section>
    </div>
  );
};
