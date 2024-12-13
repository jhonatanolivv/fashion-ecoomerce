import { Route, Routes } from "react-router-dom";
import { CategoriasPreview } from "../../components/categorias-preview/categorias-preview";
import { CategoryShop } from "../category-shop"


export function Shop() {
    return (
        <Routes>
            <Route index element={<CategoriasPreview/>}/>
            <Route path=":category" element={<CategoryShop/>}/>
        </Routes>
        
    )
}