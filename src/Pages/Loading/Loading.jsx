import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/Animation - 1699182557031.json"
const Loading = () => {
    return (
        <div className=" h-[400px] w-[400px] mx-auto">
            <Lottie animationData={loadingAnimation}></Lottie>
        </div>
    );
};

export default Loading;