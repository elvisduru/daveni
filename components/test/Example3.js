import { animated, to, useTrail } from '@react-spring/web'
import useToggle from '../../hooks/useToggle'
import tw from 'twin.macro'

const imgList = [
  'https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg',
  'https://images.pexels.com/photos/1000654/pexels-photo-1000654.jpeg',
  'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg',
  'https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg',
]

const Item = tw.div`w-full h-60 bg-cover bg-center bg-no-repeat flex flex-col text-sm`

const AnimatedItem = animated(Item)

const GridContainer = tw.div`grid grid-cols-4 gap-1`

export default function Example3() {
  const [show, toggleShow] = useToggle()
  const [fade, toggleFade] = useToggle()

  const [trail, set] = useTrail(imgList.length, () => ({
    opacity: 1,
    sc: 0.9,
    x: '0%',
    y: '0px',
    skewX: 0,
    from: {
      opacity: 0,
      sc: 0.8,
      x: '100%',
      y: '100px',
      skewX: 20,
    },
  }))

  const handleAnimation = () => {
    toggleShow()
    set.current[0].start({
      sc: show ? 0.9 : 1,
    })
  }

  const handleOpacity = () => {
    toggleFade()
    set.current[0].start({
      opacity: fade ? 1 : 0.6,
    })
  }

  return (
    <div tw="px-5 mt-10 text-center">
      <h2 tw="text-lg font-semibold mb-2">Example 3</h2>
      <p>Click on a box to trigger scale animation</p>
      <GridContainer onClick={handleAnimation} style={{ cursor: 'pointer' }}>
        {trail.map(({ sc, x, y, skewX, ...props }, i) => (
          <AnimatedItem
            key={i}
            style={{
              ...props,
              transform: to(
                [sc, x, y, skewX],
                (sc, x, y, skewX) =>
                  `scale(${sc}) translate(${x}, ${y}) skewX(${skewX}deg)`,
              ),
              backgroundImage: `url(${imgList[i]}?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
            }}
          />
        ))}
      </GridContainer>
      <div tw="flex justify-center mt-8">
        <button tw="bg-black px-5 py-3 text-white" onClick={handleOpacity}>
          Change Opacity
        </button>
      </div>
    </div>
  )
}
