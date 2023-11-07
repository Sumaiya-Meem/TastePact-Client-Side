import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>{data.foodName}</h1>
        </div>
    );
};

export default UpdateFood;