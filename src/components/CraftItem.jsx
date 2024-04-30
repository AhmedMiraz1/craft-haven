import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CraftItem = ({craft}) => {

    const {_id,image, itemName,  price,  rating, } = craft
  
  

  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-full md:h-[30vh]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl md:text-2xl text-green-400">{itemName}</h2>
          <div className="flex">
            <p className="text-amber-500 text-lg md:text-xl font-semibold">Price : {price}</p>
            <p className="flex items-center gap-1 text-amber-500 text-lg md:text-xl font-semibold"> Rating : <FaStar className="text-yellow-600"/>{rating}</p>
          </div>
          <div className="card-actions "> 
            <Link to={`/craftItemDetails/${_id}`}>
            <button className="btn bg-green-600 text-white font-bold text-xl">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
