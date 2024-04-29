import { useLoaderData } from "react-router-dom";
import CraftCard from "../components/CraftCard";


const MyList = () => {
    const craftCards = useLoaderData()
    return (
        <div className="my-24">
            <h1> My Art & Craft List : {craftCards.length}</h1>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2  gap-6">
                {
                    craftCards?.map( craftCard => <CraftCard key={craftCard._id} craftCard={craftCard}/>)
                }
            </div>
        </div>
    );
};

export default MyList;