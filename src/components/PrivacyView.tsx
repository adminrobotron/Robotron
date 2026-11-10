import React from 'react';
import { NavTab } from '../types';

interface PrivacyViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-6">
        <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 comic-border-ultra shadow-comic-xl inline-block w-full transform -skew-x-3">
          <div className="bg-[#bb0013] text-white font-anton text-sm sm:text-base px-4 py-1 inline-block comic-border-thick mb-6 transform -skew-x-6">
            PRIVACY POLICY
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl text-[#fddc00] leading-none mb-8">
            PRIVACY<br />
            <span className="text-white">POLICY</span>
          </h1>
          <p className="font-bricolage text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information when you register for Robotron 2027.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform -rotate-1">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">INFORMATION WE COLLECT</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            When you register for Robotron 2027, we collect your name, email address, phone number, college details, and team information. This data is used solely for event registration, communication, and certificate generation.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform rotate-2">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">HOW WE USE YOUR DATA</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            We use your information to send event updates, schedule changes, prize announcements, and participation certificates. We never sell or share your personal data with third parties.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform -rotate-1">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">DATA SECURITY</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            All data is stored securely using Firebase with industry-standard encryption. Access is restricted to authorized organizers only.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform rotate-2">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">CONTACT US</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            For privacy-related queries, email us at <a href="mailto:hello@Robotron2027.com" className="text-[#bb0013] hover:underline">hello@Robotron2027.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};
