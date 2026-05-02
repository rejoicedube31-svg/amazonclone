import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
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


const Home = () => {
  return (
    <>
        <NavBar />

          <section className="banner">
              <img src='null' alt="banner" />
          </section>

          <ItemGroup title="New home arrivals" images={[img1, img2, img3, img4]} link="test" />
          {/* <ItemGroup title="" images="" link="" /> */}
          {/* <ItemGroup title="" images="" link="" /> */}
          {/* <ItemGroup title="" images="" link="" /> */}
          
          <ItemBarGroup title="Best Sellers in Clothing, Shoes & Jewelry" images={[img17, img18, img19, img20, img21, img22, img23]} />
          {/* <ItemBarGroup title="" images="" /> */}

          {/* <ItemGroup title="" images="" link="" /> */}
          {/* <ItemGroup title="" images="" link="" /> */}
          {/* <ItemGroup title="" images="" link="" /> */}
          {/* <ItemGroup title="" images="" link="" /> */}


        
        <Footer/>
    </>
    )
}

export default Home;