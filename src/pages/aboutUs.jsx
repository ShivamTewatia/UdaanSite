import Nav from "../components/nav/nav.jsx"
import AboutHero from "../components/aboutUs/aboutHero.jsx"
import AboutWho from "../components/aboutUs/aboutWho.jsx"
import AboutWhat from "../components/aboutUs/aboutWhat.jsx"
import AboutFounder from "../components/aboutUs/aboutFounder.jsx"
import AboutMentor from "../components/aboutUs/aboutMentor.jsx"
import Footer from "../components/footer/footer.jsx"

function AboutUs(){
    return(
        <>
        <Nav/>
        <AboutHero/>
        <AboutWho/>
        <AboutWhat/> 
        <AboutFounder/>
        <AboutMentor/>
        <Footer/>
        </>
    )
}
export default AboutUs