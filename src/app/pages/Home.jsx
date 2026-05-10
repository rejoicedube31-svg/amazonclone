import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SubFooter from "../../components/SubFooter"
import img01 from '../../assets/landing/img01.jpg'
import img02 from '../../assets/landing/img02.jpg'
import img03 from '../../assets/landing/img03.jpg'
import img04 from '../../assets/landing/img04.jpg'
import img05 from '../../assets/landing/img05.jpg'
import img06 from '../../assets/landing/img06.jpg'
import img07 from '../../assets/landing/img07.jpg'
import img08 from '../../assets/landing/img08.jpg'
import img09 from '../../assets/landing/img09.jpg'
import img1 from '../../assets/landing/img1.jpg'
import img2 from '../../assets/landing/img2.jpg'
import img3 from '../../assets/landing/img3.jpg'
import img4 from '../../assets/landing/img4.jpg'
import img17 from '../../assets/landing/img17.jpg'
import img18 from '../../assets/landing/img18.jpg'
import img19 from '../../assets/landing/img19.jpg'
import img20 from '../../assets/landing/img20.jpg'
import img21 from '../../assets/landing/img21.jpg'
import img22 from '../../assets/landing/img22.jpg'
import img23 from '../../assets/landing/img23.jpg'
import ItemGroup from "../../components/ItemGroup";
import ItemBarGroup from "../../components/ItemBarGroup";
import SingleItem from "../../components/SingleItem";
import SubNav from "../../components/SubNav";
import banner from '../../assets/landing/banner.jpg';

const Home = () => {
  return (
    <>
        <div id="top"></div>

        <NavBar />

        <SubNav />

          <section className="banner">
              <img src={banner} alt="banner" />
          </section>

          <div className="product-row">
              <div className="single-item-row">

                <SingleItem
                  title="Get your game on"
                  image={img01}
                  link="Shop gaming"
                />
              </div>
                
              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals under $50"
                  images={[img1, img2, img3, img05]}
                  subtitle="Kitchen & Dining"
                  link="Shop the latest from Home"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="Find gifts for Mom"
                  images={[img06, img07, img08, img09]}
                  subtitle="Gift Item"
                  link="Shop Mother's Day Gifts"
                />

              </div>

          </div>

          <div className="product-row">

              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>
                
              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals under $50"
                  images={[img1, img2, img3, img05]}
                  subtitle="Kitchen & Dining"
                  link="Shop the latest from Home"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="Find gifts for Mom"
                  images={[img06, img07, img08, img09]}
                  subtitle="Gift Item"
                  link="Shop Mother's Day Gifts"
                />

              </div>

          </div>

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <div className="product-row">

              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>
                
              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals under $50"
                  images={[img1, img2, img3, img05]}
                  subtitle="Kitchen & Dining"
                  link="Shop the latest from Home"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="Find gifts for Mom"
                  images={[img06, img07, img08, img09]}
                  subtitle="Gift Item"
                  link="Shop Mother's Day Gifts"
                />

              </div>

          </div>

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <div className="product-row">

              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>
                
              <div className="itemGroup-card">
                <ItemGroup
                  title="Shop Fashion for less"
                  images={[img02,img03,img04,img02]}
                  subtitle="Under $50"
                  link="See all deals"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals under $50"
                  images={[img1, img2, img3, img05]}
                  subtitle="Kitchen & Dining"
                  link="Shop the latest from Home"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="Find gifts for Mom"
                  images={[img06, img07, img08, img09]}
                  subtitle="Gift Item"
                  link="Shop Mother's Day Gifts"
                />

              </div>

          </div>

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

        


        
        <Footer/>
        <SubFooter />

    </>
    )
}

export default Home;