import styles from"../pages/HomePage.module.css";
import Testmonials from '../components/testmonials'
import Navbar from '../components/navbar'
import comfortRoom from "../assets/comfortRoom.png";
import dining from "../assets/dining.png";
import bedroomSerenity from "../assets/bedroomSerenity.png";
import outdoor from "../assets/outdoor.png";
import homeOffice from "../assets/homeOffice.png";
import kidsRoom from "../assets/kidsRoom.png";
import cceh from "../assets/cceh.jpg";
import Footer from'../components/footer'
import HeroSection from "../components/hero";


export default function HomePage() {
  return (

    <div>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Collections Section */}
      <section className={styles.collections}>
        <h2>Explore Our Collections</h2>
        <div className="row">
          {[ 
            { img: dining, title: "Dining Elegance" },
            { img: comfortRoom, title: "Living Room Comfort" },
            { img: outdoor, title: "Outdoor Relaxation" },
            { img: bedroomSerenity, title: "Bedroom Serenity" },
            { img: homeOffice, title: "Home Office Productivity" },
            { img: kidsRoom, title: "Kids Room Fun" }
          ].map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className={`card shadow-sm ${styles.card}`}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Crafting Comfort Section */}
        <section className={styles.cceh}>
          <div className="container">
            <div className="row align-items-center">
              <div className="info col-md-6">
                <p className={styles.ccehTitle}>Crafting Comfort, Elevating Homes</p>
                <p className={styles.about}>
                  At FurnishModern, we believe that furniture is more than just an object – it's an extension of your lifestyle.
                  Our meticulous design process combines innovative aesthetics with unparalleled functionality.
                  Each piece is crafted from the finest materials, ensuring durability, comfort, and timeless beauty. We are committed to sustainable practices and ethical sourcing, delivering furniture that you can feel good about.
                </p>
                <p className={styles.about}>
                  Experience the difference of true craftsmanship, where every detail is considered and every curve tells a story of dedication.
                </p>
              </div>
              <div className={`info-img col-md-6 text-center ${styles.infoImg}`}>
                <img src={cceh} alt="Crafting Comfort" className={`cceh-img img-fluid rounded shadow ${styles.ccehImg}`} />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
      </section>
      <div>
         <Testmonials />
     </div>
     <Footer />
    </div>
  );
}
