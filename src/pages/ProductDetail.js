import { useParams } from 'react-router-dom';

const ProductDetail = () => {
	/*
    The useParams hook returns an object of
    key/value pairs of the dynamic params from the current URL
    that were matched by the <Route path>.

    Child routes inherit all params from their parent routes.

    if the URL is 'http://localhost:3000/product-detail/product123' then useParam()
    would strip the value for the key ':productId' as 'product123'.
    */
	const params = useParams();

	return (
		<section>
			<h1>Product Detail</h1>
			{/*
            If the URL is 'http://localhost:3000/product-detail/product123' then useParam()
            would strip the value for the key ':productId' as 'product123'.
            */}
			<p>{params.productId}</p>
		</section>
	);
};

export default ProductDetail;
