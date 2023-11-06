import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Single Food</h1>
        </div>
    );
};

export default SingleFood;