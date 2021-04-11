import Head from 'next/head'
import {
  ProgramHeading,
  ProgramHero,
  ProgramLeading,
  ProgramStats,
} from '../../components/Common'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'
import 'twin.macro'

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
      <Footer noCallout />
    </main>
  )
}
