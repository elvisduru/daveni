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
    value: '139 Countries',
  },
  {
    title: 'Population',
    icon: '/images/population.svg',
    value: '92,581',
  },
]

export default function AntiguaBarbuda() {
  return (
    <main>
      <Head>
        <title>
          Antigua &amp; Barbuda Citizenship By Investment | Daveni Partners
        </title>
      </Head>
      <NavBar />
      <ProgramHero image="antigua-barbuda">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>Antigua &amp; Barbuda</ProgramHeading>
          <ProgramLeading tw="mt-6">Sun. Sea. Safe</ProgramLeading>
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
              <a>Antigua &amp; Barbuda</a>
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
        <Heading2>About Antigua &amp; Barbuda</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          Antigua & Barbuda are twin islands that form their own country in the
          Caribbean Sea. In 1784, the British Royal Army claimed Antigua as a
          Navy base. The unbroken coral reef offered a protective barrier, while
          the warm winds and winding coastline offered comfort and safety.
        </ProgramQuote>
        <p>
          Upon declaring the country’s independence in 1981, the country became
          part of the British Commonwealth – formally the Commonwealth of
          Nations – with Queen Elizabeth II as its reigning monarch. To this
          day, it is a full member of the Caribbean Community (CARICOM).
        </p>
        <p tw="mt-3">
          Today, the tiny island of Barbuda is the nesting ground for thousands
          of birds. Antigua, with its ever-gorgeous coral reef, is a destination
          for divers and explorers alike. The capital of the country, St John’s,
          is the commercial center of the island. Collectively, Antigua and
          Barbuda boast about 365 beaches of clean turquoise waters and
          magnificent rainforests. The warm, welcoming breeze and beautiful
          vistas attract celebrities like Robert De Niro and Oprah Winfrey, who
          frequently visit the country.
        </p>
        <p tw="mt-3">
          Tourism, which makes up around 60% of the country’s economy, is the
          main industry. The economy of this country also benefits from solid
          financial services and agriculture sectors. As such, there are several
          programs and options offered to those interested in applying for their
          Antigua & Barbuda citizenship.
        </p>
        <Heading3>
          Secure Your Antigua and Barbuda Citizenship By Investment
        </Heading3>
        <p>
          The team of skilled and knowledgeable experts at Daveni Partners are
          dedicated to ensuring that our clients have a transparent and
          hassle-free journey towards the acquisition of their citizenship and
          residency. We aim to offer a gateway to freedom to our clients through
          Government approved investment programs that helps them secure their
          family’s future. With the help of our highly competent and experienced
          team, you can gain your second citizenship and have your Antigua and
          Barbuda passport in hand through legal and legitimate programs.
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
          <a href="mailto:hello@davenipartners.com">hello@davenipartners.com</a>{' '}
          or fill in our{' '}
          <Link href="/contact">
            <a>online contact form</a>
          </Link>
          , and we will reply back as soon as possible.
        </p>
      </Section>
      <Section id="benefits" tw="pt-0 pb-0 md:(pt-0 pb-0)">
        <Heading2>Antigua & Barbuda Citenzenship Program & Benefits</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          The Citizenship by Investment Program (CIP) was established following
          parliamentary assent to the Antigua and Barbuda Citizenship by
          Investment Regulations of 2014.
        </ProgramQuote>
        <p>
          The Regulations regarding Citizenship by Investment in Antigua and
          Barbuda are part of Section 6 of the Citizenship by Investment Act of
          2014. This act allows the government of Antigua and Barbuda to grant
          citizenship to persons who qualify under the criteria set by
          parliamentary decision.
        </p>
        <p tw="mt-3">
          Citizenship is granted to qualified applicants within 4 to 5 months
          with no residency requirements. Once the applicant is granted
          citizenship, he/she becomes a citizen for life.
        </p>
        <p tw="mt-3">
          After becoming a citizen of Antigua and Barbuda, the applicants must
          visit the country for a period of 5 days at any time during the first
          5 years of citizenship.
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
          <li>4 to 5 months to acquire citizenship and passport</li>
          <li>
            No residency requirement or interview to acquire citizenship, but a
            5-day visit must be completed within the first 5 years of
            citizenship
          </li>
          <li>Citizenship is granted for life and is irrevocable</li>
          <li>No tax obligation for non-residents</li>
          <li>Dual citizenship is allowed in Antigua & Barbuda</li>
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
            Non-refundable contribution to the National Development Fund (NDF)
          </li>
          <li>
            Purchase of real estate in a government approved project AND payment
            of applicable government fees
          </li>
        </ul>
        <Heading3>Antigua and Barbuda Investment Options</Heading3>
        <Heading3>Option 1</Heading3>
        <p tw="font-semibold">
          National Development Fund (NDF) – Non-Refundable
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
            <strong>USD 125,000</strong> is required
          </li>
          <li>
            <strong>Main Applicant and Spouse:</strong> a non-refundable
            contribution of <strong>USD 125,000</strong> is required
          </li>
          <li>
            <strong>Applicant with 3 dependents:</strong> (Applicant plus spouse
            and two children): a non-refundable contribution of{' '}
            <strong>USD 125,000</strong>
          </li>
          <li>
            <strong>Applicant with 4 dependents:</strong> (Applicant plus spouse
            and three children): a non-refundable contribution of{' '}
            <strong>USD 165,000</strong>
          </li>
          <li>
            <strong>Applicant with more than 4 dependents:</strong> (Applicant
            plus spouse and more than three children): a non-refundable
            contribution of <strong>USD 165,000</strong> plus{' '}
            <strong>USD 15,000</strong> for each additional dependent
          </li>
        </ul>
        <Heading3>Option 2</Heading3>
        <p tw="font-semibold">Purchase of Government-Approved Real Estate</p>
        <p tw="mt-3">
          To qualify for citizenship of Antigua & Barbuda under the Real Estate
          Option of the Citizenship by Investment Program, an applicant must
          purchase authorized real estate to the minimum value of USD 200,000,
          which may be resold after 5 years.
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
            <strong>Family of up to 4 persons: USD 30,000</strong>
          </li>
          <li>
            <strong>
              Family of more than 4 persons: USD 30,000 + USD 15,000
            </strong>
          </li>
        </ul>
        <Heading3>Option 3</Heading3>
        <p tw="font-semibold">University of the West Indies Fund Option</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            The University of the West Indies Fund is only available for
            families consisting of at least six (6) members.
          </li>
          <li>
            <strong>Investment amount: USD$150,000</strong> in donation,
            inclusive of government processing fees, for a family of six
            members.
          </li>
          <li>
            An additional donation of <strong>USD $15,000</strong> applies for
            each additional dependent.
          </li>
        </ul>
        <p tw="mt-3">
          <strong tw="font-medium">*Note:</strong> This option entitles one
          member of the family to a one-year scholarship, tuition only, at the
          University of the West Indies.
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
          <li>Albania</li>
          <li>Andorra</li>
          <li>Armenia</li>
          <li>Austria</li>
          <li>Bahamas</li>
          <li>Bahrain</li>
          <li>Bangladesh</li>
          <li>Barbados</li>
          <li>Belgium</li>
          <li>Belize</li>
          <li>Bolivia</li>
          <li>Bosnia and Herzegovina</li>
          <li>Botswana</li>
          <li>Brazil</li>
          <li>British Virgin Islands</li>
          <li>Bulgaria</li>
          <li>Cambodia</li>
          <li>Cape Verde</li>
          <li>Chile</li>
          <li>Colombia</li>
          <li>Comoros</li>
          <li>Cook Islands</li>
          <li>Costa Rica</li>
          <li>Côte d’Ivoire</li>
          <li>Croatia</li>
          <li>Cuba</li>
          <li>Curacao</li>
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
          <li>Italy</li>
          <li>Jamaica</li>
          <li>Jordan</li>
          <li>Kenya</li>
          <li>Kiribati</li>
          <li>Laos</li>
          <li>Latvia</li>
          <li>Lebanon</li>
          <li>Lesotho</li>
          <li>Liechtenstein</li>
          <li>Lithuania</li>
          <li>Luxembourg</li>
          <li>Macedonia</li>
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
          <li>New Caledonia</li>
          <li>Nicaragua</li>
          <li>Niue</li>
          <li>Norway</li>
          <li>Palau</li>
          <li>Panama</li>
          <li>Peru</li>
          <li>Philippines</li>
          <li>Poland</li>
          <li>Portugal</li>
          <li>Romania</li>
          <li>Rwanda</li>
          <li>Saint Kitts and Nevis</li>
          <li>Saint Lucia</li>
          <li>Saint Vincent and the Grenadines</li>
          <li>Samoa</li>
          <li>San Marino</li>
          <li>São Tomé and Príncipe</li>
          <li>Senegal</li>
          <li>Seychelles</li>
          <li>Singapore</li>
          <li>Slovakia</li>
          <li>Slovenia</li>
          <li>Solomon Islands</li>
          <li>South Africa</li>
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
          <li>Trinidad and Tobago</li>
          <li>Tunisia</li>
          <li>Turkey</li>
          <li>Turks and Caicos</li>
          <li>Tuvalu</li>
          <li>Uganda</li>
          <li>Ukraine</li>
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
