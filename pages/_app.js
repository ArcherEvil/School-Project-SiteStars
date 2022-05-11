import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/Loading/Loading.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export async function getStaticProps() {
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, 'notification_received');

}

export default MyApp
