import { useState, useEffect, useCallback } from 'react';
import { User } from 'firebase/auth';
import { onAuthStateChanged } from '../services/auth';
import { auth } from '../firebase';
import { getUserProfile, createUserProfile } from '../services/userProfile';
import { UserProfile } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // The callback is async, so onAuthStateChanged cannot see a rejection from
    // it: a failed read or create used to escape as an unhandled promise
    // rejection while `loading` stayed true forever, leaving the app on a
    // spinner with no message. Catch it, report it, and always stop loading.
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setError(null);
      try {
        if (firebaseUser) {
          let profile = await getUserProfile(firebaseUser.uid);
          if (!profile) {
            profile = await createUserProfile(firebaseUser);
          }
          setUserProfile(profile);
        } else {
          setUserProfile(null);
        }
      } catch (err: any) {
        console.error('Could not load or create the user profile:', err);
        setUserProfile(null);
        setError(
          err?.code === 'permission-denied'
            ? 'Firestore denied access to your profile. Check that the security rules are deployed.'
            : err?.message || 'Could not load your profile.'
        );
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!user) return;
    try {
      const profile = await getUserProfile(user.uid);
      if (profile) setUserProfile(profile);
    } catch (err: any) {
      console.error('Could not refresh the user profile:', err);
    }
  }, [user]);

  return { user, userProfile, loading, error, refreshProfile };
}
