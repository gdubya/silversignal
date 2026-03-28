import { useTranslations } from 'next-intl';

type Status = 'CHECKED_IN' | 'MISSED' | 'PENDING';

interface Props {
  status: Status;
}

export default function StatusBadge({ status }: Props) {
  const t = useTranslations('Dashboard');

  const styles = {
    CHECKED_IN: 'bg-green-100 text-green-800 border-green-200',
    MISSED: 'bg-red-100 text-red-800 border-red-200',
    PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  };

  const labels = {
    CHECKED_IN: 'statusCheckedIn',
    MISSED: 'statusMissed',
    PENDING: 'statusPending',
  } as const;

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
      {t(labels[status])}
    </span>
  );
}
