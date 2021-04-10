import { config } from '@react-spring/core'
import { useTransition } from '@react-spring/core'
import { animated } from '@react-spring/web'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import 'twin.macro'

const slides = [
  {
    id: 0,
    url: 'antigua-barbuda.jpg',
    pre: 'Become a',
    mark: 'Global',
    title: 'Citizen',
    desc:
      'Discover the power of a second citizenship. \n Live the life you were destined to live.',
  },
  {
    id: 1,
    url: 'solomon-islands.jpg',
    pre: "It's all",
    mark: 'about',
    title: 'Access',
    desc: 'Access a world of visa-free travel and global mobility',
  },
  {
    id: 2,
    url: 'st-lucia.jpg',
    pre: "It's all",
    mark: 'about',
    title: 'Freedom',
    desc:
      "Freedom of mind to focus on what's important \n for you and your family.",
  },
  {
    id: 3,
    url: 'vanuatu.jpg',
    pre: 'Become a',
    mark: 'Global',
    title: 'Citizen',
    desc:
      'Discover the power of a second citizenship. \n Live the life you were destined to live.',
  },
]

export default function Hero() {
  const [index, set] = useState(0)
  const transition = useTransition(slides[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  const fragment = transition((props, item) => (
    <animated.div
      tw="absolute bg-fixed flex flex-col justify-center items-center text-white top-0 left-0 right-0 h-screen bg-cover bg-center bg-no-repeat md:px-20"
      style={{
        ...props,
        willChange: 'opacity',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(/images/${item.url})`,
      }}
    >
      <div tw="text-center m-auto flex flex-col items-center">
        <h2 className="display" tw="flex flex-col items-center">
          <span tw="relative font-semibold mb-5 px-2 before:(content block h-0.5 -left-0.5 bottom-1.5 absolute w-full bg-white) text-2xl md:(text-4xl px-3)">
            {item.pre} &nbsp;
            <mark tw="relative z-10 bg-transparent text-primary font-mono text-3xl md:text-5xl">
              {item.mark}
            </mark>
          </span>
          <span>{item.title}</span>
        </h2>
        <p tw="text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
        <Link href="/">
          <a tw="flex w-44 bg-primary text-dark outline-none justify-between mt-14 border border-primary rounded px-5 py-3 cursor-pointer font-semibold uppercase text-sm transition hocus:(bg-transparent border-white text-white)">
            Get Started <span>&#10230;</span>
          </a>
        </Link>
      </div>
      <ul tw="flex flex-col w-32"></ul>
    </animated.div>
  ))

  useEffect(() => {
    const t = setInterval(() => set(state => (state + 1) % slides.length), 5000)
    return () => {
      clearInterval(t)
    }
  }, [])

  return <div tw="relative h-screen w-full bg-gray-700">{fragment}</div>
}
