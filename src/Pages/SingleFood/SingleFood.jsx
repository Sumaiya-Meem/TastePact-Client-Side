import { useLoaderData } from "react-router-dom";
import { Avatar } from 'flowbite-react';
import { Card } from 'flowbite-react';
// import Image from 'next/image';

const SingleFood = () => {
    const data = useLoaderData()
    // console.log(data)
    const { userImage, userName,foodImage,foodName ,location} = data || "Not-Given"
    // console.log(userName,userImage)
    return (
        <div className="max-w-[700px] mx-auto border-2 border-red-500">

            <div className="flex gap-2  shadow-lg">
                <div className="flex-1 flex flex-col items-center justify-center border-2 border-red-400 p-2">
                    <h1 className="font-semibold text-center mb-4 text-[#3e9785] text-2xl">Donor Information</h1>
                    
                        <div className="space-y-1 font-medium ">
                            <div className=''> 
                            <p>Donor Name:
                            <span className='ml-2 capitalize text-[#6f60e2]'>{userName}</span></p>
                            </div>
                            <div className=''> 
                                 <p>Pickup Location:
                                <span className='ml-2 capitalize text-[#6f60e2]'>{location}</span></p>
                            </div>
                        </div>
                </div>
                <div className="flex-1 border-2 border-yellow-400">
                    

    <Card className="">
        <img src={foodImage} alt="" className="h-[100px] rounded-lg"/>
      <h5 className="text-xl font-bold  text-gray-900 ">
        {foodName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  

                </div>

            </div>


        </div>
    );
};

export default SingleFood;