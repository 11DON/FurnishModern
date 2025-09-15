import frank from "../assets/frank.jpg";
import bob from "../assets/bob.jpg";
import carol from "../assets/carol.jpg";
import alice from "../assets/alice.jpg";
import david from "../assets/david.jpg";
import eve from "../assets/eve.jpg";
import styles from "../components/ourPurpose.module.css"

export default function MeetOurTeam(){
    return (
         <section className={styles.purpose}>
                        <p className={styles.purposeTitle}>Meet Our Team</p>
                        <div className="row align-items-center pt-5 mt-5">
                            {[
                                {img:alice,name:"Alice Johnson",title:"CEO & Founder"},
                                {img:bob,name:"Bob Williams",title:"Chief Designer"},
                                {img:carol,name:"Carol Davis",title:"Head of Operations"},
                                {img :david,name:"David Lee",title:"Marketing Director"},
                                {img :eve,name:"Eve Chen",title:"Customer Success Lead"},
                                {img:frank,name:"Frank White",title:"Product Manager"}
                            ].map ((item,idx)=> (
                                <div className="col-md-4 mb-4 d-flex flex-column align-items-center" key={idx}>
                                    <img src={item.img} alt="" />
                                    <p className={styles.valuesTitle}>{item.name}</p>
                                    <p className={styles.valuesExplain}>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>
    )
}