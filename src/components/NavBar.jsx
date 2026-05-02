import { Link } from 'react-router-dom';

const NavBar = () => {
  
    const categoryList = ["All", "Arts & Crafts", "Automotive", "Baby", "Books", "Computers", "Electronics", "Garden & Outdoor", "Grocery", "Health & Personal Care", "Home & Kitchen", "Industrial & Scientific", "Luggage", "Movies & TV", "Music, CDs & Vinyl", "Pet Supplies", "Software", "Sports & Outdoors", "Tools & Home Improvement", "Toys & Games", "Video Games"];

    return (
    <nav className="nav">
        <Link to="/">
            <img src="test" alt="logo" />
        </Link>

        <section className="nav-group">
            <img src="null" alt="location" />
            <p>Deliver to</p>
            <h5>South Africa</h5>
        </section>

        <section className="search">
            <select>
                {
                    categoryList.map((category) => (
                    <option key={category}>{category}</option>
                 ))
                }
            </select>

            <input type="text" placeholder="Search Amazon" />

            <button>
                <img src="test" alt="search" />
            </button>

        </section>
        
        <section className="nav-group">
            <option value="en_US">English - EN</option>
            <option value="es_US">español - ES</option>
            <option value="ar_AE">العربية - AR</option>
            <option value="de_DE">Deutsch - DE</option>
            <option value="he_IL">עברית - HE</option>
            <option value="ko_KR">한국어 - KO</option>
            <option value="pt_BR">português - PT</option>
            <option value="zh_CN">中文 (简体) - ZH</option>
            <option value="zh_TW">中文 (繁體) - ZH</option>
            
        </section>
        
        <section className="nav-group">
            <p>Hello, Sign in</p>
            <h5>Account & Lists</h5>
        </section>

        <section className="nav-group">
            <p>Returns</p>
            <h5>& Orders</h5>
        </section>
    </nav>

  )

}

export default NavBar;