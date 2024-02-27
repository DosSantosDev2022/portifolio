'use client'
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
  variant?: 'primary' | 'outlined' | 'highlight'
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const Component = props.asChild ? Slot : 'button'
  const variantClasses = {
    primary:
      'bg-zinc-50 text-zinc-900 hover:bg-zinc-100 hover:scale-105 transition-all duration-500',
    outlined: 'bg-transparent border border-zinc-50 text-zinc-50',
    highlight: 'text-zinc-50 hover:bg-violet-800 duration-500 bg-violet-950 ',
  }

  const _className = twMerge(
    variantClasses[variant],
    'appearance-none rounded-md p-2 text-sm font-bold shadow hover:scale-105 transition-all',
    className,
  )
  return (
    <Component className={_className} {...props}>
      {props.children}
    </Component>
  )
}
