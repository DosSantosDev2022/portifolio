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
      className="lg:w-full flex items-center justify-start p-5 lg:h-[467px] mt-2 bg-cover bg-no-repeat border"
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full lg:w-[500px] space-y-4">
        <h1 className="text-zinc-50 font-bold text-4xl lg:text-5xl">
          {title}{' '}
        </h1>
        <p className="font-bold text-xl lg:text-2xl text-purple-600">
          {subtitle}{' '}
        </p>
        <p className="text-md lg:text-lg font-light text-zinc-100 mt-2">
          {paragraph}
        </p>
      </div>
    </div>
  )
}
