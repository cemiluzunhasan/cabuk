import Head from 'next/head'
import Banner from "../components/Pages/Home/Banner";
import Service from "../components/Pages/Home/Service";
import OurServices from "../components/Pages/Home/OurServices";
import WhyToChoose from "../components/Pages/Home/WhyToChoose";
import Contact from "../components/Pages/Home/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="AppContainer mt-90">
        <Banner/>
        <Service/>
        <OurServices/>
        <WhyToChoose/>
        <Contact/>
      </div>
    </div>
  )
}
