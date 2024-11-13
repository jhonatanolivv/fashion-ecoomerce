import { useEffect, useState } from "react"
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase"
import { SHOP_DATA } from "../../shop-data"
import { CategoryPreview } from "../category-preview/category-preview"


export function CategoriasPreview() {

    const [categories, setCategories] = useState({})

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA) //primeiro parametro é o nome da variavel: "categories". El segundo parametro é o arquivo que eu quero utilizar.
    // }, [])

    useEffect(() => {
        const getCategories = async () => {
            const category = await getCategoriesAndDocuments()
            setCategories(category)
        }

        getCategories()
    })
    
    return (
        <>
        {
            Object.keys(categories).map(title => {
                const products = categories[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            })
        }
        </>
    )
}