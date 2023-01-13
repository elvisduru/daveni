import { animated, useSpring } from '@react-spring/web'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle'
import 'twin.macro'

export default function Footer({ noCallout }) {
  const [slide, toggleSlide] = useToggle()

  const [springProps, set] = useSpring(() => ({
    from: {
      transform: 'translateY(0%)',
    },
  }))

  const handleSlide = () => {
    toggleSlide()
    set.current[0].start({
      transform: `translateY(${!slide ? -50 : 0}%)`,
    })
  }

  return (
    <footer tw="px-8 pt-8 lg:(px-20 pt-10)">
      <div
        onMouseEnter={handleSlide}
        onMouseLeave={handleSlide}
        onTouchStart={handleSlide}
        onTouchCancel={handleSlide}
        css={`
          display: ${noCallout ? 'none' : 'flex'};
          height: calc(100vh - 200px);
          color: #121212;

          @media (max-width: 800px) {
            height: 200px;
          }
        `}
        tw="bg-primary cursor-pointer font-semibold text-4xl px-5 leading-tight text-center lg:(text-7xl leading-relaxed) items-center justify-center"
      >
        <Link href="/contact">
          <a tw="overflow-hidden h-24 lg:h-36">
            <animated.div style={springProps}>
              <h2>Let's grab a coffee</h2>
              <h2>and take over the world</h2>
            </animated.div>
          </a>
        </Link>
      </div>
      <div tw="pt-10 flex flex-col">
        <button
          tw="flex items-center self-end relative"
          css={`
            & :first-child {
              font-size: 40px;
              transition: 0.2s margin-top ease-in-out;
              position: absolute;
              left: -1.5rem;
              margin-top: -10px;
            }
            &:hover :first-child {
              margin-top: -30px;
            }
          `}
        >
          <span>&uarr;</span>
          <span
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }}
          >
            Top
          </span>
        </button>
        <div tw="flex flex-col py-10 lg:flex-row">
          <div tw="flex flex-col items-start mb-12 lg:(max-w-sm mr-12 flex-row)">
            <img
              tw="mb-8 lg:mr-8 w-32"
              src="/images/logo-footer.png"
              alt="Daveni"
            />
            <p tw="font-medium">
              We are proudly accountable to a better way of doing business. We
              actively pursue the wellbeing of staff, communities and
              environment and help the clients we work with do so as well.
            </p>
          </div>
          <div
            tw="text-xl lg:text-2xl leading-normal"
            css={`
              text-decoration: underline;
              text-decoration-thickness: 1px;
              text-underline-offset: 5px;
            `}
          >
            <a tw="transition hocus:opacity-80" href="https://google.com">
              3 Gbemi Oluwa Close,<br /> Off Sule Abuka Crescent
              <br /> Off Opebi Road, Ikeja <br />
              Lagos.
            </a>
            <p tw="cursor-pointer mt-5 transition hocus:opacity-80">
              Subscribe to our newsletter
            </p>
          </div>
          <div
            tw="text-xl lg:text-2xl leading-normal lg:ml-auto"
            css={`
              & a {
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 5px;
              }
            `}
          >
            <a href="tel:+2348085799962">(234) 808-579-9962</a> <br />
            <a href="mailto:hello@davenipartners.com">
              hello@davenipartners.com
            </a>
            <div tw="mt-5">
              <h5 tw="font-medium mb-2">Click Below to Follow Us</h5>
              <ul
                tw="flex"
                css={`
                  & li {
                    margin-right: 2rem;
                    border: 1px solid black;
                    border-radius: 100%;
                    height: 4rem;
                    width: 4rem;
                    vertical-align: middle;
                    text-align: center;
                    line-height: 4rem;
                    cursor: pointer;
                  }

                  @media (max-width: 500px) {
                    & li {
                      margin-right: 1rem;
                      height: 3.5rem;
                      width: 3.5rem;
                      line-height: 3.5rem;
                    }
                  }

                  & li:hover {
                    background-color: black;
                    color: white;
                  }
                `}
              >
                <li>
                  <a href="https://web.facebook.com/davenipartners/">FB</a>
                </li>
                <li>
                  <a href="https://twitter.com/davenipartners/">TW</a>
                </li>
                <li>
                  <a href="https://instagram.com/daveni.partners/">INS</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/davenipartners">
                    LKD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div tw="text-center">
        Made with ♥ By{' '}
        <a tw="underline" href="//elvisduru.github.io">
          @the_levelup_dev
        </a>
      </div>
    </footer>
  )
}
