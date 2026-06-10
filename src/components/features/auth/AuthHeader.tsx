import React from 'react'

interface AuthHeaderProps {
  welcomeText?: string
  title: string
  subtitle: string
}

export function AuthHeader({ welcomeText, title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-center space-y-4 mb-8">
      {welcomeText && (
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase block">
          {welcomeText}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight leading-none">
        {title}
        <span className="text-primary">.</span>
      </h1>
      <p className="text-sm md:text-base text-muted-foreground font-medium">
        {subtitle}
      </p>
    </div>
  )
}
