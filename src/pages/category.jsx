import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Footer from "../components/footer";
import collectionsStyles from "../pages/collections.module.css";
import styles from "../pages/HomePage.module.css";
import productStyles from "../components/product.module.css";



export default function Category() {
    const { collectionName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const fixUrl = (url) => {
        if (!url) return "";
        return url.replace("/RandomAssets/", "/");
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products/category/${collectionName}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [collectionName]);

    if (loading) return <h2 className="text-center my-5">Loading Products...</h2>
    return (
        <div>
            <div className={`container my-5 ${styles.collection}`}>
                <h1 className="mb-4 text-center">{decodeURIComponent(collectionName)}</h1>
                {products.length === 0 ? (
                    <p className="text-center"> NO Products found for this collection</p>
                ) : (
                    <div className="row g-4">
                        {products.map((Product) => (
                            <div className="col-md-4 mb-4" key={Product._id}>
                                <div className={`card h-100 ${productStyles.card}`} 
                                 style={{backgroundImage:`url(${fixUrl(Product.image)})`}}>
                                    <div className={productStyles.card}
                                     >
                                        <div className={productStyles.overlay} >
                                            <h5 className="card-title">
                                                {Product.name}
                                            </h5>
                                            <p className="fw-bold">${Product.price}</p>
                                            <div>
                                                <button className={`btn my-4 m-3 ${productStyles.b} `}>
                                                    View Product
                                                </button>
                                                <button className={`btn my-4 m-3 ${productStyles.b}`}>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                )
                }
            </div>
            <Footer />
        </div>
    );
}