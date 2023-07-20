import Image from 'next/image'
import Head from "next/head"
import { Inter } from 'next/font/google'
import Nav from "../components/nav"
import Specs from "../components/desc"
import SkillsMeter from "../components/skillsmeter"
import Cards from "../components/cards"
import About from "../components/about"
import Form from "../components/form"
import Footer from "../components/footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Nav />
    <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031665074776630"
     crossorigin="anonymous"></script>
    </Head>
    <main className="flex flex-col justify-center items-center my-10">
    <Specs />
    <SkillsMeter />
    <Cards />
    <div className="flex flex-col sm:flex-row">
    <About />
    <Form />
    </div>
    <Footer />
    </main>
    </>
  )
}
