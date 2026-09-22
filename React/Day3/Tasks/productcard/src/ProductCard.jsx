import "./ProductCard.css"
import Pimage from "./assets/product.jpg"

const ProductCard = () => {
  return (
    <>
    <div className="p-card">
        <img  className="p-image" src={Pimage} alt="p-image"/>
        <h2 className="p-name">I Phone 18 PROMAX </h2>
        <p className="p-prize"> 1,89,999</p>
        <button className="p-btn">Buy Now</button>
    </div>
    </>
  )
}

export default ProductCard