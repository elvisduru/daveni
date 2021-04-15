import Head from 'next/head'
import Footer from '../components/Home/Footer'
import Testimonial from '../components/Home/Testimonial'
import NavBar from '../components/NavBar'
import { Heading3, PageHeader, Section } from '../components/Common'
import 'twin.macro'
import Link from 'next/link'

export default function Citizen() {
  return (
    <main>
      <Head>
        <title>Global Citizenship Overview | Daveni Partners</title>
      </Head>
      <NavBar />
      <PageHeader>
        <h1 tw="font-semibold text-2xl">Are You a Global Citizen?</h1>
        <p tw="text-sm mt-2 leading-relaxed color[#D9A55A] max-width[30ex]">
          Let us help you become one
        </p>
      </PageHeader>
      <Section
        css={`
          & p {
            margin-top: 1rem;
          }
        `}
      >
        <Heading3>What is a Global Citizen?</Heading3>
        <p>
          We have been asking ourselves this question with intensifying
          frequency over the past five years, not only as industry experts, but
          also in our roles as members of our respective communities, families
          and businesses. And we see the answers in these distinctive contexts
          coming to the same conclusion.
        </p>
        <p>
          Global citizens are those present and future leaders who have the
          power to change our world to make it a better place, and who are
          capable of providing for its sustainable development.
        </p>
        <p>
          We are fortunate enough to be able to recognize global citizens among
          our clients, partners and friends. And we are here to empower them and
          involve them in the global citizen movement.
        </p>
        <Heading3 tw="mt-8">
          Do you consider yourself a global citizen?
        </Heading3>
        <p>
          Whether you are seeking permanent residency or a second citizenship,
          it all starts with Arton through our unparalleled range of innovative,
          bespoke investor programs and services. Learn how becoming a Global
          Citizen can help you create the opportunities you need to make the
          world a better place for yourself, your family and for all of us.
        </p>
        <Heading3 tw="mt-8">
          Are you a professional service provider with expertise in global
          migration and wealth management?
        </Heading3>
        <p>
          Our burgeoning industry requires focused teamwork to ensure that our
          clients receive the best service possible from the start of the
          application process through to obtainment of PR or citizenship and
          beyond. Arton Capital’s Certified Partner network allows global
          citizens to have the required guidance whenever, wherever they need
          it.
        </p>
        <Heading3 tw="mt-8">
          Are you a government representative seeking to improve your country’s
          economy?
        </Heading3>
        <p>
          Residency by investment and citizenship by investment programs open up
          an incredible revenue stream to governments. These programs can fund
          much-needed infrastructure, arts and culture projects and provide work
          for local citizens, thereby improving the country’s economy.
        </p>
        <Link href="/contact">
          <a tw="block cursor-pointer mt-5 underline color[#D9A55A]">
            Discover the power of global citizenship now.
          </a>
        </Link>
      </Section>
      <Footer />
    </main>
  )
}
