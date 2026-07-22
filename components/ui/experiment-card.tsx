import { LabExperiment } from '@/lib/products'
import { LabIcon } from './icons'

interface ExperimentCardProps {
  experiment: LabExperiment
  index?: number
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <div className="group relative flex flex-col bg-card-bg border border-border-default rounded-card p-8 overflow-hidden transition-all duration-200 ease-out hover:border-[var(--accent-border-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-[rgba(77,163,255,0.04)] blur-3xl transition-all duration-300 group-hover:bg-[rgba(77,163,255,0.07)] pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-btn bg-[var(--accent-soft)] border border-[var(--accent-border-hover)] text-accent mb-6 transition-all duration-200 group-hover:bg-[rgba(77,163,255,0.14)] group-hover:shadow-[0_0_16px_rgba(77,163,255,0.2)]">
        <span className="drop-shadow-[0_0_6px_rgba(77,163,255,0.6)]">
          <LabIcon iconKey={experiment.iconKey} size={26} />
        </span>
      </div>

      {/* Label */}
      <h3 className="relative z-10 text-lg font-bold text-white mb-3 tracking-[-0.01em]">
        {experiment.label}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm text-text-muted leading-[1.75] flex-1">
        {experiment.description}
      </p>

      {/* Status bar */}
      <div className="relative z-10 mt-8 pt-5 border-t border-border-default flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-badge flex-shrink-0" />
        <span className="text-[11px] font-medium text-text-muted uppercase tracking-[0.08em]">
          Active in The Lab
        </span>
      </div>
    </div>
  )
}
