'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

function Dashboard() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
