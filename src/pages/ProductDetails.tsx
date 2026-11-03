import { useParams } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview.tsx';
import { products } from '../data/products.ts';
import NotFound from './NotFound.tsx';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = products.find(product => product.id === productId);

    if (!product) {
        return <NotFound />;
    }

    // A different product gets fresh quantity and gallery state.
    return <ProductPreview key={product.id} product={product} />;
}

export default ProductDetails;
