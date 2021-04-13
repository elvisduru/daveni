import Head from 'next/head'
import {
  Heading2,
  Heading3,
  ProgramHeading,
  ProgramHero,
  ProgramLeading,
  ProgramQuote,
  ProgramStats,
  Section,
} from '../../components/Common'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'
import 'twin.macro'
import Link from 'next/link'

const stats = [
  {
    title: 'Investment',
    icon: '/images/money.svg',
    value: 'From $130,000',
  },
  {
    title: 'Program',
    icon: '/images/passport.svg',
    value: 'Citizenship & Passport',
  },
  {
    title: 'Race',
    icon: '/images/map.svg',
    value: 'Carribean',
  },
  {
    title: 'Regions',
    icon: '/images/world.svg',
    value: '147 Countries & Territories',
  },
  {
    title: 'Population',
    icon: '/images/population.svg',
    value: '276,244',
  },
]

export default function Vanuatu() {
  return (
    <main>
      <Head>
        <title>Vanuatu Citizenship By Investment | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero>
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>Vanuatu</ProgramHeading>
          <ProgramLeading>Good vibes happen on the tides</ProgramLeading>
        </div>
        <ProgramStats stats={stats} />
      </ProgramHero>
      <Section tw="md:py-0">
        <ul
          tw="flex flex-col md:flex-row bg-black bg-opacity-5 rounded p-3 leading-loose"
          css={`
            & li:hover {
              text-decoration: underline;
              text-underline-offset: 5px;
            }

            @media (min-width: 500px) {
              & li {
                margin-right: 15px;
                font-size: 12.5px;
                line-height: normal;
              }
            }
          `}
        >
          <li>
            <Link href="#about">
              <a>Vanuatu</a>
            </Link>
          </li>
          <li>
            <Link href="#benefits">Program &amp; Benefits</Link>
          </li>
          <li>
            <Link href="#investment">Investment Options</Link>
          </li>
          <li>
            <Link href="#countries">Visa Free Countries</Link>
          </li>
        </ul>
      </Section>
      <Section tw="pt-0">
        <Heading2 id="about">About Vanuatu</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          The Republic of Vanuatu is a Pacific island country located in the
          South Pacific Ocean. Vanuatu’s islands are the perfect place to
          discover a world of sunshine and wild adventures. Deserted beaches,
          ancient cultures, remote and rugged islands and world-class diving are
          just a small part of the magnetism of this scattered 80-plus island
          archipelago.
        </ProgramQuote>
        <p>
          Vanuatu is divided into six provinces. All provinces have their own
          signature attractions, which range from water music, snake dancers and
          champagne beaches to vibrant cultures, magma-filled active volcanos,
          pristine blue holes and world war 2 relics.
        </p>
        <p tw="mt-3">
          Vanuatu is a member of the African, Caribbean and Pacific Group of
          States, Non-Aligned Movement, Organization international de la
          Francophonie, Pacific Community, Pacific Islands Forum, United Nations
          and World Trade Organization. The country’s population is
          approximately 270,000 and encompasses a diversity of languages spoken
          such as French, English and Bislama.
        </p>
        <Heading3></Heading3>
      </Section>
      <Footer noCallout />
    </main>
  )
}
