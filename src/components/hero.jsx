import styles from '../pages/HomePage.module.css';


export default function HeroSection() {

    return (
        <div>
            <section className={styles.hero}>
                <h1>Welcome to FurnishModern</h1>
                <p>Discover timeless elegance and contemporary comfort designed for your living space. Explore our curated collections.</p>
                <button className="btn btn-outline-dark" id="heroBtn">Shop Now</button>
            </section>
        </div>
    )
}