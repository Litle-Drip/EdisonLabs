import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'live' | 'coming-soon'
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isComingSoon = status === 'coming-soon'

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-badge text-[11px] font-medium',
        'border bg-surface',
        isComingSoon
          ? 'border-[rgba(251,191,36,0.3)] text-[#fbbf24]'
          : 'border-[rgba(34,197,94,0.3)] text-[#4ade80]'
      )}
    >
      <span
        className={cn(
          'w-[7px] h-[7px] rounded-full',
          isComingSoon
            ? 'bg-[#f59e0b] animate-pulse-dev'
            : 'bg-[#22c55e] animate-pulse-badge'
        )}
      />
      {isComingSoon ? 'Coming Soon' : 'Live'}
    </div>
  )
}
