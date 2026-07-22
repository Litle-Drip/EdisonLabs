import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-12',
        narrow ? 'max-w-[860px]' : 'max-w-content',
        className
      )}
    >
      {children}
    </div>
  )
}
