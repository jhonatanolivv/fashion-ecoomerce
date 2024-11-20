import { Button } from "../button/button";
import './product-car.scss';

export function ProductCart({ product }) {
    const { name, price, imageUrl } = product;

    return (
        <div className="product-car">
            <div className="product-card__image-container">
                <img className="product-card__image" src={imageUrl} alt={`${name}`} />
                <div className="product-card__button-container">
                    <Button typeButton="inverted">
                        Adicionar ao carrinho
                    </Button>
                </div>
            </div>
            <div className="product-car__info">
                <span className="product-card__name">{name}</span>
                <span className="product-card__price">{price}</span>
            </div>
        </div>
    );
}
