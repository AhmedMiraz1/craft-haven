import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItem from "../components/CraftItem";
import CraftMedia from "../components/CraftMedia";



const Home = () => {

    const craftItems = useLoaderData()
    return (
        <div>

            <Banner/>


            <div className="text-center">
                <h1 className="mt-20 text-red-300 text-2xl md:text-3x lg:text-4xl font-bold ">Craft Items </h1>
                <p className="mt-8 text-lg md:text-xl text-red-300"> Craft items encompass a wide range of handmade goods, from intricately designed jewelry to carefully sculpted pottery. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                {
                    craftItems?.map(craft => <CraftItem key={craft._id} craft={craft}/>)
                }
            </div>


            <div className="my-24">

                <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-red-400"> Where Creativity and Community Collide</h1>
                <p className="my-6 text-center font-medium text-lg md:text-xl  text-red-400">Join our vibrant Art & CraftHaven community, where inspiration flows and imaginations soar. Dive into a world of endless possibilities, connect with fellow artisans, and embark on a journey of artistic exploration.</p>
                <CraftMedia/>
            </div>
        </div>
    );
};

export default Home;











