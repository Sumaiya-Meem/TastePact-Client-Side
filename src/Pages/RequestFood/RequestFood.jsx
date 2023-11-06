import { useEffect } from "react";

const RequestFood = () => {

    useEffect(() => {
        document.title = 'HarvestSwap | Request Food';
    }, []);

    return (
        <div>
            <h1>Request Food</h1>
        </div>
    );
};

export default RequestFood;