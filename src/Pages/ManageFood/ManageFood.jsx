import { useEffect } from "react";

const ManageFood = () => {
    useEffect(() => {
        document.title = 'HarvestSwap | Manage Food';
    }, []);

    return (
        <div>
           <h1> ManageFood</h1>
        </div>
    );
};

export default ManageFood;