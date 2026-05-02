import { exp } from "firebase/firestore/pipelines"

const ItemBarGroup = ({ title, images }) => {
    return (
        <>
            <h3>{title}</h3>
            <div className="item-bar-group">
                {
                    images.map((image, index) => (
                        <a href="" key={index}>
                            <img src={image} alt="" />
                        </a>
                    ))
                }
            </div>      
        
        </>
    )
}

export default ItemBarGroup;