import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import Homepage from '../components/pages/home-page'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Healthy | ホームページ</title>
      </Head>
      <Homepage />
    </>
  )
}
HomePage.Layout = DefaultLayout
export default HomePage
