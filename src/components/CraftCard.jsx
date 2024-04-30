import { FaEdit, FaStar } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const CraftCard = ({ craftCard, craftCards, setCraftCards }) => {

  console.log(craftCards);
 

  const {
    _id,
    image,
    itemName,
    subcategoryName,
    price,
    rating,
    customization,
    stockStatus,
  } = craftCard;

  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(`http://localhost:5000/artCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = craftCards.filter((craft) => craft._id !== _id);
              setCraftCards(remaining);
            }
          });
      }
    });
  };
  return (
    <div>


      <div data-aos="zoom-in-down"  data-aos-duration="1000" className="w-full h-full p-4 shadow-2xl rounded-lg flex justify-between gap-5">
        <div>
          <img className="h-full w-full lg:w-60" src={image} alt="" />
        </div>

        <div>
          <div className="mt-6 ">
            <h2 className="my-6 text-lg md:text-xl lg:text-2xl font-bold text-amber-700 ">
              {itemName}
            </h2>
            <h3 className="my-6 text-lg md:text-xl font-bold text-amber-700  ">
              {subcategoryName}
            </h3>
          </div>
          <div className="flex justify-between">
            <p className="text-lg md:text-xl font-bold text-green-500">
              {" "}
              Price :{price} $
            </p>
            <p className="text-lg md:text-xl font-bold text-green-500 flex gap-1 items-center">
              {" "}
              <FaStar className="text-yellow-500" />
              Rating :{rating}
            </p>
          </div>
          <div className=" my-4">
            <p className="text-lg md:text-xl font-bold text-green-500">
              {" "}
              Customization :{customization}{" "}
            </p>
            <p className="text-lg md:text-xl font-bold text-green-500 flex gap-1 items-center">
              {" "}
              Status :{stockStatus}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <Link
            to={`/updateCraft/${_id}`}
            className="text-white btn btn-outline bg-green-500"
          >
            <FaEdit />
          </Link>
          <button onClick={() => handelDelete(_id)}>
            <Link className="text-white btn btn-outline bg-red-500">
              {" "}
              <FaDeleteLeft />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;

CraftCard.propTypes = {
  craftCard: PropTypes.object,
  craftCards: PropTypes.object,
  setCraftCards: PropTypes.func,
};
