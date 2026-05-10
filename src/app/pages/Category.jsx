import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SubFooter from "../../components/SubFooter"
import Item from "../../components/Item";
import ItemGroup from "../../components/ItemGroup";
import img02 from '../../assets/landing/img02.jpg'

const Category = () => {
  
  const products = [
  {
    id: 1,
    title: "Jeans",
    price: 1200,
    sales: 250,
    rating: 4.6,
    image: "../../assets/landing/img02"
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: 650,
    sales: 180,
    rating: 4.4,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    price: 1500,
    sales: 320,
    rating: 4.8,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 2200,
    sales: 140,
    rating: 4.5,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 900,
    sales: 410,
    rating: 4.7,
    image: "https://via.placeholder.com/150"
  }
];
  
  return (
        <>
            <NavBar />

            <aside>
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