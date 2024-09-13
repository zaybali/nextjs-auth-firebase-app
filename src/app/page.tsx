// app/home/page.tsx
'use client';

import { useAuth } from '@/context/authcontext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (!user.emailVerified) {
      router.push('/verify-email');
    }
  }, [user, router]);

  return (
    <div>
      <h1>Welcome, {user?.email}!</h1>
    </div>
  );
};

export default Home;
