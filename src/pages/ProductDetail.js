import { useParams } from "react-router-dom"

function ProductDetailPage () {
	/*
	The useParams hook returns an object of key/value pairs of the
	dynamic param from the current URL that were matched by the <Route path>.
	Child routes inherit all params from their parent routes.
	*/
	const params = useParams();

	return (
		<>
			<h1>Product Details!</h1>
			<p>{params.productId}</p>
		</>
	);
}

export default ProductDetailPage;
