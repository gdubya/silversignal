'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CheckInPage() {
  const t = useTranslations('SeniorCheckIn');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Mock user name for now
  const userName = "Ola";

  const handleCheckIn = async () => {
    setStatus('loading');
    
    try {
      // Simulate API call
      const res = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'ola@leverdu.no' }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
        setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4 text-center">
        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg animate-bounce">
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-4">{t('confirmed')}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border-2 border-stone-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
          {t('greeting', { name: userName })}
        </h1>
        <p className="text-xl sm:text-2xl text-stone-600 mb-12">
          {t('question')}
        </p>

        <button
          onClick={handleCheckIn}
          disabled={status === 'loading'}
          className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-2xl sm:text-3xl py-8 rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? t('loading') : t('button')}
        </button>

        {status === 'error' && (
          <p className="mt-6 text-xl text-red-600 font-medium bg-red-50 p-4 rounded-lg">
            {t('error')}
          </p>
        )}
      </div>
    </div>
  );
}
