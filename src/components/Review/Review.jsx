import { useEffect, useState } from "react";
import { BiSolidQuoteRight} from 'react-icons/bi';

const Review = () => {
    const [clientReview,setClientReview] =useState([]);

    useEffect(()=>{
        fetch('reviewData.json')
        .then(res=>res.json())
        .then(data=>setClientReview(data))
    },[])
    // console.log(clientReview)

    return (
        <div className="mt-10 px-0 lg:px-8">
            <h1 className="text-center text-3xl font-semibold mb-10"> Clients Says</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shadow-md mx-4">
                {
                    clientReview.map(review => <>
                     <div className="bg-[#d3f3ee] rounded-lg p-2 ">
            <div className='flex gap-3'>
                <img src={review.image} alt=""  className="w-16 h-16 rounded-full"/>
                <div className='flex gap-5'>
                  <span className='text-[#41b497] text-3xl'><BiSolidQuoteRight></BiSolidQuoteRight></span>
                  <div>
                    <p className='text-[#666565]'>{review.comment}</p>
                  </div>
                </div>
            </div>
           <div className='flex justify-end text-[#39a489] font-semibold'> <h4> -{review.name}</h4></div>
            
        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Review;