import { useEffect, useState } from 'react';
import ProductCard from './ProductCard.tsx';
import styles from './ProductPreview/styles.module.scss';

const product = { name: 'Sweater', price: 49 };

const ProductPreview = () => {
    const [quantity, setQuantity] = useState(1);
    const [secondsOpen, setSecondsOpen] = useState(0);
    const subtotal = product.price * quantity;

    useEffect(() => {
        const previousTitle = document.title;
        document.title = `Shop | ${quantity} unidades`;

        // Restore the title before the next effect runs and when the panel unmounts.
        return () => {
            document.title = previousTitle;
        };
    }, [quantity]);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            // Read the latest state without restarting the interval on each tick.
            setSecondsOpen(previous => previous + 1);
        }, 1000);

        // Also cleans up the extra setup cycle that StrictMode runs in development.
        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    return (
        <section id="product-preview" className={styles.preview} aria-labelledby="preview-heading">
            <h2 id="preview-heading">Product preview</h2>
            <div className={styles.content}>
                <ProductCard name={product.name} price={product.price} />
                <div className={styles.details}>
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
                    <p>Time viewing this product: <span>{secondsOpen}</span> s</p>
                    <p className={styles.hint}>Choose at least one item. This preview does not add items to your cart.</p>
                </div>
            </div>
        </section>
    );
}

export default ProductPreview;
