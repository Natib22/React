
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import Jobs from '../components/Jobs'
import Viewmore from '../components/Viewmore'

const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <Jobs isHome = {true}/>
      <Viewmore/>

    </>
  )
}

export default Homepage
