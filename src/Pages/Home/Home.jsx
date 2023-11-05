

import useFood from "../../Hooks/useFood";
import Banner from "../../components/Banner/Banner";
import Loading from "../Loading/Loading";

const Home = () => {
    const { isLoading, error, data } = useFood()

    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <div className="my-20">
                <div className="flex justify-center items-center gap-2">
                    <div className="h-12 w-1 bg-amber-400"></div>
                    <h1 className="text-3xl font-semibold text-[#5346b4]">Featured Food</h1>
                </div>
            </div>

            <p>data:{data.length}</p>
        </div>
    );
};

export default Home;