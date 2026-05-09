import MenuIcon from '@mui/icons-material/Menu';

const SubNav = () => {
    return (
       
            <div className="subnav-bar">
                <ul className="sub-nav">
                    <li className="all-menu">
                        <MenuIcon className="menu-icon" />
                        <a href="#">All</a>
                    </li>
                    <li><a href="#">Today's Deals</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Registry</a></li>
                    <li><a href="#">Prime Video</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
            </div>
    )
}

export default SubNav;