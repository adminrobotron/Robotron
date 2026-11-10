import React from 'react';
import { NavTab } from '../types';

interface ConductViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ConductView: React.FC<ConductViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-6">
        <div className="bg-[#1a1a1a] text-white p-8 sm:p-12 comic-border-ultra shadow-comic-xl inline-block w-full transform -skew-x-3">
          <div className="bg-[#bb0013] text-white font-anton text-sm sm:text-base px-4 py-1 inline-block comic-border-thick mb-6 transform -skew-x-6">
            CODE OF CONDUCT
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl text-[#fddc00] leading-none mb-8">
            CODE OF<br />
            <span className="text-white">CONDUCT</span>
          </h1>
          <p className="font-bricolage text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Robotron 2027 is committed to providing a safe, inclusive, and harassment-free experience for all participants.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform -rotate-1">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">OUR COMMITMENT</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            We are dedicated to fostering a welcoming environment for everyone, regardless of age, gender, disability, ethnicity, religion, or experience level. Harassment of any kind will not be tolerated.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform rotate-2">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">EXPECTED BEHAVIOR</h2>
          <ul className="font-bricolage text-zinc-800 leading-relaxed space-y-3 list-disc pl-6">
            <li>Be respectful and considerate to fellow participants, volunteers, and organizers.</li>
            <li>Use inclusive and professional language at all times.</li>
            <li>Respect venue property and event equipment.</li>
            <li>Follow all instructions from event staff and security personnel.</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform -rotate-1">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">UNACCEPTABLE BEHAVIOR</h2>
          <ul className="font-bricolage text-zinc-800 leading-relaxed space-y-3 list-disc pl-6">
            <li>Harassment, intimidation, or discrimination of any participant.</li>
            <li>Offensive comments related to gender, race, religion, or disability.</li>
            <li>Physical or verbal abuse, threats, or violence.</li>
            <li>Disruption of event sessions or activities.</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-10 comic-border-ultra shadow-comic-lg space-y-6 transform rotate-2">
          <h2 className="font-anton text-3xl sm:text-4xl text-[#1a1a1a] mb-4">REPORTING & ENFORCEMENT</h2>
          <p className="font-bricolage text-zinc-800 leading-relaxed">
            If you experience or witness unacceptable behavior, please contact the organizers immediately. Violators may be removed from the event without refund.
          </p>
          <p className="font-bricolage text-zinc-800 leading-relaxed mt-4">
            Email: <a href="mailto:support@Robotron2027.com" className="text-[#bb0013] hover:underline">support@Robotron2027.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};
