import Hero from "./Sections/hero"
import NavBar from "./Components/NavBar"
import ShowcaseSection from "./Sections/ShowcaseSection"
import LogoSection from "./Sections/LogoSection"
import FeatureCards from "./Sections/FeatureCards"
import ExperienceSection from "./Sections/ExperienceSection"
import TechStack from "./Sections/TechStack"
import Testimonials from "./Sections/Testimonials"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App
