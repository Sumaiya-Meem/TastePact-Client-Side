import useFood from "../../Hooks/useFood";
import Loading from "../Loading/Loading";

const AvailableFood = () => {
    const { isLoading, error, data } = useFood()

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)
    return (
        <div>
            <h1>Total Food:{data.length} </h1>
        </div>
    );
};

export default AvailableFood;