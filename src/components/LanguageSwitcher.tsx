'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div className="inline-block relative">
      <select
        defaultValue={locale}
        className="appearance-none bg-transparent py-2 px-4 pr-8 rounded border border-gray-300 hover:border-gray-400 focus:outline-none cursor-pointer text-2xl"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">🇬🇧</option>
        <option value="no">🇳🇴</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
}
