import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import usflag from '../assets/landing/usflag.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { CartContext } from "../features/cart/cartContext.jsx";


const NavBar = () => {
  
    const categoryList = ["All", "Arts & Crafts", "Automotive", "Baby", "Books", "Computers", "Electronics", "Garden & Outdoor", "Grocery", "Health & Personal Care", "Home & Kitchen", "Industrial & Scientific", "Luggage", "Movies & TV", "Music, CDs & Vinyl", "Pet Supplies", "Software", "Sports & Outdoors", "Tools & Home Improvement", "Toys & Games", "Video Games"];

    const { cartCount } = useContext(CartContext);
    console.log("cartCount:", cartCount);

    return (
    <nav className="nav">
        <Link to="/">
            <img id="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        </Link>

        <section className="nav-group">
            <LocationOnOutlinedIcon />

            <div id="deliver">
                <p>Deliver to</p>
                <h4>South Africa</h4>
            </div>
            
        </section>

        <section className="search">
            <select id="category-select">
                {
                    categoryList.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))
                }
            </select>

            <input  id="search-input" type="text" placeholder="Search Amazon" />

            <button>
                <SearchIcon />
            </button>

        </section>
        
        <section className="language">
            <img
                    className="flag-icon"
                    src={usflag}
                    alt="US flag"
                    />

            <select>
                
                <option 
                    
                    value="en_US">EN
                </option>
                <option value="es_US">español - ES</option>
                <option value="ar_AE">العربية - AR</option>
                <option value="de_DE">Deutsch - DE</option>
                <option value="he_IL">עברית - HE</option>
                <option value="ko_KR">한국어 - KO</option>
                <option value="pt_BR">português - PT</option>
                <option value="zh_CN">中文 (简体) - ZH</option>
                <option value="zh_TW">中文 (繁體) - ZH</option>
            </select>
        </section>
        
        <section className="nav-group account">
            <p>Hello, Sign in</p>
            <h4>Account & Lists</h4>
            <option></option>
        </section>

        <section className="nav-group orders">
            <p>Returns</p>
            <h4>& Orders</h4>
        </section>
        
        <section className="nav-group cart-section">
            <Link to="/Cart" className="cart-link">
    
                <div className="cart-icon-wrapper">
                <span className="cart-count">{JSON.stringify(cartCount)|| 0}</span>

                <ShoppingCartOutlinedIcon className="cart-icon" />
                </div>

                <h5>Cart</h5>

            </Link>
        </section>
        
    </nav>

  )
  

}

export default NavBar;
