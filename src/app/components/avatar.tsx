import Image from 'next/image'

export async function AvatarComponent() {
  return (
    <Image
      src={'/Profile.png'}
      width={48}
      height={48}
      quality={100}
      alt=""
      className="rounded-full lg:hidden flex"
    />
  )
}
