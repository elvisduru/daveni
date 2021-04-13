import Head from 'next/head'
import Footer from '../../components/Home/Footer'
import Testimonial from '../../components/Home/Testimonial'
import NavBar from '../../components/NavBar'
import ProgramSection from '../../components/Home/Programs'
import { Heading3, PageHeader, Section } from '../../components/Common'
import 'twin.macro'

export default function Programs() {
  return (
    <main>
      <Head>
        <title>
          Citizenship Programs Overview | Global Citizenship Company
        </title>
      </Head>
      <NavBar />
      <PageHeader image="fine-building">
        <h1 tw="font-semibold text-2xl mt-5">Global Citizen Programs</h1>
        <p tw="text-sm mt-2 leading-relaxed color[#D9A55A] max-width[30ex]">
          Review available options. Obtain personalized advice. Make the right
          choice.
        </p>
      </PageHeader>
      <Section tw="py-0 pt-10 md:(py-0 pt-12)">
        <Heading3>Join The Global Citizen Community</Heading3>
        <p>
          Members of the Global Citizen community are entitled to a supreme
          level of choice in terms of mobility, standard of living, education,
          locations for investment and business operations, and much more. We
          create the safe path to this freedom of choice, first and foremost,
          through our Global Citizen programs, products and services that offer
          a unique set of benefits and privileges.
        </p>
        <Heading3 tw="mt-8">Program Evaluation</Heading3>
        <p>
          Each Global Citizen program offers a host of unique benefits. We have
          have provided benchmarks against which each program can be evaluated
          based on particular needs and goals. Applicants can compare them
          against one another to find the right fit.
        </p>
      </Section>
      <ProgramSection title="Discover Our Programs Today" headingSm />
      <Testimonial />
      <Footer />
    </main>
  )
}
