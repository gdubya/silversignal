'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('Page');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || t('errorGeneric'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('errorConnection'));
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-8 border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-red-700 tracking-tight">{t('title')}</div>
          <nav className="flex items-center gap-6">
            <a href="#signup" className="text-sm font-semibold text-stone-600 hover:text-red-700 transition-colors">
              {t('keepMeUpdated')}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-stone-900 mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <a 
              href="#signup" 
              className="inline-block bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('getNotified')}
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 sm:px-8 bg-stone-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-stone-800">{t('howItWorks')}</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border border-stone-200">
                  📩
                </div>
                <h3 className="text-xl font-bold mb-3">{t('dailyCheckIn')}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t('dailyCheckInDescription')}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border border-stone-200">
                  ✅
                </div>
                <h3 className="text-xl font-bold mb-3">{t('simpleConfirmation')}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t('simpleConfirmationDescription')}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm border border-stone-200">
                  🚨
                </div>
                <h3 className="text-xl font-bold mb-3">{t('notificationWhenNeeded')}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t('notificationWhenNeededDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 px-4 sm:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-stone-900">{t('whyUse')}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-lg text-stone-700">{t('whyUseItem1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-lg text-stone-700">{t('whyUseItem2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-lg text-stone-700">{t('whyUseItem3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-lg text-stone-700">{t('whyUseItem4')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-inner">
                <blockquote className="text-xl italic text-stone-600 mb-4">
                  {t('testimonial')}
                </blockquote>
                <cite className="font-semibold text-stone-800 not-italic">{t('testimonialAuthor')}</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-up Section */}
        <section id="signup" className="py-24 px-4 sm:px-8 bg-stone-900 text-stone-50">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('comingSoon')}</h2>
            <p className="text-lg text-stone-300 mb-10">
              {t('comingSoonSubtitle')}
            </p>
            
            {status === 'success' ? (
              <div className="bg-green-600/20 border border-green-500 text-green-100 p-6 rounded-lg">
                <p className="text-xl font-medium">{t('thankYou')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('yourEmail')}
                  required
                  className="flex-grow px-5 py-4 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? t('sending') : t('keepMeUpdated')}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-400 font-medium">{message}</p>
            )}
            <p className="mt-6 text-sm text-stone-500">
              {t('noSpam')}
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">{t('copyright', {year: new Date().getFullYear()})}</p>
        </div>
      </footer>
    </div>
  );
}