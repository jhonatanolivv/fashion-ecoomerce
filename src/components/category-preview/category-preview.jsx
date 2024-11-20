import { ProductCart } from "../product-card/product-car";
import './category-preview.scss'



export function CategoryPreview({ title, products }) {
    return (
        <div className="container-category">
            <h2>{title.toUpperCase()}</h2>
            <div className="container-category-preview">
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCart key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}