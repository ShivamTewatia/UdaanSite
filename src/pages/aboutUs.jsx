import Nav from "../components/nav/nav.jsx"
import AboutHero from "../components/aboutUs/aboutHero.jsx"
import AboutWho from "../components/aboutUs/aboutWho.jsx"
import AboutWhat from "../components/aboutUs/aboutWhat.jsx"
import AboutHead from "../components/aboutUs/aboutHead.jsx"
import AboutMentor from "../components/aboutUs/aboutMentor.jsx"
import Footer from "../components/footer/footer.jsx"


function AboutUs(){
    
    return(
        <>
        <Nav/>
        <AboutHero/>
        <AboutWho/>
        <AboutWhat/> 
        <AboutHead />
        <AboutMentor />
        <Footer/>
        </>
    )
}
export default AboutUs