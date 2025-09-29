import styles from "../pages/HomePage.module.css";
import comfortRoom from "../assets/LRE.png";
import dining from "../assets/DRE.png";
import bedroomSerenity from "../assets/BS.png";
import outdoor from "../assets/OR.png";
import homeOffice from "../assets/HOP.png";
import kidsRoom from "../assets/KRF.png";
import collectionsStyles from"../pages/collections.module.css";
import { Link } from "react-router-dom";


export default function ExloreOurCollections() {

   
    return (
        <div>
            <section className={`${styles.collections} ${collectionsStyles.explr}`} id="explore">
                <h2>Explore Our Collections</h2>
                <div className="row">
                    {[
                        { img: dining, title: "Dining Room Elegance" },
                        { img: comfortRoom, title: "Living Room essentials" },
                        { img: outdoor, title: "Outdoor Retreats" },
                        { img: bedroomSerenity, title: "Bedroom Sanctuary" },
                        { img: homeOffice, title: "Home Office Productivity" },
                        { img: kidsRoom, title: "Kids Room Fun" }
                    ].map((item, idx) => (
                        <div className="col-md-4" key={idx}>
                            <div className={`card shadow-sm ${styles.card}`}>
                                <img src={item.img} className="card-img-top" alt={item.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <Link className="btn btn-outline-dark" to={`/collections/${encodeURIComponent(item.title)}`}> View Collection</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={collectionsStyles.redefine}>
                    <h1>Ready to Redefine Your Space?</h1>
                    <p>Browse our extensive catalog, discover new arrivals, and find inspiration to create the home of your dreams. Your comfort, our design expertise.</p>
                    <button className="btn btn-outline-dark">
                    Start Your Journey
                    </button>
                </div>

            </section>
        </div>
    )
}