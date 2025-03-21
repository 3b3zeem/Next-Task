'use client'; // لأننا سنستخدم حالة أو تفاعل على جانب العميل

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Error happened</h1>
      <p>{error.message || 'Something went wrong!'}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}