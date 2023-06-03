import '@/styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ModalProvider } from 'context/ModalContext'
export default function App({ Component, pageProps }) {
  return (
    <>
      <ModalProvider>        
        <Head>
          <title>Icci_Schedule</title>
          <meta name="description" content="icci_schedule - check your schedule" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
        <header className="flex md:justify-around md:flex-wrap md:flex-row bg-[#17286b] p-1 px-4 justify-evenly flex-col flex-wrap items-center">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href=".">
              <Image className="py-3.5 pr-2 mx-6" src="/logo_web_uta.png" alt="Logo alt UTA" height={300} width={400}></Image>
            </Link>
            <div className="mx-auto flex w-[225px] px-6  text-center "> ING. COMPUTACIÓN E INFORMÁTICA AÑO 2023 </div>
          </div> 
          <div className="flex items-center text-white mr-6 ">    
            <div className="font-semibold self-center uppercase lg:inline-flex flex-col text-3xl ">📅 Horario de clases ICCI</div>
          </div>
          <Link href='login' className="px-4 py-2 self-center text-white hover:text-amber-300 hover:delay-75 hover:border-yellow-300 lg:mt-0 rounded-full border-2 border-amber-300">MODIFICAR</Link>
          {/* <Link href='login' class="px-4 py-2 self-center text-white hover:text-amber-300 hover:delay-75 hover:border-yellow-300 lg:mt-0 rounded-full border-2 border-amber-300 xl:text-red-600 lg:text-green-600 md:text-cyan-600 sm:text-orange-600 visible xl:hidden"> Prueba </Link> */}
        </header>
        <Component {...pageProps} />      
      </ModalProvider>
    </>)
}
