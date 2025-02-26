import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const AllCraft = () => {
  const artCraft = useLoaderData();
  console.log(artCraft);

  return (
    <div className="my-24">
      <div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          className="overflow-x-auto  shadow-lg"
        >
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th> Item Name</th>
                <th>Sub category</th>
                <th>Customization</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {artCraft.map((craftItem, idx) => (
                <tr key={craftItem._id}>
                  <th>{idx + 1}</th>
                  <td>{craftItem?.itemName}</td>
                  <td>{craftItem?.subcategoryName}</td>
                  <td>{craftItem?.customization}</td>
                  <td>
                    <Link
                      to={`/categoryDetails/${craftItem._id}`}
                      className="btn text-white bg-green-600 font-bold text-sm md:text-xl lg:text-2xl"
                    >
                      View details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCraft;
