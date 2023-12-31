
import { Card } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { Badge } from 'flowbite-react';
import { MdStreetview } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const FoodItem = ({ data }) => {


    const goTo =useNavigate()
    // eslint-disable-next-line react/prop-types
    const { _id,foodImage, foodName, userName, userImage, quantity, location, date, note } = data;
    // console.log(_id)

    return (
        <div >
            <Card className='h-[650px]'>
                <img src={foodImage} alt="" className='w-full h-[200px] rounded-lg' />
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Food Name: {foodName} </h5>
                {/* donar info */}

                <Avatar img={userImage} rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div className='flex flex-col'> <p>Donar Name</p>
                            <p className='ml-5 text-[#6f60e2]'>{userName}</p>
                        </div>

                    </div>
                </Avatar>

                <p> <span className="font-semibold text-black ">Quantity:</span> {quantity} person</p>
                <p><span className="font-semibold text-black ">Expired Date:</span>  {date}</p>
                <p><span className="font-semibold text-black ">Pickup Location:</span>  {location}</p>
                <p><span className="font-semibold text-black ">About this Food: </span> {note.length > 200 ? `${note.slice(0, 200)}...` : note}</p>
                <div className='w-[100px] mx-auto '>


                <Link to={`/food/${_id}`}>
                <Badge  icon={MdStreetview} className='bg-[#439e8c] text-white'><p className=''>View Details</p>
                        </Badge></Link>
                        {/* <button onClick={()=>goTo(`/singleFood/${_id}`)} className='bg-[#439e8c] text-white'>View Details</button> */}

                </div>
            </Card>

        </div>
    );
};

export default FoodItem;