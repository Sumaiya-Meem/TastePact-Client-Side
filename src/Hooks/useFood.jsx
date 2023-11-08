import { useQuery } from "@tanstack/react-query";
const useFood = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['addedFood'],
        queryFn: async () =>{
        //  const food= await fetch('http://localhost:5000/addedFoods');
         const food= await fetch('http://localhost:5000/addedFoods');
         return await food.json();
        }
    
      });
      return { isLoading, error, data }
};

export default useFood;
