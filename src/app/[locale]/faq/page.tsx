'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Faq() {
  const t = useTranslations('Faq');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="w-full py-6 px-4 sm:px-8 border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-red-700 tracking-tight">
                Lever Du?
            </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-stone-600 hover:text-red-700 transition-colors">
              {t('backHome')}
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 mb-12 text-center">
            {t('title')}
          </h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-stone-800">{t('q1')}</h2>
              <p className="text-lg text-stone-600 leading-relaxed">{t('a1')}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-stone-800">{t('q2')}</h2>
              <p className="text-lg text-stone-600 leading-relaxed">{t('a2')}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-stone-800">{t('q3')}</h2>
              <p className="text-lg text-stone-600 leading-relaxed">{t('a3')}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-stone-800">{t('q4')}</h2>
              <p className="text-lg text-stone-600 leading-relaxed">{t('a4')}</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link 
              href="/" 
              className="inline-block bg-stone-200 text-stone-800 font-bold py-3 px-6 rounded-lg hover:bg-stone-300 transition-colors"
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} Lever Du? All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
