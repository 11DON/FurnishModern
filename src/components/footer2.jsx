import Footer from "./footer";

export default function Footer2() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
   

        {/* Links section */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>FurnishModern
                </h6>
                <p>
                  Crafting comfort, elevating homes with innovative and stylish furniture solutions.
                </p>
              </div>

              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-reset">Angular</a></p>
                <p><a href="#!" className="text-reset">React</a></p>
                <p><a href="#!" className="text-reset">Vue</a></p>
                <p><a href="#!" className="text-reset">Laravel</a></p>
              </div>

              {/* Useful links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="#!" className="text-reset">Pricing</a></p>
                <p><a href="#!" className="text-reset">Settings</a></p>
                <p><a href="#!" className="text-reset">Orders</a></p>
                <p><a href="#!" className="text-reset">Help</a></p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </footer>
    </div>
  );
}
