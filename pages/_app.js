import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Title />
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
