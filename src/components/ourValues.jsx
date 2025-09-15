import styles from "../components/ourPurpose.module.css"
import Selection1 from "../assets/Selection1.jpg";
import Selection2 from "../assets/Selection2.jpg";
import Selection3 from "../assets/Selection3.jpg";
import Selection4 from "../assets/Selection4.jpg";
import Selection5 from "../assets/Selection5.jpg";
import Selection from "../assets/Selection.jpg";
import frank from "../assets/frank.jpg";
import bob from "../assets/bob.jpg";
import carol from "../assets/carol.jpg";
import alice from "../assets/alice.jpg";
import david from "../assets/david.jpg";
import eve from "../assets/eve.jpg";
import MeetOurTeam from "./meetOurTeam";
import Footer2 from "./footer2";


export default function OurValeus() {
    return (
        <div>
            <section className={styles.purpose}>
                <p className={styles.purposeTitle}>Our Core Values</p>
                <p className={styles.t}>The principles that guide our work and our relationships.</p>
                <div className="row align-items-center pt-5 mt-5">
                    {[
                        {
                            img: Selection1, title: "Customer Focus",
                            explain: "We prioritize our customers, understanding their needs to deliver exceptional comfort and style."
                        },
                        {
                            img: Selection, title: "Innovation",
                            explain: "Constantly seeking new designs and advanced materials to create cutting-edge furniture."
                        },
                        {
                            img: Selection2, title: "Quality Craftsmanship",
                            explain: "Dedicated to superior quality in every detail, ensuring durability and timeless elegance."
                        },
                        {
                            img: Selection5, title: "Integrity",
                            explain: "Fostering a collaborative environment where every team member contributes to our collective success."
                        },
                        {
                            img: Selection4, title: "Sustainability",
                            explain: "Committed to environmentally responsible practices, from sourcing to production."
                        },
                        {
                            img: Selection3, title: "Teamwork",
                            explain: "Operating with honesty and transparency in all our business relationships."
                        }
                    ].map((item, idx) => (
                        <div className="col-md-4 mb-4 d-flex flex-column align-items-center" key={idx}>
                            <img src={item.img} alt="" />
                            <p className={styles.valuesTitle}>{item.title}</p>
                            <p className={styles.valuesExplain}>{item.explain}</p>
                        </div>
                    ))}
                </div>
            </section>
            <MeetOurTeam />
<Footer2 />       
 </div>
    )
}