import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const CraftItemDetails = () => {

    const craftItems = useLoaderData()
    const  {image, itemName, subcategoryName, price, shortDescription, rating, customization, processingTime, stockStatus,}= craftItems

    console.log(craftItems);
    return (
        <div className="my-24 ">
        <h1  className="text-center  text-2xl md:text-3xl lg:text-4xl font-bold text-green-500">Craft Item Details  </h1>
        <p className="text-lg md:text-xl font-medium text-center mt-6 mb-12 text-stone-300">Intricate art and craft pieces meticulously crafted with attention to detail, showcasing exquisite craftsmanship and creativity.</p>
        <div className="flex flex-col md:flex-row  w-full gap-6 bg-[#F4F3F0] rounded-lg p-3 md:p-8 ">

            <div className="w-full  "><img className="rounded-xl h-[50vh] w-full" src={image} alt="" /></div>
            <div className="w-full">
             <h2 className="text-xl md:text-2xl lg:text-3xl font-bold ">{subcategoryName}</h2>
             <h3 className="my-6 text-lg md:text-xl lg:text-2xl font-bold">{itemName}</h3>
             <p className="text-lg ">{shortDescription}</p>
             <div className="flex justify-between my-5 text-green-600 text-xl">
                <p> Price :  {price} $</p>
                <p  className="flex  items-center gap-1 "> <FaStar className="text-yellow-500"/> Rating : {rating}</p>
             </div>
             <div className="flex justify-between text-xl text-green-600 ">
                <p> Customization : {customization}</p>
                <p> Time : {processingTime}</p>
               
             </div>
             <p className="mt-5 text-xl text-green-600"> StockStatus : {stockStatus}</p>


            </div>
        </div>
        
    </div>
    );
};

export default CraftItemDetails;