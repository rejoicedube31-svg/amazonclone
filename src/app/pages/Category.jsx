import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Item from "../../components/Item";

const Category = () => {
  
  /*pulls store data from utilities*/
  
  return (
        <>
            <NavBar />

            <aside>
              <section>
                <h1>Category</h1>
                <Item />
              </section>
            </aside>
            
            <Footer />
        </>
     
   
  )
}

export default Category;