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

export default function UK() {
  return (
    <main>
      <Head>
        <title>United Kingdom Residency Programs | Daveni Partners</title>
      </Head>
      <NavBar />
      <ProgramHero image="uk">
        <div tw="mt-auto md:(ml-auto w-1/2)">
          <ProgramHeading>United Kingdom</ProgramHeading>
          <ProgramLeading tw="mt-6 mb-36">
            Dieu et mon droit (God and my right)
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
              <a>United Kingdom</a>
            </Link>
          </li>
          <li>
            <Link href="#programs">Program &amp; Benefits</Link>
          </li>
        </ul>
      </Section>
      <Section id="about" tw="pt-0">
        <Heading2>United Kingdom</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <ProgramQuote>
          Residency or citizenship to the United Kingdom provides investors with
          access to a world of benefits which include:
        </ProgramQuote>

        <ul
          tw="list-style-type['☆'] pl-3"
          css={`
            & li {
              padding-left: 0.5rem;
            }
          `}
        >
          <li>
            Excellent standard of education of free state and private schools
            with more than 150 top class universities
          </li>
          <li>One of the best free health care services in the world</li>
          <li>
            The strength and security of a U.K. passport for you and your family
          </li>
          <li>Allowing ease of travel across the world</li>
          <li>The UK is a great power with a high income economy</li>
          <li>
            Diverse and multicultural society with large cultural and ethnic
            communities
          </li>
          <li>Member of the G8</li>
          <li>
            One of the best financial and business friendly hubs in the world
          </li>
          <li>
            Attractive tax regime for high net worth investors classed as U.K.
            resident, non- domicile
          </li>
        </ul>
      </Section>
      <Section id="programs" tw="pt-0 md:(pt-0)">
        <Heading2>Residency Programs</Heading2>
        <hr tw="border border-primary mt-2 mb-6 w-16" />
        <Heading3>
          Tier 1 UK Investor Immigration Visa (Tier 1 Investor visa route has
          been closed.) <br /> Minimum Investment £2,000,000
        </Heading3>
        <p>
          The investor category is designed to allow wealthy individuals who
          make a substantial financial investment in the UK to obtain permission
          from the UK to enter as an investor under the Tier 1 category. The
          applicant must invest a minimum of GBP 2 million in the UK.
        </p>
        <p tw="mt-3">
          The Tier 1 Investor category has the shortest investor immigration
          application processing time among the G8 countries and has very
          objective entry criteria, with a predictable outcome.
        </p>

        <Heading3>Eligibility</Heading3>
        <p tw="font-semibold">
          You must have at least £2,000,000 investment funds to apply for a Tier
          1 (Investor) visa.
        </p>
        <p tw=" mt-3">You must:</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>Be 18 or over to apply for this visa</li>
          <li>
            Be able to prove that the money belongs to either you or your
            husband, wife, unmarried or same-sex partner
          </li>
          <li>
            have opened an account at a UK regulated bank to use for your funds
          </li>
          <li>free to spend (‘disposable’) in the UK</li>
        </ul>
        <p tw="mt-3">Your money can be in the UK or overseas when you apply.</p>
        <p tw="mt-3">
          The individual must invest for five years in the UK by way of UK share
          capital or loan capital in active and trading UK-registered companies
          (other than those principally engaged in property investment).
          Investment in government bonds and offshore companies is not
          permitted.
        </p>
        <p tw="mt-3">
          Tier 1 (Investor Visa) foreign migrants have the option to invest more
          than £2m for a fast track permanent residency.
        </p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>apply to settle after 2 years if you invest £10 million</li>
          <li>apply to settle after 3 years if you invest £5 million</li>
          <li>apply to settle after 5 years if you invest £2 million</li>
        </ul>

        <Heading3>
          Innovator Visa
          <br />
          Minimum Investment £50,000
        </Heading3>
        <p>
          The Innovator route is designed for an individual seeking to establish
          a business in the UK based on an innovative, viable and scalable
          business idea they have generated, or to which they have significantly
          contributed to. This application must be supported by an endorsing
          body.
        </p>
        <p tw="mt-3">
          An applicant is expected to have a minimum of £50,000 to invest in
          their business and they must have a key role in the day to day
          management and development of the business.
        </p>

        <Heading3>Criteria for the Innovator’s Visa</Heading3>
        <p tw="font-semibold">Applicant:</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>You must be at least 18 years old.</li>
          <li>
            You must be able to proof that you have enough personal savings to
            support yourself while you are in the UK
          </li>
          <li>You would proof source of funds.</li>
          <li>
            English Language: The Applicant will need to prove that they speak
            English to the required standard
          </li>
        </ul>
        <p tw="font-semibold mt-4">The Company:</p>
        <p tw="mt-3">You must be able to show that your business idea is:</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>New - you cannot join a business that is already trading</li>
          <li>
            Innovative - you must have an original business idea which is
            different from anything else on the market
          </li>
          <li>Viable, with potential for growth.</li>
          <li>
            You want to set up or run a business in the UK. You need to have
            your business or business idea endorsed by an approved body.
          </li>
        </ul>

        <Heading3>
          Representative of an Overseas Business Visa (replaced as Global
          Business Mobility)
          <br />
          No Investment Required
        </Heading3>
        <p>
          The Representatives of an Overseas Business visa is designed primarily
          to allow senior executives and managers of an overseas company to
          reside in the UK and set up the company&#39;s first UK office, branch,
          or subsidiary with no minimum investment required.
        </p>

        <Heading3>Criteria for the UK Overseas Business Visa.</Heading3>
        <p tw="font-semibold">Applicant:</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>You must be at least 18 years old.</li>
          <li>
            Be recruited and employed outside the UK by an active and trading
            business (whose headquarters and principal place of business are,
            and will remain, outside the UK)
          </li>
          <li>
            Hold a senior position within the business (but do not own or
            control the majority of it) and have full authority to make
            decisions on its behalf
          </li>
          <li>
            Maintain a physical residence in the UK to avoid losing their
            permanent resident status.
          </li>
        </ul>
        <p tw="font-semibold mt-4">The Company:</p>
        <ul
          tw="list-disc pl-5 mt-4"
          css={`
            & strong {
              font-weight: 600;
            }
          `}
        >
          <li>
            Must have no other branch, subsidiary, or representative in the UK.
          </li>
          <li>The company must have been established for more than a year</li>
          <li>
            The company has to be able to show that its ability to expand and
            grow inside the U.K is demonstrable.
          </li>
        </ul>
      </Section>
      <Footer />
    </main>
  )
}
