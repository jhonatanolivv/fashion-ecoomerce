import { ProductCart } from "../product-card/product-car";



export function CategoryPreview({ title, products }) {
    return (
        <div>
            <h2>{title.toUpperCase()}</h2>
            <div>
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCart key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}