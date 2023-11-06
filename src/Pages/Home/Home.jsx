import { Button } from 'flowbite-react';
import FoodItem from "../../components/FoodItem/FoodItem"
import useFood from "../../Hooks/useFood";
import Banner from "../../components/Banner/Banner";
import Loading from "../Loading/Loading";
import { Link} from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        document.title = 'HarvestSwap | Home';
      }, []);

    const { isLoading, error, data } = useFood()

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)

    const sortedFoodData = data.slice().sort((first, sec) => sec.quantity - first.quantity);

    const featuredFood = sortedFoodData .slice(0, 8);

    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
                <div className="flex justify-center items-center gap-2">
                    <div className="h-12 w-1 bg-amber-400"></div>
                    <h1 className="text-3xl font-semibold text-[#5346b4]">Featured Food</h1>
                </div>
            </div>

            {/* show food according to quantity */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    featuredFood .length > 0 ?
                        (featuredFood .map((data) => <FoodItem key={data._id} data={data}></FoodItem>))

                        :
                        <h1 className="text-2xl flex justify-center">No food found</h1>
                }

 
            </div>
            <div className='w-[100px] mx-auto my-5'>
                    <Link to="/availableFood"><Button color="warning">Show All</Button></Link>
                </div>
        </div>
    );
};

export default Home;