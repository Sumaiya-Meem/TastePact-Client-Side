import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
// import useRequestFood from "../../Hooks/useRequestFood";
// import Loading from "../Loading/Loading";
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { CiCircleRemove } from 'react-icons/ci';
import Swal from "sweetalert2";
import axios from 'axios';


const RequestFood = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    // const { isLoading, error, data } = useRequestFood();

    const [matchedRequests, setMatchedRequests] = useState([]);

    useEffect(() => {
        document.title = 'HarvestSwap | My Request Food';
        const url = `http://localhost:5000/requestFoods?requesterEmail=${user.email}`;

        axios.get(url,{withCredentials:true})
        .then(res=>{
            setMatchedRequests(res.data)
        })
       

    //     if (!isLoading && !error && data && user) {
    //         const requestUser = data.filter(request => request.requesterEmail === user.email);
    //         setMatchedRequests(requestUser);
    //     }
    }, [user.email]);

    // if (isLoading) return <Loading />;

    // if (error) return 'An error has occurred: ' + error.message;
    const handleDelete = (id) =>{
        console.log('delete',id)
        Swal.fire({
            title: 'Are you sure to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ee5253',
            cancelButtonColor: '#2e86de',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((res)=>{
           if(res.isConfirmed){
            axios.delete(`http://localhost:5000/requestFoods/${id}`)
            .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            const addFoodWithoutDelete =matchedRequests.filter((food)=>food._id!==id) 
                            setMatchedRequests(addFoodWithoutDelete)
                              Swal.fire(
                                'Deleted!',
                                'success'
                              )
                        }
                    })

           }
        })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedRequests && matchedRequests.length > 0 ? (
                matchedRequests.map((request) => (
                    <Card key={request._id} href="#" className="w-full">
                        <h3 className="text-xl">
                            Donar Name: {request.userName}
                        </h3>
                        <h3 className="text-xl"> PickUp Location: {request.location}</h3>
                        <h3 className="text-xl"> Expired Date: {request.date}</h3>
                        <h3 className="text-xl"> Request Date: {request.currentTime}</h3>
                        <h3 className="text-xl"> Donation Amount: {request.donationMoney}</h3>
                        <h3 className="text-xl"> Food Status: {request.status}</h3>
                        {request.status === 'available' ? (
                            <Button outline pill className="w-[30%]" onClick={() => handleDelete(request._id)}>
                                <CiCircleRemove className="h-6 w-6" />
                                Cancel Request

                            </Button>
                        ) :

                            <Button outline pill className="w-[30%]" disabled>
                                <CiCircleRemove className="h-6 w-6" />
                                Cancel Request

                            </Button>

                        }
                    </Card>
                ))
            ) : (
                <p>No  requests found.</p>
            )}

        </div>
    );
};

export default RequestFood;