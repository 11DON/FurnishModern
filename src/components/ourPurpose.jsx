import styles from "../components/ourPurpose.module.css"
export default function OurPurpose() {
    return (
        <div>
            <section className={styles.purpose}>
                <p className={styles.purposeTitle}>Our Purpose</p>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className={styles.purposeTitle}>Our Mission</p>
                        <p className={styles.beginings}>
                            To enrich lives by providing beautifully designed, high-quality furniture that transforms houses into comfortable, inspiring homes.
                            We believe in creating spaces where memories are made
                            and moments are cherished.</p>
                    </div>
                    <div className="col-md-6">
                        <p className={styles.purposeTitle}>Our Vision</p>
                        <p className={styles.beginings}>
                            To be the leading innovator in home furnishings,
                            known for exceptional craftsmanship, customer experience,
                            and an unwavering commitment to sustainability
                            and ethical production.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}