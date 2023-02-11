import { Link, useParams } from "react-router-dom"

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
			<p>
				{/*
				Relative prop in <Link>: By default, links are relative to the route hierarchy,
				so '..' will go up one 'Route level'.
				
				Occasionally, you may find that you have matching URL patterns
				that do not make sense to be nested,
				and you'd prefer to use relative "path routing".

				If relative prop is set to route, then the below link would
				redirect as the route definition of the ProductDetailPage component.
				*/}
				<Link to='..' relative='path'>Back</Link>
			</p>
		</>
	);
}

export default ProductDetailPage;
