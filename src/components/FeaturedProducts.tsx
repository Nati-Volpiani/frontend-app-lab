import ProductCard from './ProductCard.tsx';
import { products } from '../data/products.ts';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section id="featured-products" className="featured-products">
            <h2>Featured</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}
export default FeaturedProducts;
