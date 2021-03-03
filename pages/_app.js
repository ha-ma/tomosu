import Layout from "../components/Layout"
import BottomContact from '../components/BottomContact'
import BottomSNS from '../components/BottomSNS'
import Footer from '../components/Footer'
import '../styles/reset.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <BottomContact />
      <BottomSNS />
      <Footer />
    </Layout>
  )
}
export default MyApp
