import './ProductCard.css';

function ProductCard({ name, price }) {
    return (
        <article className="product-card">
            <div className="image-placeholder">Image</div>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
    );
}

export default ProductCard;