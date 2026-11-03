import { Link } from 'react-router-dom';
import type { Product } from '../data/products.ts';
import styles from './ProductCard/styles.module.scss';

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className={styles.card}>
            <Link className={styles.link} to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
                <img className={styles.image} src={product.images[0].src} alt={product.images[0].alt} />
                <h3 className={styles.name}>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
        </article>
    );
}
export default ProductCard;
