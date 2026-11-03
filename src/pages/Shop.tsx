import { useState } from 'react';
import ProductPreview from '../components/ProductPreview.tsx';
import styles from './Shop/styles.module.scss';

const Shop = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <main className={styles.shop}>
            <h1>Shop</h1>
            <p>Take a closer look at our Sweater and choose your quantity.</p>
            <button
                className={styles.toggle}
                type="button"
                aria-expanded={isPreviewOpen}
                aria-controls={isPreviewOpen ? 'product-preview' : undefined}
                onClick={() => setIsPreviewOpen(previous => !previous)}
            >
                {isPreviewOpen ? 'Close product' : 'Open product'}
            </button>
            {isPreviewOpen && <ProductPreview />}
        </main>
    );
}
export default Shop;
