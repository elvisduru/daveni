import Head from 'next/head'
import React from 'react'
import { Heading3, PageHeader, Section } from '../components/Common'
import NavBar from '../components/NavBar'
import 'twin.macro'
import Link from 'next/link'
import Footer from '../components/Home/Footer'

export default function About() {
  return (
    <main>
      <Head>
        <title>About Us | Daveni Partners</title>
      </Head>
      <NavBar />
      <PageHeader image="office-space">
        <h1 tw="font-semibold text-3xl">
          Africa's Largest Citienzhip By Investment Company
        </h1>
      </PageHeader>
      <Section
        css={`
          & p {
            margin-top: 1rem;
            opacity: 0.9;
          }

          & li {
            opacity: 0.9;
          }
        `}
      >
        <Heading3>Who we are?</Heading3>
        <p>
          Daveni partners is a leading citizenship consultancy firm specializing
          in investment-based citizenship and residency for clients all over the
          world. Our citizenship and residency programs are globally accredited
          and highly reputable.
        </p>
        <p>
          Our clients place their trust in us because we understand them. We
          have a deep understanding of their needs, their values, and what a
          second citizenship means to them. Most importantly, our clients choose
          to work with us due to our complete transparency.
        </p>
        <p>
          Whether you are looking for visa-free travel benefits, tax efficient
          investment planning, or if you simply want to secure your future and
          the future of your family, you have come to the right place.
        </p>
        <Heading3>Why Choose Daveni Partners?</Heading3>
        <p>
          We know you have a choice when it comes to selecting the right
          investment-based citizenship or residency program.
        </p>
        <p>
          Daveni Partners is the only firm to offer all of the following to its
          clients:
        </p>
        <ul
          tw="list-style-type['☆'] pl-3"
          css={`
            & li {
              padding-left: 0.5rem;
            }
          `}
        >
          <li>A multilingual team of consultants</li>
          <li>An impeccable track record of success</li>
          <li>
            Moneyback guarantee (If your application is denied, you pay us
            nothing)
          </li>
          <li>Free consultation, pre-screening, and assessment</li>
          <li>Unmatched confidentiality standards</li>
          <li>
            A customer-centric approach Experience working with clients of all
            backgrounds and nationalities
          </li>
        </ul>
        <p>
          Want to learn more about how we can help you obtain residency or
          citizenship by investment in one of our world-renowned programs?{' '}
          <Link href="/">
            <a>Contact us</a>
          </Link>{' '}
          today.
        </p>
      </Section>
      <Footer />
    </main>
  )
}
