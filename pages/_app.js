import Main from '../components/Main'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
