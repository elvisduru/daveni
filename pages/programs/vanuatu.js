import Head from 'next/head'
import {
  ProgramHeading,
  ProgramHero,
  ProgramLeading,
} from '../../components/Common'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'
import 'twin.macro'

export default function Vanuatu() {
  return (
    <main>
      <Head>
        <title>Vanuatu Citizenship By Investment | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero>
        <div tw="md:(ml-auto w-1/2)">
          <ProgramHeading>Vanuatu</ProgramHeading>
          <ProgramLeading>Good vibes happen on the tides</ProgramLeading>
        </div>
      </ProgramHero>
      <Footer noCallout />
    </main>
  )
}
