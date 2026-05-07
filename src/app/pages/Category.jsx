import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Item from "../../components/Item";
import ItemGroup from "../../components/ItemGroup";

const Category = () => {
  
  /*pulls store data from utilities*/
  
  return (
        <>
            <NavBar />

            <aside>
              <section>
                <h1>Category</h1>
                <Item title="Item 3" price={1000} sales={100} rating={4.5}  />
              </section>
            </aside>
            
            <Footer />
        </>
     
   
  )
}

export default Category;