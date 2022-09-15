import Head from 'next/head'
import Link from 'next/link'
import 'twin.macro'
import {
  Heading2,
  Heading3,
  ProgramHeading,
  ProgramHero,
  ProgramLeading,
  Section,
} from '../../components/Common'
import Footer from '../../components/Home/Footer'
import NavBar from '../../components/NavBar'

export default function Dominica() {
  return (
    <main>
      <Head>
        <title>Dominica Economic Citizenship Program | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero image="dominica">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>The Commonwealth of Dominica</ProgramHeading>
          <ProgramLeading tw="mt-6 mb-36">
            Apres Bondie C'est La Ter (After God, it is the earth.)
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
              <a>The Commonwealth of Dominica</a>
            </Link>
          </li>
          <li>
            <Link href="#investment">Investment Options</Link>
          </li>
        </ul>
      </Section>
      <Section id="about" tw="pt-0">
        <Heading2>The Commonwealth of Dominica</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <p>
          The Dominica Economic Citizenship Program was established in 1993.
          This program legally offers individuals and families worldwide an
          irrevocable second citizenship and passport in a minimum of three
          months with no visit to the country required.
        </p>
        <p tw="mt-2">
          The commonwealth of Dominica is situated in the Caribbean and is one
          of the most beautiful countries in the world. Dominica is recognized
          for many things, including its year-round sunshine, friendly
          inhabitants and delicious cuisines.
        </p>
        <p tw="mt-2">
          Dominica&apos;s nickname is “The Nature Isle of the Caribbean”, due to
          it&apos;s incredible natural beauty, wondrous waterfalls, magnificent
          mountains, beautiful beaches and so much more.
        </p>
        <p tw="mt-2">
          According to United Nations estimates, the current population of
          Dominica is 71,946, making it the 10th least-populated nation on
          earth.
        </p>
        <p tw="mt-2">
          This Caribbean island nation has an excellent international
          reputation, and consequently, the Commonwealth of Dominica passport
          provides visa-free or visa on arrival access to more than 125
          countries around the world including the entire European Union,
          Switzerland, UK, Singapore, Russia, Brazil and Hong Kong
        </p>
      </Section>
      <Section id="investment" tw="pt-0 md:(pt-0)">
        <Heading2>Investment Options</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>1. Government Fund Donation</Heading3>
        <p>
          The donation option requires an individual to make a non-refundable
          contribution to the country&apos;s Economic Diversification Fund
          (EDF).
        </p>
        <Heading3>Requirements</Heading3>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            Single applicant: <strong>USD 100,000</strong>
          </li>
          <li>
            Spouse of the main applicant: <strong>USD 50,000</strong>
          </li>
          <li>
            Sibling of the main applicant or of the spouse of the main applicant
            aged 18-25: <strong>USD 50,000</strong>
          </li>
          <li>
            Any dependant other than the spouse of the main applicant or a
            sibling of the main applicant or of the spouse of the main applicant
            aged 18-25: <strong>USD 25,000</strong> each
          </li>
          <li>
            Family of four including the main applicant, the spouse of the main
            applicant, and two other dependants other than a dependant sibling:{' '}
            <strong>USD 175,000</strong> each
          </li>
        </ul>
        <Heading3>2. Real Estate</Heading3>
        <p>
          To acquire Citizenship in Dominica by Investment in Real Estate, each
          applicant must invest a minimum of{' '}
          <strong tw="font-semibold">USD 200,000</strong> in a Government
          Authorized real estate project.
        </p>
        <h4 tw="mt-3 mb-1 font-semibold">Key Benefits</h4>
        <ul
          tw="list-style-type['☆'] pl-3"
          css={`
            & li {
              padding-left: 0.5rem;

              strong {
                font-weight: 600;
              }
            }
          `}
        >
          <li>
            <strong>Visa-free travel</strong> to more than 125 countries,
            including the EU-Schengen, United Kingdom, Singapore, Hong Kong and
            Ireland
          </li>
          <li>
            <strong>Minimal Taxation</strong> no wealth, gift, inheritance,
            foreign income or capital gains tax.
          </li>
          <li>
            Full <strong>residence status</strong> with the right to live and
            work in Dominica
          </li>
          <li>
            <strong>Dual citizenship</strong> is allowed
          </li>
          <li>
            <strong>No residency requirements</strong> in Dominica before or
            after citizenship is granted
          </li>
          <li>
            <strong>Confidential application procedure.</strong>
          </li>
          <li>
            The <strong>inclusion of dependent</strong> parents starting from
            the age of 55 years.
          </li>
          <li>
            The <strong>inclusion of dependent</strong> children up to the age
            of 30 years.
          </li>
          <li>
            <strong>Irrevocable citizenship</strong> for a family transferable
            to further generations
          </li>
        </ul>
        <p tw="mt-5 italic">
          To be eligible for Citizenship by Investment opportunity, applicants
          need to fulfill the eligibility criteria and investment guidelines set
          as per government policy. Daveni Partners , ensures efficient
          glitch-free processing of your application.
        </p>
        <p tw="mt-5 italic">
          <strong tw="font-medium">Note:</strong> Prices above are exclusive of
          application fees, due diligence fees, and professional fees. Please{' '}
          <Link href="/contact">
            <a tw="underline">contact us</a>
          </Link>{' '}
          for an accurate quotation.
        </p>
      </Section>
      <Footer />
    </main>
  )
}
