import { Button } from "../button/button"


export function ProductCart( { product } ) {
    const { name, price, imageUrl } = product

    return (
        <div>
            <img src={imageUrl} alt={`${name}`} />
        <div>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <Button typeButton="inverted">Adicionar ao carrinho</Button>
        </div>
        
    )
}