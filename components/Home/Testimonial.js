import { Heading2, Section } from '../Common'
import { animated, useTransition } from '@react-spring/web'
import { useState } from 'react'
import tw from 'twin.macro'

const testimonialList = [
  {
    id: 0,
    image: 'vanuatu.jpg',
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: 'Client Name',
  },
  {
    id: 1,
    image: 'vanuatu.jpg',
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: 'Client Name',
  },
  {
    id: 2,
    image: 'vanuatu.jpg',
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: 'Client Name',
  },
]

const Control = tw.div`text-6xl opacity-60 hover:opacity-100 font-semibold flex justify-center items-center absolute cursor-pointer h-full top-0`
const Wrapper = tw.div`w-full h-3/5 md:max-w-prose grid grid-cols-3 items-center relative`

export default function Testimonial() {
  const [[index, dir], setIndex] = useState([0, 0])

  const slideLeft = () =>
    setIndex([
      (index - 1 + testimonialList.length) % testimonialList.length,
      -1,
    ])
  const slideRight = () => setIndex([(index + 1) % testimonialList.length, 1])

  const transition = useTransition(testimonialList[index], {
    from: {
      opacity: 0,
      transform: `translate3d(${dir * 100}%,0,0) scale(0.5)`,
    },
    enter: { opacity: 1, transform: `translate3d(0%,0,0) scale(1)` },
    leave: {
      opacity: 0,
      transform: `translate3d(${dir * -100}%,0,0) scale(0.5)`,
    },
  })

  const fragment = transition((props, item) => (
    <animated.div
      tw="px-3 h-full absolute flex flex-col justify-center items-center text-white top-0 w-full md:px-10"
      style={{ ...props, willChange: 'transform' }}
    >
      <img
        tw="rounded-full shadow-2xl w-20 h-20 md:(w-32 h-32) mb-8"
        src={`/images/${item.image}`}
        alt="Elvis Duru"
      />
      <p tw="text-xs mb-4 md:(mb-8 text-lg)">{item.text}</p>
      <p tw="text-primary text-xs md:text-base">{item.name}</p>
    </animated.div>
  ))

  return (
    <Section
      tw="overflow-hidden flex flex-col items-center bg-center bg-cover bg-fixed background-image[url(/images/testimonials.jpg)] text-white bg-no-repeat text-center mt-20"
      css={`
        height: 85vh;
      `}
    >
      <Heading2>Don't just take our word for it.</Heading2>
      <hr tw="mt-3 mb-12 md:(mt-5 mb-16) bg-center bg-no-repeat border-0 bg-contain h-5 w-56 background-image[url(/images/heading-line-white.png)]" />
      <Wrapper>
        <div tw="col-span-full">{fragment}</div>
        <Control onClick={slideLeft} tw="-left-4 md:-left-24">
          &#8249;
        </Control>
        <Control onClick={slideRight} tw="-right-4 md:-right-24">
          &#8250;
        </Control>
      </Wrapper>
    </Section>
  )
}
