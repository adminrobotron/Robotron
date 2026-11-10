import React from 'react';
import { UserProfile, Team } from '../types';
import { User as FirebaseUser } from 'firebase/auth';
import { X, LogOut, User as UserIcon, Calendar, MapPin, ShieldCheck } from 'lucide-react';

interface ProfileViewProps {
  open: boolean;
  onClose: () => void;
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  team: Team | null;
  onSignOut: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  open,
  onClose,
  user,
  userProfile,
  team,
  onSignOut,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f4ead5] max-w-md w-full comic-border-ultra shadow-comic-xl relative my-8 p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 comic-border-thick hover:bg-[#bb0013] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-[#bb0013] text-white font-anton text-3xl flex items-center justify-center rounded-full mx-auto comic-border-thick shadow-comic">
            {(user?.displayName || user?.email || 'U').charAt(0).toUpperCase()}
          </div>
          <h2 className="font-anton text-2xl sm:text-3xl text-[#1a1a1a]">
            {userProfile?.displayName || user?.displayName || user?.email || 'Participant'}
          </h2>
          <p className="font-bricolage text-sm text-zinc-600">
            {user?.email}
          </p>
        </div>

        <div className="space-y-3 font-bricolage text-sm">
          {userProfile && (
            <>
              <div className="flex items-center gap-3 bg-white p-3 comic-border-thick">
                <Calendar className="w-4 h-4 text-[#bb0013]" />
                <span className="text-zinc-700 font-medium">Date of Birth</span>
                <span className="ml-auto text-zinc-900">{userProfile.dob || '—'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 comic-border-thick">
                <MapPin className="w-4 h-4 text-[#bb0013]" />
                <span className="text-zinc-700 font-medium">College</span>
                <span className="ml-auto text-zinc-900">{userProfile.college || '—'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 comic-border-thick">
                <ShieldCheck className="w-4 h-4 text-[#bb0013]" />
                <span className="text-zinc-700 font-medium">Branch / Department</span>
                <span className="ml-auto text-zinc-900">{userProfile.branch || userProfile.department || '—'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 comic-border-thick">
                <UserIcon className="w-4 h-4 text-[#bb0013]" />
                <span className="text-zinc-700 font-medium">Year</span>
                <span className="ml-auto text-zinc-900">{userProfile.year || '—'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 comic-border-thick">
                <ShieldCheck className="w-4 h-4 text-[#bb0013]" />
                <span className="text-zinc-700 font-medium">Diet</span>
                <span className="ml-auto text-zinc-900">{userProfile.diet || '—'}</span>
              </div>
            </>
          )}

          {team && (
            <div className="bg-[#fddc00] p-3 comic-border-thick">
              <div className="font-anton text-xs text-[#1a1a1a] uppercase mb-1">Team Code</div>
              <span className="font-anton text-lg text-[#1a1a1a]">{team.teamCode}</span>
            </div>
          )}
        </div>

        <button
          onClick={onSignOut}
          className="w-full bg-[#bb0013] hover:bg-[#d90017] text-white font-anton text-lg py-3.5 comic-border-thick shadow-comic uppercase cursor-pointer flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5 text-[#fddc00] fill-[#fddc00]" />
          SIGN OUT
        </button>
      </div>
    </div>
  );
};
