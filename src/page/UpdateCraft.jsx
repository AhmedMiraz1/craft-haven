import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const updateCraft =useLoaderData()
    const {_id, image, itemName, subcategoryName, price, shortDescription, rating, customization, processingTime, stockStatus}= updateCraft

    const handelUpdateArtAndCraft = event => {
        event.preventDefault()
      

        const form = event.target;
       
        const image = form.image.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        // const userEmail = form.userEmail.value;
        // const userName = form.userName.value;
        event.target.reset()
        const UpdatedArtAndCraft = {image, itemName, subcategoryName, price, shortDescription, rating, customization, processingTime, stockStatus};
        console.log(UpdatedArtAndCraft);

        fetch(`https://art-craft-server-sable.vercel.app/artCraft/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            }, 
            body: JSON.stringify(UpdatedArtAndCraft)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'Item updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div className="my-24 p-8 bg-[#F4F3F0] rounded-lg">

        <h2 className="text-center  my-6 text-2xl md:text-3xl lg:text-4xl font-bold text-green-500">Update Art &Craft</h2>
        <p className=" text-lg md:text-xl font-medium text-center mb-12 text-green-500">A creative haven where imagination thrives, offering a diverse realm of expression through skilled hands and boundless innovation.</p>
     <form onSubmit={handelUpdateArtAndCraft} >

     <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            Image .
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="image"
            type="text"
            defaultValue={image}
            placeholder="Enter  craft image URL"
          />
        </div>
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            {" "}
            Item_Name .{" "}
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="itemName"
            type="text"
            defaultValue={itemName}
            placeholder="Enter craft name"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            Subcategory_Name .
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="subcategoryName"
            type="text"
            defaultValue={subcategoryName}
            placeholder="Enter craft subcategory_Name"
          />
        </div>
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            {" "}
            Price .{" "}
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="price"
            type="text"
            defaultValue={price}
            placeholder="Enter craft Price"
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
          Short description.
        </p>
        <input
          className="w-full p-3 rounded-md"
          name="shortDescription"
          type="text"
          defaultValue={shortDescription}
          placeholder="Enter craft short description"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            Rating .
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="rating"
            type="text"
            defaultValue={rating}
            placeholder="Enter craft rating"
          />
        </div>
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            {" "}
            Customization .{" "}
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="customization"
            type="text"
            defaultValue={customization}
            placeholder="Enter craft customization"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            Processing_time .
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="processingTime"
            type="text"
            defaultValue={processingTime}
            placeholder="Enter craft processing_time"
          />
        </div>
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            {" "}
            Stock_Status .{" "}
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="stockStatus"
            type="text"
            defaultValue={stockStatus}
            placeholder="Enter craft stock_status"
          />
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 my-4">
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
          User Email .
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="userEmail"
            type="email"
            defaultValue={userEmail}
            placeholder="Enter craft user email"
          />
        </div>
        <div className="w-full">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-amber-600 ">
            {" "}
            User Name .{" "}
          </p>
          <input
            className="w-full p-3 rounded-md"
            name="userName"
            type="text"
            defaultValue={userName}
            placeholder="Enter craft User Name"
          />
        </div>
      </div> */}

      <input className="btn flex mx-auto mt-6 w-full text-xl md:text-2xl bg-green-600 text-white " type="submit" value="Update" />
     </form>
    </div>
    );
};

export default UpdateCraft;