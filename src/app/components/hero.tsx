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
      className="mt-2 flex items-center justify-start border bg-cover bg-no-repeat p-5 lg:h-[467px] lg:w-full"
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full space-y-4 lg:w-[500px]">
        <h1 className="text-4xl font-bold text-zinc-50 lg:text-5xl">
          {title}{' '}
        </h1>
        <p className="text-xl font-bold text-purple-600 lg:text-2xl">
          {subtitle}{' '}
        </p>
        <p className="text-md mt-2 font-light text-zinc-100 lg:text-lg">
          {paragraph}
        </p>
      </div>
    </div>
  )
}
