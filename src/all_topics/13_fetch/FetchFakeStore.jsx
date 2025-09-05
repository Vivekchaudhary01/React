import React, { useEffect, useState } from "react";

const FetchFakeStore = () => {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let response = await fetch("https://fakestoreapi.in/api/products");
        let data = await response.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Fake Store Products</h1>
            <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {products.length === 0 ? (
                    <h3>Loading...</h3>
                ) : (
                    products.map((product) => (
                        <article
                            key={product.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "10px",
                                height: "450px", 
                                width: "200px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={product.image}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "150px",
                                    objectFit: "contain",
                                }}
                            />

                            <h3
                                style={{
                                    fontSize: "15px",
                                    marginBottom: "8px",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {product.title}
                            </h3>

                            <p>
                                <strong>Price:</strong> ₹{product.price}
                            </p>

                            {product.discount && (
                                <p>
                                    <strong>Discount:</strong> ₹{product.discount}
                                </p>
                            )}

                            <p
                                style={{
                                    fontSize: "12px",
                                    color: "#555",
                                    marginBottom: "10px",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2, 
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {product.description}
                            </p>

                            {product.brand && (
                                <p>
                                    <strong>Brand:</strong> {product.brand}
                                </p>
                            )}
                            {product.model && (
                                <p>
                                    <strong>Model:</strong> {product.model}
                                </p>
                            )}
                            {product.color && (
                                <p>
                                    <strong>Color:</strong> {product.color}
                                </p>
                            )}
                            <p>
                                <strong>Category:</strong> {product.category}
                            </p>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
};

export default FetchFakeStore;
