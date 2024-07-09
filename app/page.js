'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  // console.log(isAuthenticated);
  // console.log(isLoading);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push('/dashboard');
      } else {
        router.push('/api/auth/login?post_login_redirect_url=/dashboard');
      }
    }
  }, [isAuthenticated, isLoading]);

  return null;
}
