import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { Team, UserProfile } from '../types';
import { subscribeToTeam, getTeamById } from '../services/team';
import { getUserProfile } from '../services/userProfile';

export function useTeam(user: User | null, userProfile: UserProfile | null) {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !userProfile?.teamId) {
      setTeam(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeToTeam(userProfile.teamId, (teamData) => {
      setTeam(teamData);
      setLoading(false);
    });

    return unsubscribe;
  }, [user, userProfile?.teamId]);

  const refresh = async () => {
    if (!user) return;
    const latestProfile = await getUserProfile(user.uid);
    if (!latestProfile?.teamId) {
      setTeam(null);
      return;
    }
    setTeam(await getTeamById(latestProfile.teamId));
  };

  return { team, loading, refresh };
}
