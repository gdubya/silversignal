import { getTranslations } from 'next-intl/server';
import SeniorCard from '@/components/dashboard/SeniorCard';
import { prisma } from '@/lib/prisma';
import { Role } from '@/generated/prisma/client';

// Helper to check if a date is today
function isToday(date: Date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

async function getSeniors() {
  const seniors = await prisma.user.findMany({
    where: {
      role: Role.SENIOR,
    },
    include: {
      checkIns: {
        take: 1,
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  return seniors.map(senior => {
    const lastCheckIn = senior.checkIns[0];
    let status: 'CHECKED_IN' | 'MISSED' | 'PENDING' = 'PENDING';
    
    // Simple logic: If checked in today, use that status.
    // If not checked in today, it's PENDING (waiting for today).
    if (lastCheckIn) {
      if (isToday(lastCheckIn.createdAt)) {
         status = lastCheckIn.status as 'CHECKED_IN' | 'MISSED' | 'PENDING';
      } else {
         status = 'PENDING';
      }
    }

    return {
      id: senior.id,
      name: senior.name || senior.email,
      lastCheckIn: lastCheckIn ? lastCheckIn.createdAt.toISOString() : new Date().toISOString(), // Fallback for UI if never
      status,
    };
  });
}

export default async function DashboardPage() {
  const t = await getTranslations('Dashboard');
  const seniors = await getSeniors();

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 py-6 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-stone-900">{t('title')}</h1>
          {/* User Profile placeholder */}
          <div className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold shadow-sm">
            ME
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-stone-700">{t('mySeniors')}</h2>
          <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
            {t('addSenior')}
          </button>
        </div>

        {seniors.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
            <p className="text-stone-500 mb-4">No seniors found.</p>
            <p className="text-sm text-stone-400">Try visiting /checkin to create a test user.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {seniors.map((senior) => (
              <SeniorCard key={senior.id} senior={senior} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}