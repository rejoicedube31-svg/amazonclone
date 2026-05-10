import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SubFooter from "../../components/SubFooter"
import Item from "../../components/Item";
import ItemGroup from "../../components/ItemGroup";
import img02 from '../../assets/landing/img02.jpg'
import img1 from '../../assets/landing/img1.jpg'
import img08 from '../../assets/landing/img08.jpg'
import img09 from '../../assets/landing/img09.jpg'
import img17 from '../../assets/landing/img17.jpg'

const Category = () => {
  
  const products = [
  {
    id: 1,
    title: "Jeans",
    price: 700,
    sales: 250,
    rating: 4.6,
    image: img02
  },
  {
    id: 2,
    title: "Pot",
    price: 300,
    sales: 180,
    rating: 4.4,
    image: img1
  },
  {
    id: 3,
    title: "Jewelry",
    price: 2500,
    sales: 320,
    rating: 4.8,
    image: img08
  },
  {
    id: 4,
    title: "Clutch bag",
    price: 1000,
    sales: 140,
    rating: 4.5,
    image: img09
  },
  {
    id: 5,
    title: "Crocs",
    price: 500,
    sales: 410,
    rating: 4.7,
    image: img17
  }
];
  
  return (
        <>
            <NavBar />

            <aside id="aside">
              <section>
                <h1>Category</h1>

                {products.map((product) => (
                  <Item
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    sales={product.sales}
                    rating={product.rating}
                    image={product.image}
                  />
                ))}

              </section>
            </aside>
            
            <Footer />
        </>
     
   
  )
}

export default Category;