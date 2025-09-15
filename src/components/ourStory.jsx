import styles from "../components/ourStory.module.css"
import cceh from "../assets/cceh.jpg";
import story from "../assets/ourStory.png"
export default function OurStory() {
  return (

    <div>

      <section className={styles.cceh}>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className={styles.ccehTitle}>Our Story</p>
              <p className={styles.begining}>
                From a humble beginning to a leader in home furnishings.</p>
            </div>
            <div className={`${styles.info} col-md-6`}>
              <p className={styles.about}>
                Founded in 2005, Comfort Design began with a simple vision: to make high-quality, beautifully designed furniture accessible to every home. Our founders, a team of passionate designers and craftsmen, believed that furniture should not only be aesthetically pleasing but also embody unparalleled comfort and durability.
              </p>
              <p className={styles.about}>
                Over the years, we've grown from a small workshop into a national brand, expanding our collections to include a wide array of living room, dining room, bedroom, and outdoor furnishings. Each piece is thoughtfully conceived and meticulously crafted, blending traditional techniques with modern innovation.
              </p>
              <p className={styles.about}>
                Our journey has been marked by a relentless pursuit of excellence and a deep commitment to our customers. We continually evolve, embracing sustainable practices and new technologies to ensure that we remain at the forefront of the furniture industry, creating pieces that resonate with contemporary lifestyles and stand the test of time.
              </p>
            </div>
            <div className={`info-img col-md-6 text-center ${styles.infoImg}`}>
              <img src={story} alt="Crafting Comfort" className={`cceh-img img-fluid rounded shadow ${styles.ccehImg}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}