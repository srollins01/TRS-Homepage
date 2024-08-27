import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Container from './components/Container'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container />
      <Footer />
    </>
  )
}

export default App
library.add(fab, fas, far)
