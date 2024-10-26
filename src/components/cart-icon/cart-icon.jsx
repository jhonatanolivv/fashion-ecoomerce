import ShoppingIcon from '../../assets/shopping-cart-simple.svg'; 

export function CartIcon() {
    return (
        <div className="cart-icon-container">
            <img src={ShoppingIcon} className="shopping-icon" />
        </div>
    )
}