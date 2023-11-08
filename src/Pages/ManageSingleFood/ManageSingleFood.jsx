import { Link, useLoaderData } from "react-router-dom";
import useRequestFood from "../../Hooks/useRequestFood";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Button, Card } from 'flowbite-react';
// import useFood from "../../Hooks/useFood";
// import axios from 'axios';

const ManageSingleFood = () => {
    const { isLoading, error, data } = useRequestFood();
    // console.log(data)
    // const {data: addedFoodData } = useFood();

    const loadedData = useLoaderData()
    // console.log(loadedData)

    const [requestFood, setRequestFood] = useState([]);

    useEffect(() => {

        if (!isLoading && !error && data) {
            const requestedFood = data.filter(food => food._id === loadedData._id);
            setRequestFood(requestedFood);
        }
    }, [isLoading, error, data, loadedData]);


    if (isLoading) return <Loading />;

    if (error) return 'An error has occurred: ' + error.message;

    // console.log(requestFood.foodName)
    // const handleStatusChange = (id) => {
        // const updatedRequestFood = requestFood.map(food => {
        //     if (food._id === id) {
        //         if (food.status === 'available') {
        //             return { ...food, status: 'delivered' }
        //         }
        //     }
        //     return food;
        //  });

        // setRequestFood(updatedRequestFood);
        
        //  console.log(data)
        //  console.log(id)
        // const updateStatus= data.find(food => food._id === id);
        // // console.log(updateStatus)

        // if (updateStatus) {
        //     // console.log(updateStatus)
        //     const {_id, foodName, foodImage, userEmail, userName, requesterEmail, currentTime, location,
        //         date, customerNote, donationMoney,requesterName,requesterImage} = updateStatus || {}

        //         // console.log(_id, foodName, foodImage, userEmail, userName, requesterEmail, currentTime, location,
        //         //     date, customerNote, donationMoney,requesterName,requesterImage,status)

        //         const updateFoodInfo = {
        //             _id, foodName, foodImage, userEmail, userName, requesterEmail, currentTime, location,
        //         date, customerNote, donationMoney,requesterName,requesterImage,status:'delivered'
        //         }
        //         console.log(updateFoodInfo._id)
                

        //     axios.put(`http://localhost:5000/requestFood/${updateFoodInfo._id}`,updateFoodInfo)
        //         .then(res => {
        //             console.log(res.data);
        //         })
                
                
        // }
       
    // };
    // console.log(requestFood)

    return (
        <div>
            {
                requestFood.length > 0 ? requestFood.map(food => <>
                
                    <form action="">
                    <div className="max-w-[600px] mx-auto mt-5">
                        <Card horizontal className="">
                            <h1 className="text-center text-xl font-semibold">Requester Information</h1>
                            <div className="flex gap-2 border-2 ">

                                <div>
                                    <img src={food.requesterImage} alt="" />
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <h2 className="text-xl text-black">
                                            <span className="font-semibold">Name:</span> {food.requesterName}
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 className="text-xl text-black">
                                            <span className="font-semibold">Email:</span>  {food.requesterEmail}
                                        </h2>
                                    </div>
                                    <h2 className="text-xl text-black">
                                        <span className="font-semibold">Request Date:</span>  {food.currentTime}
                                    </h2>
                                </div>
                                <div>

                                </div>

                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-xl font-semibold">Status:</span>
                                 <span>
                                    <Link to={`/status/${food._id}`}>
                                    <Button color="gray" pill>
                                    {food.status}
                                </Button>
                                    </Link>
                                </span>
                            </div>



                        </Card>
                    </div>
                    <Button type="submit" className='text-2xl'>Send</Button>
                    </form>

                </>)
                    : <>
                        <div className="flex justify-center text-red-600">
                            <h1>This food is not requested by anyone!</h1>
                        </div>
                    </>
            }
        </div>
    );
};

export default ManageSingleFood;