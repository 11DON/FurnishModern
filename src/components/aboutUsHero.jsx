import styles from"../components/aboutUsHero.module.css";
export default function aboutUsHero() {
    return (
        <div>
            <section className={styles.hero}>
                <h1>Crafting Comfort, Elevating Homes</h1>
                <p>At Comfort Design, we believe your home should be a sanctuary of style and comfort. Discover our journey and the passion that drives us to create exceptional furniture.</p>
                <button className="btn btn-outline-dark" id="heroBtn">Explore Our Products   <i class="bi bi-arrow-right"></i></button>
            </section>
        </div>
    )
}