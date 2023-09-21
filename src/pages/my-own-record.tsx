import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import MyOwnRecord from '../components/pages/my-own-record'

const MyOwnRecordPage = () => {
  return (
    <>
      <Head>
        <title>Healthy | 自分の記録</title>
      </Head>
      <MyOwnRecord />
    </>
  )
}
MyOwnRecordPage.Layout = DefaultLayout
export default MyOwnRecordPage
