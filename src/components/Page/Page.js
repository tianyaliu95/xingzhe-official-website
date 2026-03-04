import Head from 'next/head'

import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'

export default function Page ({ children, screenBackground }) {
  return (
    <>
      <DeprecatedBanner />
      <div className={screenBackground}>
        <PageHead />
        <div className='pt-14 lg:pt-14'>
          <Header shouldHaveBgColor={!screenBackground} />
          <main>
            {children}
          </main>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}

function PageHead () {
  const title = '行者房车'
  const description = '南京行者房车营地'

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='robots' content='index,follow' />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
    </Head>
  )
}

function DeprecatedBanner () {
  return (
    <div className='fixed top-0 inset-x-0 z-100 bg-error text-grays-700'>
      <div className='mx-auto max-w-5xl px-4 py-4 text-center text-sm sm:text-lg md:text-xl leading-relaxed font-bold'>
        营地已经转型，不再提供服务。朋友们江湖再见。
      </div>
    </div>
  )
}
