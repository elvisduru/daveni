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
    value: 'Oceania',
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
      <Section id="about" tw="pt-0">
        <Heading2>About Vanuatu</Heading2>
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
          <a href="mailto:hello@davenipartners.com">hello@davenipartners.com</a>{' '}
          or fill in our{' '}
          <Link href="/contact">
            <a>online contact form</a>
          </Link>
          , and we will reply back as soon as possible.
        </p>
      </Section>
      <Section id="benefits" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Vanuatu Citenzenship Program & Benefits</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          In January 2017, the Government of the Republic of Vanuatu launched
          their Development Support Program (VDSP) for the purpose of raising
          funds to support infrastructure and promoting economic development of
          Vanuatu. The DSP was enacted by the Vanuatu Government under the
          Citizenship Act (CAP 112) with the powers conferred on the Prime
          Minister by Section 20 of the Citizenship Act (112) Order No.215 of
          2016.
        </ProgramQuote>
        <p>
          The Republic of Vanuatu welcomes foreign investors to apply for
          citizenship by investment program. By making an economic contribution
          to the country’s DSP, Vanuatu grants its citizenships and passport to
          the contributor, their spouse, children under 25 and parents over 50,
          within the same application.
        </p>
        <p tw="mt-3">
          Qualified individuals will be able to acquire citizenship within 3
          months with no interview or residency requirements.
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
          <li>Vanuatu citizenship and passport in about 1-3 months</li>
          <li>No residency requirement or interview to acquire citizenship</li>
          <li>Vanuatu is open to most nationalities</li>
          <li>
            Visa-Free travel to more than 130 countries, including Schengen
            countries, UK, Hong Kong and Singapore
          </li>
          <li>
            Dependent children up to 25 years old and parents over 50 can be
            part of the same application
          </li>
          <li>
            Vanuatu has no income tax, wealth tax, capital gains or inheritance
            tax
          </li>
          <li>Dual citizenship is allowed in Vanuatu</li>
        </ul>
      </Section>
      <Section id="investment" tw="pt-0 md:(pt-0)">
        <Heading2>Investment Criteria</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>Requirements</Heading3>
        <p>
          The citizenship program of Vanuatu requires making a non-refundable
          donation to the country’s Development Support Program (DSP).
        </p>
        <ul tw="list-disc pl-5 mt-4">
          <li>
            Single Applicant: A non-refundable contribution of USD 130,000
          </li>
          <li>
            Main Applicant and Spouse: A non-refundable contribution of USD
            150,000
          </li>
          <li>
            Main Applicant, Spouse, and One Dependent: A non-refundable
            contribution of USD 165,000
          </li>
          <li>
            Main Applicant, Spouse, and Two Dependents: A non-refundable
            contribution of USD 180,000
          </li>
          <li>Each additional qualifying dependent: USD 15,000</li>
        </ul>
      </Section>
      <Section id="countries" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Vanuatu Visa Free Countries</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <p>
          With a passport from Vanuatu, you can travel visa-free to any of these
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
          <li>Ghana</li>
          <li>Gibraltar</li>
          <li>Greece</li>
          <li>Grenada</li>
          <li>Guatemala</li>
          <li>Haiti</li>
          <li>Honduras</li>
          <li>Hong Kong</li>
          <li>Hungary</li>
          <li>Iceland</li>
          <li>Iran</li>
          <li>Iraq</li>
          <li>Ireland</li>
          <li>Italy</li>
          <li>Jamaica</li>
          <li>Jordan</li>
          <li>Kenya</li>
          <li>Kiribati</li>
          <li>Kosovo</li>
          <li>Kuwait</li>
          <li>Laos</li>
          <li>Latvia</li>
          <li>Lebanon</li>
          <li>Lesotho</li>
          <li>Liberia</li>
          <li>Lithuania</li>
          <li>Luxembourg</li>
          <li>Macau</li>
          <li>Madagascar</li>
          <li>Malawi</li>
          <li>Malaysia</li>
          <li>Maldives</li>
          <li>Mali</li>
          <li>Malta</li>
          <li>Marshall Islands</li>
          <li>Mauritius</li>
          <li>Micronesia</li>
          <li>Montserrat</li>
          <li>Mozambique</li>
          <li>Nauru</li>
          <li>Netherlands</li>
          <li>Nicaragua</li>
          <li>Niue</li>
          <li>Norway</li>
          <li>Palau</li>
          <li>Papua New Guinea</li>
          <li>Peru</li>
          <li>Philippines</li>
          <li>Pitcairn Island</li>
          <li>Poland</li>
          <li>Portugal</li>
          <li>Saint Helena</li>
          <li>Saint Kitts & Nevis</li>
          <li>Saint Lucia</li>
          <li>Saint Vincent and Grenadines</li>
          <li>Samoa</li>
          <li>Seychelles</li>
          <li>Singapore</li>
          <li>Slovak Republic</li>
          <li>Slovenia</li>
          <li>Solomon Islands</li>
          <li>South Korea</li>
          <li>South Ossetia</li>
          <li>Spain</li>
          <li>Sweden</li>
          <li>Switzerland</li>
          <li>Tanzania</li>
          <li>Timor and Leste</li>
          <li>Togo</li>
          <li>Tokelau</li>
          <li>Tonga</li>
          <li>Trinidad and Tobago</li>
          <li>Turks and Caicos Islands</li>
          <li>Tuvalu</li>
          <li>Uganda</li>
          <li>United Kingdom Including Guernsey, Isle of Man and Jersey</li>
          <li>Zambia</li>
          <li>Zimbabwe</li>
        </ul>
      </Section>
      <Footer />
    </main>
  )
}
