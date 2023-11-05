import Lottie from "lottie-react";
import { Button } from 'flowbite-react';
import errorAnimation from "../../assets/animation/Animation - 1699182655469.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <Lottie animationData={errorAnimation} loop={true} />
            <Link to="/">
            <Button color="success">Go Back Home</Button>
            </Link>
           
        </div>
    );
};

export default ErrorPage;