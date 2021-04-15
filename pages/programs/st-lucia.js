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
    value: 'From $100,000',
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
    value: '134 Countries',
  },
  {
    title: 'Population',
    icon: '/images/population.svg',
    value: '178,000',
  },
]

export default function StLucia() {
  return (
    <main>
      <Head>
        <title>Saint Lucia Citizenship By Investment | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero image="st-lucia">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>Saint Lucia</ProgramHeading>
          <ProgramLeading tw="mt-6">
            The Land, the people, the light
          </ProgramLeading>
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
        <Heading2>About Saint Lucia</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          Saint Lucia has the newest and arguably the best-positioned
          citizenship by investment program in the Caribbean. Vibrant,
          discerning and alluring, Saint Lucia offers all the tropical benefits
          of the region while remaining exclusive, authentic and engaging.
        </ProgramQuote>
        <p>
          Saint Lucia is an island country located in the Eastern Caribbean and
          forms part of the Lesser Antilles. It is a parliamentary democracy
          with Queen Elizabeth II as its head of state. Today, Saint Lucia is a
          full member in the Commonwealth of Nation (British Commonwealth),
          United Nations, and the Caribbean Community (CARICOM).
        </p>
        <p tw="mt-3">
          Due to its strategic location and abundance of natural resources,
          Saint Lucia was a target for French and British settlers who
          frequently battled over rule of the island until Saint Lucia finally
          gained its independence in 1979. Saint Lucian culture is very rich
          with influences of Carib Indian, African, English, and French
          heritage. With a population of 178,000, Saint Lucia is the 11th most
          populous country in the Caribbean, with one third of its population
          residing in the capital Castries.
        </p>
        <p tw="mt-3">
          Saint Lucia is blessed with natural beauty due to the country’s
          spectacular setting and breathtaking nature. The result is a robust
          tourism industry that attracts approximately 350,000 visitors each
          year. A major reason contributing to the growth of Saint Lucia’s
          tourism industry is the country’s international airport which is
          served by regular international flights from the USA, Canada, and
          Europe. Apart from that, the introduction of the St Lucia citizenship
          by investment program in 2015 has also played an important role in the
          booming economy of the country.
        </p>
        <Heading3>
          Get Your St Lucia Passport With Expert Help From Daveni Partners
        </Heading3>
        <p>
          Ever since our inception, Daveni Partners has strived hard to provide
          seamless assistance to its clients so they can acquire their St Lucia
          citizenship by investment in a swift and stress-free manner. Our
          highly experienced team of consultants will pre-screens and assesses
          client portfolios to suggest an accredited, legal and Government
          approved program that will secure your family’s future while also
          helping you travel through the world visa-free.
        </p>
        <Heading3>Become a Global Citizen - Call Us Today</Heading3>
        <p
          css={`
            & a {
              color: #f1ab41;
            }
          `}
        >
          Feel free to get in touch with us right now to discuss your investment
          and residence options at{' '}
          <a href="tel:+2348085799962">(234) 808-579-9962</a>. You can also
          contact us through email at{' '}
          <a href="mailto:hello@daveni.co">hello@daveni.co</a> or fill in our{' '}
          <Link href="/contact">
            <a>online contact form</a>
          </Link>
          , and we will reply back as soon as possible.
        </p>
      </Section>
      <Section id="benefits" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Saint Lucia Citenzenship Program & Benefits</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          Saint Lucia’s Citizenship by Investment Program was established in
          late 2015 following parliamentary assent to Act No. 14 of 2015 on the
          24th of August, 2015. Regulations of the citizenship program are cited
          in statutory instrument no. 89 of 2015 with subsequent amendments
          being introduced in statutory instrument no. 1 of 2017.
        </ProgramQuote>
        <p>
          Citizenship is granted to qualified applicants within 4 to 5 months
          with no residency requirements. Once the applicant is granted
          citizenship, he/she becomes a citizen for life.
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
          <li>
            Visa-free travel to over 100 countries, including Schengen, UK, Hong
            Kong and Singapore
          </li>
          <li>Fast processing within three months.</li>
          <li>No residency requirement or interview to acquire citizenship</li>
          <li>Citizenship is granted for life and is irrevocable</li>
          <li>No tax obligation for non-residents</li>
          <li>Dual citizenship is allowed in Saint Lucia</li>
          <li>
            Dependent children up to the age of 25 can be part of the same
            application
          </li>
        </ul>
      </Section>
      <Section id="investment" tw="pt-0 md:(pt-0)">
        <Heading2>Investment Criteria</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>Requirements</Heading3>
        <p>
          To qualify for citizenship, applicants need to undergo a strict due
          diligence process, in addition to making a contribution via one of the
          two following channels:
        </p>
        <ul tw="list-disc pl-5 mt-4">
          <li>
            Non-Refundable Contribution (donation) to Saint Lucia National
            Economic Fund
          </li>
          <li>
            Purchase of real estate in a government approved project AND payment
            of applicable government fees
          </li>
        </ul>
        <Heading3>Saint Lucia Investment Options</Heading3>
        <Heading3>Option 1</Heading3>
        <p tw="font-semibold">
          Saint Lucia National Economic Fund – Non-Refundable
        </p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            <strong>Single Applicant:</strong> a non-refundable contribution of{' '}
            <strong>USD 100,000</strong> is required
          </li>
          <li>
            <strong>Main Applicant and Spouse:</strong> a non-refundable
            contribution of <strong>USD 140,000</strong> is required
          </li>
          <li>
            <strong>
              Each additional qualifying dependent (with applicant alone or
              applicant and spouse): USD 25,000
            </strong>
          </li>
          <li>
            <strong>Main Applicant, Spouse, and up to Two Dependents:</strong> A
            non-refundable contribution of <strong>USD 150,000</strong>
          </li>
          <li>
            <strong>
              Each additional qualifying dependent of a family of four: USD
              15,000
            </strong>
          </li>
        </ul>
        <Heading3>Option 2</Heading3>
        <p tw="font-semibold">Purchase of Government-Approved Real Estate</p>
        <p tw="mt-3">
          To qualify for citizenship of Saint Lucia under the Real Estate Option
          of the Citizenship by Investment Program, an applicant must purchase
          authorized real estate to the minimum value of USD 300,000, which may
          be resold after 5 years.
        </p>
        <p tw="mt-3">
          Additionally, the applicant must pay the following government fees
          (Non-Refundable):
        </p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            <strong>USD 30,000</strong> for a Single Applicant
          </li>
          <li>
            <strong>USD 45,000</strong> for Main Applicant &amp; Spouse
          </li>
          <li>
            <strong>USD 5,000</strong> for each additional dependent below the
            age of 18
          </li>
          <li>
            <strong>USD 10,000</strong> for each additional dependent above the
            age of 18
          </li>
          <li>
            <strong>USD 10,000</strong> for Main Applicant with Spouse &amp;
            more than four dependents
          </li>
        </ul>
        <Heading3>Option 3</Heading3>
        <p tw="font-semibold">Government Bond Investment</p>
        <p tw="mt-3 text-black text-opacity-80">
          Upon approval an applicant and accompanying family may opt to invest
          in Saint Lucia government bonds, which must be held for five years.
          The bond amount will vary depending on the size of the family.
        </p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            <strong>USD 500,000</strong> Single Applicant
          </li>
          <li>
            <strong>USD 535,000</strong> Main applicant and spouse.
          </li>
          <li>
            <strong>USD 550,000</strong> Family with up to 3 dependents (spouse
            + 2 children).
          </li>
          <li>
            <strong>USD 25,000</strong> Each additional dependent.
          </li>
        </ul>
        <p tw="mt-3">
          <strong tw="font-medium">*Note:</strong> The government bond option
          carries an administration fee of US$50,000 per application.
        </p>
        <Heading3>Option 4</Heading3>
        <p tw="font-semibold">Enterprise Project Investment</p>
        <p tw="mt-3">
          Applicants may invest a minimum of US$3.5 million in an approved
          enterprise project and create at least three jobs. Two applicants may
          share an investment of US$6 million and create six jobs to qualify.
          Approved enterprise projects must fall under one of the following
          categories: specialty restaurants, cruise ports and marinas,
          agro-processing plants, pharmaceutical products, ports, bridges, roads
          and highways, research institutions and facilities, or offshore
          universities.
        </p>
        <p tw="mt-3">
          Applicants may invest in a combination of the above options. The
          combination of investments must total at least €2 million.
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
      <Section id="countries" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Antigua Visa Free Countries</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <p>
          With a passport from Antigua and Barbuda, you can travel visa-free to
          any of these countries:
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
          <li>Andorra</li>
          <li>Antigua and Barbuda</li>
          <li>Argentina</li>
          <li>Armenia</li>
          <li>Aruba</li>
          <li>Austria</li>
          <li>Bahamas</li>
          <li>Bahrain</li>
          <li>Bangladesh</li>
          <li>Barbados</li>
          <li>Belgium</li>
          <li>Belize</li>
          <li>Bolivia</li>
          <li>Botswana</li>
          <li>Bulgaria</li>
          <li>Cambodia</li>
          <li>Cape Verde</li>
          <li>Chile</li>
          <li>Colombia</li>
          <li>Comoros</li>
          <li>Costa Rica</li>
          <li>Croatia</li>
          <li>Cuba</li>
          <li>Curaçao</li>
          <li>Cyprus</li>
          <li>Czech Republic</li>
          <li>Denmark</li>
          <li>Djibouti</li>
          <li>Dominica</li>
          <li>Dominican Republic</li>
          <li>Ecuador</li>
          <li>Egypt</li>
          <li>El Salvador</li>
          <li>Estonia</li>
          <li>Fiji</li>
          <li>Finland</li>
          <li>France</li>
          <li>Gabon</li>
          <li>Gambia</li>
          <li>Georgia</li>
          <li>Germany</li>
          <li>Greece</li>
          <li>Grenada</li>
          <li></li>
          <li>Guatemala</li>
          <li>Guinea-Bissau</li>
          <li>Guyana</li>
          <li>Haiti</li>
          <li>Honduras</li>
          <li>Hong Kong</li>
          <li>Hungary</li>
          <li>Iceland</li>
          <li>India</li>
          <li>Indonesia</li>
          <li>Iran</li>
          <li>Ireland</li>
          <li>Israel</li>
          <li>Italy</li>
          <li>Jamaica</li>
          <li>Jordan</li>
          <li>Kenya</li>
          <li>Kiribati</li>
          <li>Kyrgyzstan</li>
          <li>Laos</li>
          <li>Latvia</li>
          <li>Lesotho</li>
          <li>Liechtenstein</li>
          <li>Lithuania</li>
          <li>Luxembourg</li>
          <li>Madagascar</li>
          <li>Malawi</li>
          <li>Malaysia</li>
          <li>Maldives</li>
          <li>Malta</li>
          <li>Mauritania</li>
          <li>Mauritius</li>
          <li>Micronesia</li>
          <li>Monaco</li>
          <li>Montenegro</li>
          <li>Mozambique</li>
          <li>Nepal</li>
          <li>Netherlands</li>
          <li>Nicaragua</li>
          <li>Norway</li>
          <li>Palau</li>
          <li>Palestinian Territories</li>
          <li>Panama</li>
          <li></li>
          <li>Peru</li>
          <li>Philippines</li>
          <li>Poland</li>
          <li>Portugal</li>
          <li>Qatar</li>
          <li>Romania</li>
          <li>Saint Kitts and Nevis</li>
          <li>Saint Vincent and the Grenadines</li>
          <li>Samoa</li>
          <li>San Marino</li>
          <li>São Tomé and Príncipe</li>
          <li>Senegal</li>
          <li>Seychelles</li>
          <li>Singapore</li>
          <li>Sint Maarten</li>
          <li>Slovakia</li>
          <li>Slovenia</li>
          <li>Solomon Islands</li>
          <li>Somalia</li>
          <li>South Korea</li>
          <li>Spain</li>
          <li>Sri Lanka</li>
          <li>Suriname</li>
          <li>Swaziland</li>
          <li>Sweden</li>
          <li>Switzerland</li>
          <li>Tanzania</li>
          <li>Timor-Leste</li>
          <li>Togo</li>
          <li>Tonga</li>
          <li>Trinidad and Tobago</li>
          <li>Tunisia</li>
          <li>Turkey</li>
          <li>Tuvalu</li>
          <li>Uganda</li>
          <li>United Kingdom</li>
          <li>Vanuatu</li>
          <li>Vatican City</li>
          <li>Venezuela</li>
          <li>Zambia</li>
          <li>Zimbabwe</li>
        </ul>
        <p tw="mt-3">
          *List above includes countries with visa on arrival or online visa
          requirements.
        </p>
      </Section>
      <Footer />
    </main>
  )
}
