import { useEffect, useState } from "react";
import FilterBar from "../components/filterBar";
import styles from "../components/product.module.css";

export default function Product() {

    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilterdProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [filters, setFilters] = useState({
        category: [],
        style: [],
        priceRange: [, 4000]
    });
    const [sortBy, setSortBy] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(4000);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/products");
                const data = await response.json();
                setProducts(data);
                setFilterdProducts(data);
                setLoading(false);
                // Set Price Range Dynamically
                const prices = data.map(p => p.price);
                setMinPrice(Math.min(...prices));
                setMaxPrice(Math.max(...prices));
                setFilters({ ...filters, priceRange: [Math.min(...prices), Math.max(...prices)] });
            } catch (error) {
                console.error("Error Fetching Prodcuts", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

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
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow-sm" key={product._id}>

                                <div className={styles.card}
                                    style={{ backgroundImage: `url(${fixUrl(product.image)})` }}>
                                    <div className={styles.overlay}>
                                        <h3 className="mb-1"> {product.name}</h3>
                                        <p className="mb-1">{product.category}</p>
                                        <p className="fw-bold">{product.price}</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    )
}