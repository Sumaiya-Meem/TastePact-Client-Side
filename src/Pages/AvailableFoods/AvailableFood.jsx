import { useState } from 'react';
import useFood from "../../Hooks/useFood";
import Loading from "../Loading/Loading";
import FoodItem from "../../components/FoodItem/FoodItem";
import { TextInput } from 'flowbite-react';
import { BsSearch, BsCalendarDate } from 'react-icons/bs';
import { Button } from 'flowbite-react';

const AvailableFood = () => {
    const { isLoading, error, data } = useFood();
    const [searchFood, setSearchFood] = useState('');
    const [sortedFood, setSortedFood] = useState([]);

    if (isLoading) return <Loading />;

    if (error) return 'An error has occurred: ' + error.message;

    const searchedData = data.filter(food => food.foodName.toLowerCase().includes(searchFood.toLowerCase()));


    const sortFoodByDate = () => {
        const sortedByDate = [...searchedData].sort((first, second) => {
            return new Date(first.date) - new Date(second.date);
        });
        setSortedFood(sortedByDate);
    };

    return (
        <div>
            <div className="mt-20 flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-12 w-1 bg-amber-400"></div>
                    <h1 className="text-3xl font-semibold text-[#5346b4]">{searchedData.length} Foods Are Available</h1>
                </div>

                <div className="max-w-md">
                    <TextInput id="email4" type="text" icon={BsSearch} placeholder="search food name" value={searchFood} onChange={(e) => setSearchFood(e.target.value)} />
                </div>
            </div>

            <div className="my-5">
                <Button onClick={sortFoodByDate}>
                    <BsCalendarDate className="mr-2 h-5 w-5" />
                    Sort By Expired Date
                </Button>
            </div>
          {/* show food */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {sortedFood.length > 0 ? sortedFood.map(food => <FoodItem key={food._id} data={food} />) : searchedData.map(food => <FoodItem key={food._id} data={food} />)}
            </div>
        </div>
    );
};

export default AvailableFood;
