import { useEffect, useState } from 'react';
import useFood from "../../Hooks/useFood";
import Loading from "../Loading/Loading";
import { TextInput } from 'flowbite-react';
import { BsSearch, BsCalendarDate } from 'react-icons/bs';
import { Button } from 'flowbite-react';
import AvailableFoodCard from './AvailableFoodCard';
// import { useLoaderData } from 'react-router-dom';

const AvailableFood = () => {
    const { isLoading, error, data } = useFood();

    // const data =useLoaderData()
    const [searchFood, setSearchFood] = useState('');
    const [sortedFood, setSortedFood] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        document.title = 'HarvestSwap | Available Foods';
    }, []);

    if (isLoading) return <Loading />;

    if (error) return 'An error has occurred: ' + error.message;

    const searchedData = data.filter(food => food.foodName.toLowerCase().includes(searchFood.toLowerCase()));

    const sortFoodByDate = () => {
        const sortedByDate = [...searchedData].sort((first, second) => {
            return new Date(first.date) - new Date(second.date);
        });
        setSortedFood(sortedByDate);
        setIsSorted(true);
    };

    const handleSearch = () => {
        setIsSearch(true);
        setIsSorted(false);
    };

    const displayedFoods = isSorted ? sortedFood : (isSearch ? searchedData : data);

    return (
        <div>
            <div className="mt-20 flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-12 w-1 bg-amber-400"></div>
                    <h1 className="text-3xl font-semibold text-[#5346b4]">
                        {displayedFoods.length} Foods Are Available
                    </h1>
                </div>
                <div className="max-w-md">
                    <TextInput id="email4" type="text" onClick={handleSearch} icon={BsSearch} placeholder="search food name" value={searchFood} onChange={(e) => setSearchFood(e.target.value)} />
                </div>
            </div>
            <div className="my-5">
                <Button onClick={isSorted ? handleSearch : sortFoodByDate}>
                    {isSorted ? <BsSearch className="mr-2 h-5 w-5" /> : <BsCalendarDate className="mr-2 h-5 w-5" />}
                    {isSorted ? 'Show Searched Foods' : 'Sort By Expired Date'}
                </Button>
            </div>
            {/* Show food */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {displayedFoods.map(food => <AvailableFoodCard key={food._id} data={food}></AvailableFoodCard>)}
            </div>
        </div>
    );
};

export default AvailableFood;
