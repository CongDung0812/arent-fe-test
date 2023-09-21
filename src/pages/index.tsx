import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import Homepage from '../components/pages/home-page'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Healthy | 自分の記録</title>
      </Head>
      <Homepage />
    </>
  )
}
HomePage.Layout = DefaultLayout
export default HomePage
