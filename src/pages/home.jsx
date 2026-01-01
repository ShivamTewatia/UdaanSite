import Nav from "../components/nav/nav.jsx"
import Hero from "../components/home/hero.jsx"
import About from "../components/home/about.jsx"
import Placement from "../components/home/placement.jsx"
import Top from "../components/home/top.jsx"

import Footer from "../components/footer/footer.jsx"

function Home(){
    return(
        <>
        <Nav/>
        <Hero/>
        <About/>
        <Placement/>
        <Top/>
        
        <Footer/>
        </>
    )
}

export default Home