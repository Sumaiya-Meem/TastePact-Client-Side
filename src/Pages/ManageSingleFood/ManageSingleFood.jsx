import { useLoaderData } from "react-router-dom";
import useRequestFood from "../../Hooks/useRequestFood";
import Loading from "../Loading/Loading";

const ManageSingleFood = () => {
    const { isLoading, error, data } = useRequestFood();

    const loadedData =useLoaderData()
    console.log(loadedData)

    if (isLoading) return <Loading />;

    if (error) return 'An error has occurred: ' + error.message;

    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default ManageSingleFood;