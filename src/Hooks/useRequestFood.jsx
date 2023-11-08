

import { useQuery } from "@tanstack/react-query";
const useRequestFood = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['requestFood'],
        queryFn: async () =>{
         const food= await fetch('http://localhost:5000/requestFoods');
         return await food.json();
        }
    
      });
      return { isLoading, error, data }
};


export default useRequestFood;