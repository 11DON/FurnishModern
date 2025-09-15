import AboutUsHero from "../components/aboutUsHero"
import NavBar from "../components/navbar"
import OurPurpose from "../components/ourPurpose"
import OurStory from "../components/ourStory"
import OurValeus from "../components/ourValues"
export default function AboutUs(){
    return (
        <div>
            <NavBar />
            <AboutUsHero />
            <OurStory />
            <OurPurpose />
            <OurValeus />
        </div>
    )
}