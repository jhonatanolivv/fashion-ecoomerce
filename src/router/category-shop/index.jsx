import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCart } from "../../components/product-card/product-car"


export function CategoryShop() {

    const { category } = useParams()

    const[categoriesMap, setCategoriesMap] = useState({})
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }

        getCategories()
    }, [])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    console.log(products)

    return (
        <>
        <h2>{category.toUpperCase()}</h2>
        <div className="category-container-shop">
            {
                products && products.map((product) => <ProductCart key={product.id} product={product}/>)
            }
        </div>
        </>
    )
}