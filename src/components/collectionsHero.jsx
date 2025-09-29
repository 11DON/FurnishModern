import styles from"../components/aboutUsHero.module.css";
import collectionsStyles from"../pages/collections.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CollectionsHero() {
    const navigate = useNavigate();
    const handleScroll =() =>{
        navigate("/collections#explore");
        setTimeout(()=>{
            const element =  document.getElementById("explore");
            if(element){
                element.scrollIntoView({behavior:"smooth"})
            }
        },100);
    }
    return (
        <div>
            <section className={`${styles.hero} ${collectionsStyles.heroOverride}`}>
                <h1>Discover Your Perfect Collection</h1>
                <p>Explore our curated selections designed to bring comfort, style, and harmony to every corner of your home.</p>
               
                 <button onClick={handleScroll} className="btn btn-outline-dark" id="heroBtn">Shop All Collections     <i class="bi bi-arrow-right"></i>
                 </button>
             
               
            </section>
        </div>
    )
}