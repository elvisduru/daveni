import Head from 'next/head'
import 'twin.macro'
import { PageHeader, Section } from '../components/Common'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Home/Footer'
import NavBar from '../components/NavBar'

export default function Contact() {
  return (
    <main>
      <Head>
        <title>Contact Us | Daveni Partners</title>
      </Head>
      <NavBar />
      <PageHeader
        css={`
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url(/images/vanuatu-header1.jpg);
          background-blend-mode: saturation;
        `}
      >
        <h1 tw="font-semibold text-3xl">Schedule An Appointment</h1>
        <p tw="text-sm mt-2 leading-relaxed color[#D9A55A] max-width[30ex]">
          Let's make some magic together
        </p>
      </PageHeader>
      <Section>
        <ContactForm />
      </Section>
      <Footer noCallout />
    </main>
  )
}
