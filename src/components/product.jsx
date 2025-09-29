import { useContext, useEffect, useState } from "react";
import FilterBar from "../components/filterBar";
import styles from "../components/product.module.css";
import Footer from '../components/footer';
import { CartContext } from '../components/cartContext';
export default function Product() {

    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilterdProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [LimitedNumberOfProdcut, setLimitedProdict] = useState([]);
    const [LimitedNumberOfTrending, setLimitedProdictTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 4;
    const { addToCart } = useContext(CartContext);
    const [toastMessage, setToastMessage] = useState("");
    // Filters
    const [filters, setFilters] = useState({
        category: [],
        style: [],
        priceRange: [, 4000]
    });
    const [sortBy, setSortBy] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(4000);


    // -------------------------------
    // FETCH ALL PRODUCTS
    // -------------------------------
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/products?page=${page}&limit=${limit}`);
                const data = await response.json();

                if (page === 1) {
                    setProducts(data.products);
                } else {
                    setProducts(prev => [...prev, ...data.products]);
                }

                if (page >= data.totalPages) {
                    setHasMore(false);
                }

                setFilterdProducts(prev =>
                    page === 1 ? data.products : [...prev, ...data.products]);

                setLoading(false);
                // Set Price Range Dynamically
                const prices = data.products.map(p => p.price);
                setMinPrice(Math.min(...prices));
                setMaxPrice(Math.max(...prices));
                setFilters(f => ({
                    ...f,
                    priceRange: [Math.min(...prices), Math.max(...prices)],
                }));
            } catch (error) {
                console.error("Error Fetching Prodcuts", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, [page]);

    const loadMore = () => {
        if (hasMore) {
            setPage(prev => prev + 1);
        }
    }

    // -------------------------------
    // FETCH TRENDING PRODUCTS
    // -------------------------------

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products/random/4");
                const data = await response.json();
                setLimitedProdictTrending(data);
            } catch (error) {
                console.error("error fetching Data ", error);

            }
        };
        fetchTrendingProducts();
    }, [])



    // -------------------------------
    // FETCH Limited PRODUCTS
    // -------------------------------    

    useEffect(() => {
        const fetchLimitedProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products/random/4");
                const data = await response.json();
                setLimitedProdict(data);
            } catch (error) {
                console.error("Error fetching data ", error);
            }
        };
        fetchLimitedProducts();
    }, [])



    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    })
    useEffect(() => {
        let filterd = [...products];

        // Apply filters
        if (filters.category.length) filterd = filterd.filter(p => filters.category.includes(p.category));
        if (filters.style.length) filterd = filterd.filter(p => filters.style.includes(p.style));
        filterd = filterd.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
        // Sorting
        if (sortBy === "priceAsc") filterd.sort((a, b) => a.price - b.price);
        if (sortBy === "priceDesc") filterd.sort((a, b) => b.price - a.price);
        if (sortBy === "nameAsc") filterd.sort((a, b) => a.name.localeCompare(b.name));
        setFilterdProducts(filterd);

    }, [filters, sortBy, products])
    // Helper Function to fix Url
    const fixUrl = (url) => {
        if (!url) return "";
        return url.replace("/RandomAssets/", "/");
    };
    if (loading) {
        return <h2>Loading products...</h2>;
    }
    return (
        <div>

            <div className="container my-5">
                <h1 className={styles.header}>Dicover Your Comfort</h1>
                <p className={styles.description}>Explore our curated selection of modern furniture designed to elevate your living space.
                    Find pieces that combine aesthetics with unparalleled comfort.</p>
                <FilterBar
                    filters={filters}
                    setFilters={setFilters}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />
                <div className="row g-4">
                    {filterdProducts.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
                            <div className="card h-100 shadow-sm">
                                <div
                                    className={styles.card}
                                    style={{ backgroundImage: `url(${fixUrl(product.image)})` }}
                                >
                                    <div className={styles.overlay}>
                                        <h3 className="mb-1">{product.name}</h3>
                                        <p className="mb-1">{product.category}</p>
                                        <p className="fw-bold">{product.price}</p>
                                        <div>
                                            <button className={`btn  ${styles.b} `}>
                                                View Product
                                            </button>
                                            <button
                                                className={`btn m-3 ${styles.b}`}
                                                onClick={() => {
                                                    addToCart(product);
                                                    setToastMessage(`${product.name} added to cart ✅`);
                                                }}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {hasMore && (
                        <div className="text-center my-4">
                            <button className="btn btn-primary" onClick={loadMore}>
                                Load More
                            </button>
                        </div>
                    )}
                </div>
                <div className="container my-5">
                    <h2 className={styles.header}>Trending Products</h2>
                    <div className="row g-4">
                        {LimitedNumberOfTrending.map((product) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
                                <div className="card h-100 shadow-sm">
                                    <div
                                        className={styles.card}
                                        style={{ backgroundImage: `url(${fixUrl(product.image)})` }}
                                    >
                                        <div className={styles.overlay}>
                                            <h3 className="mb-1">{product.name}</h3>
                                            <p className="mb-1">{product.category}</p>
                                            <p className="fw-bold">{product.price}</p>
                                            <div>
                                                <button className={`btn  ${styles.b} `}>
                                                    View Product
                                                </button>
                                                <button
                                                    className={`btn m-3 ${styles.b}`}
                                                    onClick={() => {
                                                        addToCart(product);
                                                        setToastMessage(`${product.name} added to cart ✅`);
                                                    }}
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`container my-5 ${styles.sectionSpacing}`}>
                    <h2 className={styles.header} id="fc">Featured Collections</h2>
                    <div className="row g-4">
                        {LimitedNumberOfProdcut.map((product) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product._id}>
                                <div className="card h-100 shadow-sm">
                                    <div
                                        className={styles.card}
                                        style={{ backgroundImage: `url(${fixUrl(product.image)})` }}
                                    >
                                        <div className={styles.overlay}>
                                            <h3 className="mb-1">{product.name}</h3>
                                            <p className="mb-1">{product.category}</p>
                                            <p className="fw-bold">{product.price}</p>
                                            <div>
                                                <button className={`btn  ${styles.b} `} >
                                                    View Product
                                                </button>
                                                <button
                                                    className={`btn m-3 ${styles.b}`}
                                                    onClick={() => {
                                                        addToCart(product);
                                                        setToastMessage(`${product.name} added to cart ✅`);
                                                    }}
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            {toastMessage && (
                <div
                    className="toast-container position-fixed bottom-0 end-0 p-3"
                    style={{ zIndex: 1055 }}
                >
                    <div className="toast show align-items-center text-bg-success border-0">
                        <div className="d-flex">
                            <div className="toast-body">{toastMessage}</div>
                            <button
                                type="button"
                                className="btn-close btn-close-white me-2 m-auto"
                                onClick={() => setToastMessage("")}
                            ></button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}