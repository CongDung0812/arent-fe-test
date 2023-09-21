import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import ColumnList from '../components/pages/column-list'

const ColumnListPage = () => {
  return (
    <>
      <Head>
        <title>Healthy | コラム一覧</title>
      </Head>
      <ColumnList />
    </>
  )
}
ColumnListPage.Layout = DefaultLayout
export default ColumnListPage
