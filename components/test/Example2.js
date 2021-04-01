import { animated, useSpring, useSprings } from '@react-spring/web'
import { useState } from 'react'
import tw from 'twin.macro'

const colorScheme = [
  {
    name: 'Red munsell',
    hex: '#ec0b43',
    fontColor: '#fff',
  },
  {
    name: 'Blue munsell',
    hex: '#048ba8',
    fontColor: '#fff',
  },
  {
    name: 'Caribbean green',
    hex: '#16db93',
    fontColor: '#000',
  },
  {
    name: 'Maize',
    hex: '#efea5a',
    fontColor: '#000',
  },
  {
    name: 'Neon carrot',
    hex: '#f29e4c',
    fontColor: '#000',
  },
]

const Slide = tw.div`w-full h-0`
const AnimatedSlide = animated(Slide)

export default function Example2() {
  const [index, setIndex] = useState(null)

  const [springProps, update] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }))

  const onItemClick = i => {
    const { name, hex, fontColor } = colorScheme[i]
    console.log(update)
    update.current[0].start({
      name,
      background: hex,
      color: fontColor,
      height: 200,
      opacity: 1,
    })
  }

  const springs = useSprings(
    colorScheme.length,
    colorScheme.map((item, i) => ({
      background: item.hex,
      color: item.fontColor,
      opacity: (index === null) | (i === index) ? 1 : 0.6,
      height: index === null ? 120 : 60,
      from: {
        opacity: 0,
        height: 120,
      },
    })),
  )

  return (
    <div tw="px-5 mt-10 text-center">
      <h2 tw="text-lg font-semibold mb-2">Example 2</h2>
      <p>Click on colored box to trigger animation</p>
      <AnimatedSlide style={springProps}>
        <animated.h4 tw="uppercase">{springProps.name}</animated.h4>
        <animated.p>{index !== null && colorScheme[index].hex}</animated.p>
      </AnimatedSlide>
      <div tw="grid grid-cols-5 gap-1">
        {springs.map((props, i) => (
          <animated.div
            key={i}
            onClick={() => {
              setIndex(i)
              onItemClick(i)
            }}
            style={props}
            tw="flex flex-col items-center text-center w-full h-60 text-sm justify-center"
          />
        ))}
      </div>
    </div>
  )
}
