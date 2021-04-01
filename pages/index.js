import Head from 'next/head'
import React from 'react'
import 'twin.macro'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Partners from '../components/Home/Partners'
import Programs from '../components/Home/Programs'
import Testimonial from '../components/Home/Testimonial'
import NavBar from '../components/NavBar'

const IndexPage = () => (
  <main>
    <Head>
      <title>Daveni | Global Citizenship Company</title>
    </Head>
    <NavBar />
    <Hero />
    <Programs />
    <Partners />
    <Testimonial />
    <Footer />
  </main>
)

export default IndexPage
