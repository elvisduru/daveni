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
        <Heading3>Secure Your Vanuatu Citizenship By Investment</Heading3>
        <p>
          The team of skilled and knowledgeable experts at Daveni Partners are
          dedicated to ensuring that our clients have a transparent and
          hassle-free journey towards the acquisition of their citizenship and
          residency. We aim to offer a gateway to freedom to our clients through
          Government approved investment programs that helps them secure their
          family’s future. With the help of our highly competent and experienced
          team, you can gain your second citizenship and have your Vanuatu
          passport in hand through legal and legitimate programs.
        </p>
        <Heading3>Become a Global Citizen - Call Us Today</Heading3>
        <p
          css={`
            & a {
              color: #f1ab41;
            }
          `}
        >
          For further information about how we can help you acquire your second
          citizenship, feel free to give us a call at{' '}
          <a href="tel:+2348085799962">(234) 808-579-9962</a>. You can also
          contact us through email at{' '}
          <a href="mailto:hello@daveni.co">hello@daveni.co</a> or fill in our{' '}
          <Link href="/contact">
            <a>online contact form</a>
          </Link>
          , and we will reply back as soon as possible.
        </p>
      </Section>
      <Footer noCallout />
    </main>
  )
}
