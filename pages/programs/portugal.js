import Head from 'next/head'
import Link from 'next/link'
import 'twin.macro'
import {
  Heading2,
  Heading3,
  ProgramHeading,
  ProgramHero,
  ProgramLeading,
  ProgramQuote,
  Section,
} from '../../components/Common'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'

export default function Dominica() {
  return (
    <main>
      <Head>
        <title>Portugal Golden Visa Program | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero image="portugal">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>Portugal</ProgramHeading>
          <ProgramLeading tw="mt-6 mb-36">
            Esta é a ditosa Pátria minha amada ("This is my blissful beloved
            homeland")
          </ProgramLeading>
        </div>
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
              <a>Portugal</a>
            </Link>
          </li>
          <li>
            <Link href="#benefits">Program &amp; Benefits</Link>
          </li>
          <li>
            <Link href="#investment">Investment Options</Link>
          </li>
        </ul>
      </Section>
      <Section id="about" tw="pt-0">
        <Heading2>Portugal</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <p>
          Portugal is one of Europe's oldest countries, which is located along
          the Atlantic coast of the Iberian Peninsula in South Western Europe.
          It enjoys a Mediterranean climate and culture, incredible cuisine, and
          stunning beaches. This country boasts of a rich historical and
          architectural heritage. A destination where you can experience the
          best lifestyle, a peaceful and safer environment, a secured future for
          your family, a beautiful &amp; pleasant climate, a thriving economy
          with abundant opportunities.
        </p>
      </Section>
      <Section id="benefits" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>
          Portugal Golden Visa Program (Your Gateway to European Citizenship)
        </Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          The Portugal Golden Visa program, also known as the residence permits
          for investment activity (ARI) has proven to be the most popular scheme
          in Europe with investors attracted to its flexibility and benefits.
        </ProgramQuote>
        <p>
          Since its inception in 2012, the program has proven to be a great
          success, rating 5.5 billion Euros in a little time span. This investor
          visa program, has been actively promoted internationally by the
          Portuguese government.
        </p>
      </Section>
      <Section tw="pt-0 md:pt-0">
        <Heading3>Benefits of the Portugal Golden visa</Heading3>
        <hr tw="border border-primary mt-2 mb-6 w-36" />
        <ul
          tw="list-style-type['☆'] pl-3"
          css={`
            & li {
              padding-left: 0.5rem;
            }
          `}
        >
          <li>
            Visa-free access to the EU Schengen area and right to settle and
            have a business in Portugal.
          </li>
          <li>Eligible for the Portuguese citizenship after 5 years.</li>
          <li>Minimal stay requirement - 7 days per year</li>
          <li>3 generational program - you - children - parents</li>
          <li>Access to Portuguese healthcare &amp; educational system</li>
          <li>
            Residency card holders are exempted from taxation on their worldwide
            income
          </li>
          <li>Potential for ROI (Return on Investment)</li>
          <li>The program is not blacklisted by OECD</li>
        </ul>
      </Section>
      <Section id="investment" tw="pt-0 md:(pt-0)">
        <Heading2>Investment Options</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>Real Estate</Heading3>
        <p>Property Investment options</p>
        <ul>
          <li>A Real Estate purchase with a minimum value of EUR 280,000</li>
        </ul>
      </Section>
      <Footer />
    </main>
  )
}
