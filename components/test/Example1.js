import tw from 'twin.macro'
import { animated, useSpring } from '@react-spring/web'
import useToggle from '../../hooks/useToggle'

const ProgressBar = tw.div`border mx-10 my-5 h-7 relative`
const InnerBar = tw.div`h-full bg-green-500 text-white`
const InnerText = tw.span`absolute text-black left-1/2`

const AnimatedBar = animated(InnerBar)
const AnimatedText = animated(InnerText)

export default function Example1() {
  const [clicked, toggleClick] = useToggle()
  const { width, counter, color, size, backgroundPosition } = useSpring({
    counter: clicked ? 100 : 0,
    color: clicked ? 'white' : 'black',
    width: clicked ? '100%' : '0%',
    size: clicked ? 300 : 200,
    backgroundPosition: clicked ? '50% 0%' : '50% 50%',
  })

  return (
    <div tw="px-5 text-center">
      <h2 tw="text-lg font-semibold mb-2">Example 1</h2>
      <p>Click on the box to trigger animation</p>
      <ProgressBar>
        <AnimatedBar style={{ width }}>
          <AnimatedText style={{ color }}>
            {counter.to(v => Math.floor(v) + '%')}
          </AnimatedText>
        </AnimatedBar>
      </ProgressBar>
      <animated.div
        onClick={toggleClick}
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
          backgroundPosition,
          width: size,
          height: size,
          margin: '40px auto 0',
          cursor: 'pointer',
        }}
      ></animated.div>
    </div>
  )
}
