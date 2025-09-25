import e from "cors";

export default function FilterBar({
    filters,
    setFilters,
    sortBy,
    setSortBy,
    minPrice,
    maxPrice
}) {
    const handleCheckbox = (type, value) => {
        const current = filters[type];
        if (current.includes(value)) {
            setFilters({ ...filters, [type]: current.filter(v => v !== value) });

        } else {
            setFilters({ ...filters, [type]: [...current, value] });
        }
    };
    const handlePriceChange = (e) => {
        setFilters({ ...filters, priceRange: [Number(e.target.value[0]), Number(e.target.value[1])] });
    };
    return (
        <div>
            <div className="row mb-4 g-3">
                {/* Category multi select */}
                <div className="col-md-3">

                    {/* Category Dropdown */}
                    <div>
                        <label className="form-label fw-bold">Category</label>
                        <select
                            className="form-select"
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        >
                            <option value="">All Categories</option>
                            <option value="Bedroom Sanctuary">Bedroom Sanctuary</option>
                            <option value="Dining Room Elegance">Dining Room Elegance</option>
                            <option value="Home Office Productivity">Home Office Productivity</option>
                            <option value="Kids Room Fun">Kids Room Fun</option>
                            <option value="Living Room essentials">Living Room essentials</option>
                            <option value="Outdoor Retreat">Outdoor Retreat</option>
                        </select>
                    </div>
                    

                </div>
                {/* Style Multi Select */}
                <div className="col-md-3">
                    <label className="form-label fw-bold">Style</label>
                    {["Modern", "Classic"].map(style => (
                        <div key={style} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={filters.style.includes(style)}
                                onChange={() => handleCheckbox("style", style)}
                                id={`style-${style}`}
                            />
                            <label className="form-check-label" htmlFor={`style-${style}`}>
                                {style}
                            </label>
                        </div>
                    ))}

                </div>
                {/* Price Range */}
                <div className="col-md-2">
                    <label className="form-label fw-bold">Max Price: ${filters.priceRange[1]}</label>
                    <input
                        type="range"
                        className="form-range"
                        min={minPrice}
                        max={maxPrice}
                        value={filters.priceRange[1]}
                        onChange={(e) =>
                            setFilters({ ...filters, priceRange: [minPrice, Number(e.target.value)] })
                        }
                    />

                </div>
                {/* Sort By */}
                <div className="col-md-2">
                    <label className="form-label fw-bold">Sort By</label>
                    <select className="form-select" value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value=""> Default </option>
                        <option value="priceAsc"> Price: Low to High </option>
                        <option value="priceDesc"> Price: High to Low </option>
                        <option value="nameAsc"> Name: A-Z </option>
                    </select>
                </div>
            </div>
        </div>
    )
}