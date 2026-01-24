import { useTranslations } from 'next-intl';
import StatusBadge from './StatusBadge';

interface SeniorProps {
  id: string;
  name: string;
  lastCheckIn: string; // ISO date string
  status: 'CHECKED_IN' | 'MISSED' | 'PENDING';
}

export default function SeniorCard({ senior }: { senior: SeniorProps }) {
  const t = useTranslations('Dashboard');
  const date = new Date(senior.lastCheckIn);
  
  // Format time (e.g. 10:30)
  const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-xl font-bold text-stone-900">{senior.name}</h3>
        <p className="text-stone-500 text-sm mt-1">
          {t('lastCheckIn')}: <span className="font-medium text-stone-700">{timeStr}</span>
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <StatusBadge status={senior.status} />
        {/* Placeholder link for detail view */}
        <button 
          className="text-red-600 font-semibold hover:text-red-800 text-sm cursor-not-allowed opacity-50"
          title="Not implemented yet"
        >
          {t('viewDetails')} &rarr;
        </button>
      </div>
    </div>
  );
}
