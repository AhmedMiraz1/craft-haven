import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";
import { useState } from "react";

const MyList = () => {
  const loadedCraftCards = useLoaderData();
  const [craftCards, setCraftCards] = useState(loadedCraftCards);

  return (
    <div className="my-24">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-green-800">
        {" "}
        My Art & Craft List{" "}
      </h1>
      <p className="text-center font-medium text-lg md:text-xl text-green-300">
        Unleash your creativity with our curated Art & Craft List, brimming with
        tools and inspiration to ignite your imagination and bring your visions
        to life. From paints to papercrafts, discover everything you need to
        craft your next masterpiece.
      </p>

      <details className="dropdown ">
        <summary className="m-1 btn bg-green-600 text-white font-bold ">
          Filter
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Yes</a>
          </li>
          <li>
            <a>No</a>
          </li>
        </ul>
      </details>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2  gap-6">
        {craftCards?.map((craftCard) => (
          <CraftCard
            key={craftCard._id}
            craftCard={craftCard}
            craftCards={craftCards}
            setCraftCards={setCraftCards}
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
