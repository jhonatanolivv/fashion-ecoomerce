import { Link } from "react-router-dom";
import { ProductCart } from "../product-card/product-car";
import './category-preview.scss'



export function CategoryPreview({ title, products }) {
    return (
        <div className="container-category">
            <h2>
                <Link to={title}>{title.toUpperCase()}</Link>
                </h2>
            <div className="container-category-preview">
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCart key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}