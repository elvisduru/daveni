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
    value: 'From $150,000',
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
    value: '132 Countries',
  },
  {
    title: 'Population',
    icon: '/images/population.svg',
    value: '111,219',
  },
]

export default function Grenada() {
  return (
    <main>
      <Head>
        <title>Grenada Citizenship By Investment | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero image="grenada">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>Grenada</ProgramHeading>
          <ProgramLeading>The Spice Island</ProgramLeading>
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
              <a>Grenada</a>
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
      <Section id="about" tw="pt-0">
        <Heading2>About Grenada</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          Popularly known as the Spice Island for its myriad locally grown
          spices, Grenada offers one of the most picturesque waterfronts in all
          the Caribbean. The sublime scenery is just one of the many reasons to
          visit the three beautiful main islands. Diving, sailing, excellent
          restaurants, fabulous beaches, and a calendar of unforgettable
          festivities have fortified Grenada’s status as the preferred
          destination of many high net worth investors.
        </ProgramQuote>
        <p>
          The citizenship by investment programme for Grenada is one of the
          newest programmes available to investors. The Grenada investment visa
          programme provides second citizenship in Grenada and a passport to
          investors offering visa-free travel to over 153 countries including
          the UK, EU Schengen countries and China. Grenada also offers access
          for its citizens to the USA E2 treaty investor visa.
        </p>
        <Heading3>Secure Your Grenada Citizenship By Investment</Heading3>
        <p>
          The team of skilled and knowledgeable experts at Daveni Partners are
          dedicated to ensuring that our clients have a transparent and
          hassle-free journey towards the acquisition of their citizenship and
          residency. We aim to offer a gateway to freedom to our clients through
          Government approved investment programs that helps them secure their
          family’s future. With the help of our highly competent and experienced
          team, you can gain your second citizenship and have your Grenada
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
          <a href="mailto:hello@davenipartners.com">hello@davenipartners.com</a>{' '}
          or fill in our{' '}
          <Link href="/contact">
            <a>online contact form</a>
          </Link>
          , and we will reply back as soon as possible.
        </p>
      </Section>
      <Section id="benefits" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Grenada Citenzenship Program & Benefits</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          The Grenada Citizenship by Investment Program was launched in 2013
          under the regulations of the Grenada Citizenship by Investment Act.
          Grenada’s pilot scheme allows qualified investors and their family
          members to apply for citizenship and benefit from visa-free travel.
        </ProgramQuote>
        <p>
          There are no specific country restrictions with the Grenada programme
          (includes Iran, Iraq, Afghanistan, Syria). Children and dependents up
          to age 30 can be included (subject to restrictions) along with
          dependent parents over age 55 (if fully supported). There is no tax on
          worldwide income and processing of the application takes around 4
          months. Government, Professional and Due Diligence fees apply.
        </p>
      </Section>
      <Section tw="pt-0 md:pt-0">
        <Heading3>Key Benefits</Heading3>
        <hr tw="border border-primary mt-2 mb-6 w-36" />
        <ul
          tw="list-style-type['☆'] pl-3"
          css={`
            & li {
              padding-left: 0.5rem;
            }
          `}
        >
          <li>Fast processing within four months.</li>
          <li>No residency requirement or interview to acquire citizenship</li>
          <li>
            Inclusion of dependent children under 30, or children with
            physically or mentally challenged living with and fully supported by
            the main applicant.
          </li>
          <li>Inclusion of dependent parents.</li>
          <li>
            Inclusion of a sibling of the main applicant who is at least
            eighteen years of age, and single with no children.
          </li>
          <li>No physical residency requirements.</li>
          <li>
            No requirement to travel to Grenada during the application process.
          </li>
          <li>No interview, education or management experience required.</li>
          <li>
            Visa-free travel to over 125 countries, including Europe’s Schengen
            zone.
          </li>
          <li>
            E-2 Visa Program signed between Grenada and the United States allows
            citizens of Grenada to operate a substantial business in the U.S.
            and reside therein.
          </li>
          <li>No tax on worldwide income.</li>
        </ul>
      </Section>
      <Section id="investment" tw="pt-0 md:(pt-0)">
        <Heading2>Investment Criteria</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>Requirements</Heading3>
        <p>
          To qualify for citizenship, applicants must fulfill one of the
          investment options below in addition to the following criteria:
        </p>
        <ul tw="list-disc pl-5 mt-4">
          <li>Be of outstanding character.</li>
          <li>Hold no criminal record.</li>
          <li>Have excellent health.</li>
          <li>Have a high personal net worth.</li>
        </ul>
        <Heading3>Grenada Investment Options</Heading3>
        <p tw="font-semibold">Real Estate Investment</p>
        <p tw="mt-2">
          With its economy shifting from agricultural-dominant to
          service-dominant, one of the most viable options for foreign nationals
          is investment in a pre-approved real estate project.
        </p>
      </Section>
      <Section id="countries" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Grenada Visa Free Countries</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <p>
          With a passport from Grenada, you can travel visa-free to any of these
          countries:
        </p>
        <ul
          tw="mt-3 flex flex-wrap"
          css={`
            & li {
              padding: 5px;
              border: 1px solid #f8d59b;
              margin-right: 5px;
              margin-bottom: 5px;
            }
          `}
        >
          <li>Abkhazia</li>
          <li>Antigua and Barbuda</li>
          <li>Andorra</li>
          <li>Anguilla</li>
          <li>Austria</li>
          <li>Azerbaijan</li>
          <li>Bahamas</li>
          <li>Barbados</li>
          <li>Bangladesh</li>
          <li>Belarus</li>
          <li>Belgium</li>
          <li>Belize</li>
          <li>Bermuda</li>
          <li>Bolivia</li>
          <li>Botswana</li>
          <li>British Virgin Islands</li>
          <li>Burundi</li>
          <li>Cambodia</li>
          <li>Cape Verde</li>
          <li>Cayman Islands</li>
          <li>Columbia</li>
          <li>Cook Islands</li>
          <li>Comoros</li>
          <li>Costa Rica</li>
          <li>Czech Republic</li>
          <li>Denmark</li>
          <li>Djibouti</li>
          <li>Dominica</li>
          <li>Dominican Republic</li>
          <li>Ecuador</li>
          <li>El Salvador</li>
          <li>Eritrea</li>
          <li>Estonia</li>
          <li>Federated States of Micronesia</li>
          <li>Fiji Island</li>
          <li>Finland</li>
          <li>France</li>
          <li>Gambia</li>
          <li>Georgia</li>
          <li>Germany</li>
        </ul>
      </Section>
      <Footer />
    </main>
  )
}
