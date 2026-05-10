const Footer = () => {
    return (
        <footer>
            <section id="top">
                <h4>See personal recommendations</h4>
                <a href="https://www.amazon.com/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex&openid.pape.max_auth_age=0"target="_blank"
                    rel="noopener noreferrer"> <button id="signin-btn">Sign in</button></a>
                <p>New customer? <a href="https://www.amazon.com/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Drhf_sign_in&openid.assoc_handle=usflex"target="_blank">Start here.</a></p>
            </section>
            <section className="back-to-top">
                <a href="#top">
                    Back to top
                </a>
            </section>
                

            <section id="ezansi">
                <ul>
                    <li><h5><strong>Get to Know Us</strong></h5></li>
                    <li><h5>Careers</h5></li>
                    <li><h5>Blog</h5></li>
                    <li><h5>About Amazon</h5></li>
                    <li><h5>Investor Relations</h5></li>
                    <li><h5>Amazon Devices</h5></li>
                    <li><h5>Amazon Science</h5></li>
                </ul>

                <ul>
                    <li><h5><strong>Make Money with Us</strong></h5></li>
                    <li><h5>Sell products on Amazon</h5></li>
                    <li><h5>Sell on Amazon Business</h5></li>
                    <li><h5>Sell apps on Amazon</h5></li>
                    <li><h5>Become an Affiliate</h5></li>
                    <li><h5>Advertise Your Products</h5></li>
                    <li><h5>Self-Publish with Us</h5></li>
                    <li><h5>Host an Amazon Hub</h5></li>
                    <li><h5>›See More Make Money with Us</h5></li>
                </ul>

                <ul>
                    <li><h5><strong>Amazon Payment Products</strong></h5></li>
                    <li><h5>Amazon Business Card</h5></li>
                    <li><h5>Shop with Points</h5></li>
                    <li><h5>Reload Your Balance</h5></li>
                    <li><h5>Amazon Currency Converter</h5></li>
                </ul>

                <ul className="footer-list">
                    <li><h5><strong>Let Us Help You</strong></h5></li>
                    <li><h5>Amazon and COVID-19</h5></li>
                    <li><h5>Your Account</h5></li>
                    <li><h5>Your Orders</h5></li>
                    <li><h5>Shipping Rates & Policies</h5></li>
                    <li><h5>Returns & Replacements</h5></li>
                    <li><h5>Manage Your Content and Devices</h5></li>
                    <li><h5>Help</h5></li>
            </ul>

            </section>
        </footer>
    )
}

export default Footer;