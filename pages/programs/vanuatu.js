import Head from 'next/head'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'

export default function Vanuatu() {
  return (
    <main>
      <Head>
        <title>Vanuatu Citizenship By Investment | Daveni Partners</title>
      </Head>
      <NavBar />

      <Footer noCallout />
    </main>
  )
}
