interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.03em] text-white whitespace-nowrap">
        {title}
      </h2>
      <div className="section-line" />
    </div>
  )
}
