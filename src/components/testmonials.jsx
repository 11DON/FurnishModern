import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";

export default function Testimonials() {
  return (
    <section className="testimonials container my-5">
      <h2 className="text-center mb-5">What Our Customers Say</h2>
      <div className="row text-center">
        
        {/* Customer 1 */}
        <div className="col-lg-4 mb-4">
          <div className="testimonial-card p-4 shadow-sm rounded">
            <img
              className="rounded-circle mb-3"
              src={customer1}
              alt="Customer 3"
              width={80}
              height={80}
            />
            <p className="fw-bold">Lisa Johnson</p>
            <p className="text-muted fst-italic">
              "FurnishModern exceeded my expectations. Great quality furniture that truly elevates my home!"
            </p>
            <p className="text-warning mb-3"> ★★★★★</p>
          </div>
        </div>

        {/* Customer 2 */}
        <div className="col-lg-4 mb-4">
          <div className="testimonial-card p-4 shadow-sm rounded">
            <img
              className="rounded-circle mb-3"
              src={customer2}
              alt="Customer 3"
              width={80}
              height={80}
            />
            <p className="fw-bold">David Wilson</p>
            <p className="text-muted fst-italic">
              "FurnishModern exceeded my expectations. Great quality furniture that truly elevates my home!"
            </p>
            <p className="text-warning mb-3"> ★★★★★</p>
          </div>
        </div>

        {/* Customer 3 */}
        <div className="col-lg-4 mb-4">
          <div className="testimonial-card p-4 shadow-sm rounded">
            <img
              className="rounded-circle mb-3"
              src={customer3}
              alt="Customer 3"
              width={80}
              height={80}
            />
            <p className="fw-bold">Emma Williams</p>
            <p className="text-muted fst-italic">
              "FurnishModern exceeded my expectations. Great quality furniture that truly elevates my home!"
            </p>
            <p className="text-warning mb-3"> ★★★★</p>
          </div>
        </div>

      </div>
    </section>
  );
}
