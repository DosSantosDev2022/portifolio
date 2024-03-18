import React from 'react'

interface HeroProps {
  title?: string
  subtitle?: string
  paragraph?: string
  urlImage?: string
}

export function Hero({ urlImage, paragraph, subtitle, title }: HeroProps) {
  return (
    <div
      className="flex items-center justify-start  px-8 py-7 lg:h-[467px] lg:w-full lg:px-16"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, #27272a 60%, #18181b 100%) , url(${urlImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex w-full flex-col items-start justify-center gap-3 lg:w-[820px] ">
        <h1 className="text-4xl font-bold text-purple-600   lg:text-6xl">
          {title}
        </h1>
        <p className="text-xl font-bold text-purple-600 lg:text-2xl">
          {subtitle}
        </p>
        <p className="text-md mt-2 font-light text-zinc-50 lg:text-lg">
          {paragraph}
        </p>
      </div>
    </div>
  )
}
