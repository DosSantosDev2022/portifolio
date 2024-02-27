interface HeroProps {
  title?: string
  subtitle?: string
  paragraph?: string
  urlImage?: string
}

export function Hero({ urlImage, paragraph, subtitle, title }: HeroProps) {
  return (
    <div
      className="w-full flex items-center justify-start p-5 h-[467px] mt-2 bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[500px] flex flex-col ">
        <h1 className="text-zinc-50 font-bold text-6xl">{title} </h1>
        <p className="font-bold text-2xl text-purple-600">{subtitle} </p>
        <p className="text-md font-light text-zinc-100 mt-2">{paragraph}</p>
      </div>
    </div>
  )
}
