
import { Card } from 'flowbite-react';


const FoodItem = ({data}) => {

   const {foodImage,foodName,quantity} =data;
   
    return (
        <div >
    <Card
    >
    <img src={foodImage} alt="" className='w-full h-[200px]'/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {foodName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {quantity}
      </p>
    </Card>
 
        </div>
    );
};

export default FoodItem;