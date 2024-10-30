import './categories.scss'

import { Category } from "../category/category"

export function Categories({ categories }) {
    return(
        <div className="categories-container">
            {
                categories.map((category) => {
                    return(
                        <Category category={category} key={category.id}/>
                    )
                })
            }
        </div>
    )
}