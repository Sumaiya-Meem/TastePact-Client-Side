import { useLoaderData } from "react-router-dom";

const UpdateStatus = () => {
    const data = useLoaderData()
    console.log("data:",data)
    return (
        <div>
            <h1>Update Status</h1>
        </div>
    );
};

export default UpdateStatus;