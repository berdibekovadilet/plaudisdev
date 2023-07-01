import type {NextPage} from 'next'
import Head from 'next/head'
import {
    ComponentsDevelopment, Footer,
    Header,
    Hero,
    KeyServices,
    PageDevelopment,
    Pricing,
    WorkWithUs
} from "../components/Sections";

const Home: NextPage = () => {
    return (
        <>
            <div className='hero-background'>
                <div className='max-w-[1200px] mx-auto px-4'>
                    <Head>
                        <title>Plaudis Dev | Shopify Web Agency</title>
                        <meta name="description" content="E-commerce solutions for Shopify businesses"/>
                        <link rel="icon" href="/favicon.png"/>
                    </Head>
                    <Header/>
                    <Hero/>
                    <KeyServices/>
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto px-4'>
                <ComponentsDevelopment/>
                <PageDevelopment/>
                <Pricing/>
                <WorkWithUs/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
