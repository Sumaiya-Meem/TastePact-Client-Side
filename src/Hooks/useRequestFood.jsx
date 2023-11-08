

import { useQuery } from "@tanstack/react-query";
const useRequestFood = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['requestFood'],
        queryFn: async () =>{
         const food= await fetch('https://share-nourishment-server-side.vercel.app/requestFoods');
         return await food.json();
        }
    
      });
      return { isLoading, error, data }
};


export default useRequestFood;