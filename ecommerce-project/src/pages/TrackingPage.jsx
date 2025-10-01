import { Link } from 'react-router';
import Header from '../components/Header';
import './TrackingPage.css';
import logoWhite from '../assets/images/logo-white.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'

export default function TrackingPage() {
    return (
        <>
            <Header />
            <title>Tracking</title>
                
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo"
                            src={logoWhite} />
                        <img className="mobile-logo"
                            src={mobileLogoWhite} />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src={searchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={cartIcon} />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on Monday, June 13
                    </div>

                    <div className="product-info">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div className="product-info">
                        Quantity: 1
                    </div>

                    <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}