import Link from 'next/link'
import tw, { styled, css } from 'twin.macro'
import { Heading2, Section } from '../Common'

const programs = [
  {
    image: 'vanuatu.jpg',
    title: 'Vanuatu',
    url: '/programs/vanuatu',
  },
  {
    image: 'antigua-barbuda.jpg',
    title: 'Antigua & Barbuda',
    url: '/programs/antigua-barbuda',
  },
  {
    image: 'st-lucia.jpg',
    title: 'St. Lucia',
    url: '/programs/st-lucia',
  },
  {
    image: 'solomon-islands.jpg',
    title: 'Solomon Islands',
    url: '/programs/solomon-islands',
  },
  {
    image: 'grenada.jpg',
    title: 'Grenada',
    url: '/programs/grenada',
  },
]

const Card = styled.div(({ bgImage }) => [
  tw`flex flex-col border rounded-lg shadow-lg text-dark h-80 p-5 bg-cover bg-center bg-no-repeat`,
  `background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45)), url(/images/${bgImage});`,
])

const hoverStyles = css`
  cursor: pointer;
  &:hover button {
    color: #ecaa2c;
  }
`

export default function Programs({ headingSm, title = 'Popular Programs' }) {
  return (
    <Section tw="px-10 flex flex-col items-center lg:px-52">
      <Heading2 css={[tw`text-center`, headingSm ? tw`text-lg` : tw`text-3xl`]}>
        {title}
      </Heading2>
      <hr tw="mt-3 bg-center bg-no-repeat border-0 bg-contain h-5 w-56 background-image[url(/images/heading-line-black.png)]" />
      <div tw="grid auto-cols-max gap-5 md:grid-cols-2 lg:grid-cols-4">
        {programs.map(({ image, title, url }, i) =>
          i === 0 ? (
            <Link key={i} href={url}>
              <a tw="mt-8 col-span-full" css={hoverStyles}>
                <Card bgImage={image}>
                  <div tw="flex justify-between relative">
                    <div tw="bg-white shadow-lg w-7 h-7 p-1 flex justify-center items-center rounded-full">
                      5 <span className="star" tw="w-3 h-3" />
                    </div>
                    <div tw="bg-white shadow rounded-full px-3 flex items-center text-xs font-semibold">
                      Citizenship By Investment
                    </div>
                  </div>
                  <div tw="flex flex-col mt-auto">
                    <h4 tw="text-white font-serif font-semibold text-6xl">
                      {title}
                    </h4>
                    <button tw="font-semibold text-white text-left mt-3">
                      Explore &nbsp; <span>&#10230;</span>
                    </button>
                  </div>
                </Card>
              </a>
            </Link>
          ) : (
            <Link key={i} href={url}>
              <a css={hoverStyles}>
                <Card tw="h-64" bgImage={image}>
                  <div tw="flex justify-between relative">
                    <div tw="bg-white text-sm shadow-lg w-7 h-7 p-1 flex justify-center items-center rounded-full">
                      5 <span className="star" tw="w-3 h-3" />
                    </div>
                    <div
                      tw="bg-white shadow rounded-full px-3 ml-2 flex items-center font-semibold max-w-max leading-tight flex-grow-0"
                      style={{ fontSize: 10 }}
                    >
                      Citizenship By Investment
                    </div>
                  </div>
                  <div tw="flex flex-col mt-auto">
                    <h4 tw="text-white font-serif font-semibold text-2xl leading-tight">
                      {title}
                    </h4>
                    <button tw="font-semibold text-white text-left mt-3">
                      Explore &nbsp; <span>&#10230;</span>
                    </button>
                  </div>
                </Card>
              </a>
            </Link>
          ),
        )}
      </div>
    </Section>
  )
}
