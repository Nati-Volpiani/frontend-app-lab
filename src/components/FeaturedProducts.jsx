import ProductCard from './ProductCard.jsx';
import './FeaturedProducts.css';

const products = [
    { id: 1, name: 'Sweater', price: 49 },
    { id: 2, name: 'T-Shirt', price: 25 },
    { id: 3, name: 'Leather Bag', price: 89 },
];

const FeaturedProducts = () => {
    return (
        <section className="featured-products">
            <h2>Featured</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
}
export default FeaturedProducts;
