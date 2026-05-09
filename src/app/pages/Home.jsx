import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import img01 from '../../assets/landing/img01.jpg'
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
                  title="New home arrivals"
                  images={[img1, img2, img3, img4]}
                  link="Shop now"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals"
                  images={[img1, img2, img3, img4]}
                  link="Shop now"
                />

              </div>

              <div className="itemGroup-card">
                <ItemGroup
                  title="New home arrivals"
                  images={[img1, img2, img3, img4]}
                  link="Shop now"
                />

              </div>

          </div>

          <ItemBarGroup
            title="Best Sellers in Clothing, Shoes & Jewelry"
            images={[img17, img18, img19, img20, img21, img22, img23]}
          />

          <div className="product-row">

            {/* future ItemGroups */}

          </div>


        
        <Footer/>
    </>
    )
}

export default Home;