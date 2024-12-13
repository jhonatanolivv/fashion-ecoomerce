import { Outlet } from 'react-router-dom';
import { CartIcon } from '../../components/cart-icon/cart-icon';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export function Navigation() {
    return (
        <>
        <div className="navigation">
            <div className='logo-container'>
                <NavLink to="/" style={({isActive}) => isActive ? {color:"red"} : {}}>
                <h1>Coder E-Commerce</h1>
                </NavLink>
            </div>
            <div className="nav-links-container">
                <NavLink className="nav-link" to="/shop" style={({isActive}) => isActive ? {color:"green", fontWeight:"600"} : {}}>
                SHOP
                </NavLink>  
                <NavLink className="nav-link" to="/auth">
                LOGIN
                </NavLink>  
                <CartIcon />  
            </div>
        </div>
        <Outlet />
        </>
    )
} 