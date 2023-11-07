import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useLoaderData} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    
    const data = useLoaderData()
    console.log(data)
    
    const[note,setNote]=useState(data.note)
    // console.log(note)
   

    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target


        const updateFoodInfo = {
            foodName: form.name.value || "Not-Given",
            foodImage: form.image.value || "Not-Given",
            quantity: form.quantity.value || "Not-Given",
            location: form.location.value || "Not-Given",
            date: form.date.value || "Not-Given",
            note,
        }
        console.log(updateFoodInfo)

    //    axios.put()
    }

    return (
        <div className="my-10 p-4">
            <form className="flex flex-col gap-4" onSubmit={handleUpdateFood}>
                {/* 1st row */}
                <div className='flex gap-2'>
                    <div className='flex-1 '>
                        <div className="mb-2 block">
                            <Label value="Name" />
                        </div>
                        <TextInput name='name' defaultValue={data.foodName} type="text" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Image" />
                        </div>
                        <TextInput name='image' defaultValue={data.foodImage} type="text" required />
                    </div>
                </div>
                {/* 2nd row */}
                <div className='flex gap-2'>
                    <div className='flex-1 '>
                        <div className="mb-2 block">
                            <Label value="Quantity" />
                        </div>
                        <TextInput name='quantity' defaultValue={data.quantity} type="number" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="PickUp Location" />
                        </div>
                        <TextInput name='location' defaultValue={data.location} type="text" required />
                    </div>
                </div>
                {/* 3rd row */}
                <div className='flex gap-2'>
                    <div className='w-[50%]'>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Expired Date" />
                        </div>
                        <TextInput name='date' defaultValue={data.date} type="date" required />
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex flex-col">
                    <div >
                        <Label htmlFor="comment" value="About this food" />
                    </div>
                    <Textarea className="w-[50%]" id="comment" defaultValue={data.note} 
                    onChange={(e) => setNote(e.target.value)} 
                    placeholder="Write something about this food..." required rows={4} />

                </div>
                <Button type="submit" className='text-2xl'>Update Food</Button>
            </form>

        </div>
    );
};

export default UpdateFood;