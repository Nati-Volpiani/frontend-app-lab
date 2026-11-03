import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products.ts';
import styles from './ProductPreview/styles.module.scss';

type ProductPreviewProps = {
    product: Product;
};

const ProductPreview = ({ product }: ProductPreviewProps) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const selectedImage = product.images[selectedImageIndex];
    const subtotal = product.price * quantity;

    useEffect(() => {
        const previousTitle = document.title;
        document.title = `${product.name} | lab-store`;

        // Restore the page title when leaving this product, including StrictMode cleanup.
        return () => {
            document.title = previousTitle;
        };
    }, [product.name]);

    return (
        <main className={styles.preview}>
            <Link className={styles.back} to="/">← Back to products</Link>
            <div className={styles.content}>
                <section className={styles.gallery} aria-label={`${product.name} photos`}>
                    <img className={styles.mainImage} src={selectedImage.src} alt={selectedImage.alt} />
                    <div className={styles.thumbnails}>
                        {product.images.map((image, index) => (
                            <button
                                key={image.src}
                                className={styles.thumbnail}
                                type="button"
                                aria-label={`View photo ${index + 1}: ${image.alt}`}
                                aria-pressed={selectedImageIndex === index}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <img src={image.src} alt="" />
                            </button>
                        ))}
                    </div>
                </section>
                <div className={styles.details}>
                    <h1 className={styles.title}>{product.name}</h1>
                    <p className={styles.price}>${product.price}</p>
                    <p>{product.description}</p>
                    <div className={styles.quantity} role="group" aria-labelledby="quantity-label">
                        <span id="quantity-label">Quantity</span>
                        <div className={styles.controls}>
                            <button
                                className={styles.button}
                                type="button"
                                aria-label="Decrease quantity"
                                disabled={quantity === 1}
                                onClick={() => setQuantity(previous => Math.max(1, previous - 1))}
                            >
                                −
                            </button>
                            <output className={styles.value} aria-label="Quantity" aria-live="polite">
                                {quantity}
                            </output>
                            <button
                                className={styles.button}
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => setQuantity(previous => previous + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <p className={styles.subtotal}>Subtotal: <strong>${subtotal}</strong></p>
                </div>
            </div>
        </main>
    );
}

export default ProductPreview;
