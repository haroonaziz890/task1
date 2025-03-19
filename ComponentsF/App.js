import React from 'react'
import Nav from './HeaderF/Nav'
import Cards1 from './Cards1F/Cards1'
import Cards2 from './Cards2F/Cards2'
import Divider from './DividerF/Divider'
// import Cards3 from './Cards3F/Cards3'
// import Image from './ImageF/'
// import Footerr from './FooterfF/Footerr' 
import Footer from './FooterF//Footer'
import Carouselss from './CarouselsF/Carouselss'

const App = () => {
  return (
    <div>
      <Nav/>
      <Cards1/>
      <Cards2/>
      <Divider/>
      {/* <Cards3/> */}
      {/* <Image/> */}
      {/* <Footerr/> */}
      <Footer/>

      
      <Carouselss/>
      

    </div>
  )
}

export default App