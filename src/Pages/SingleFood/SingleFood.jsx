import { useLoaderData } from "react-router-dom";
import { Card, Label, TextInput } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useState } from 'react';

const SingleFood = () => {
    const data = useLoaderData()
    // console.log(data)

    const [openModal, setOpenModal] = useState(false);
    const [customerNote, setCustomerNote] = useState('');
    const [donation, setDonation] = useState('');

    const { _id, userName, userEmail, foodImage, foodName, location, quantity, date } = data || "Not-Given"
    // console.log(userName,userImage)
    const getCurrentTime = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return currentTime;
    };

    const currentTime = getCurrentTime(); 


    return (
        <div className="max-w-[700px] mx-auto mt-10 p-2">

            <div className="flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 flex flex-col items-center justify-center border-2  p-2">
                    <h1 className="font-semibold text-center mb-4 text-[#6456d2] text-2xl">Donor Information</h1>

                    <div className="space-y-1 font-medium ">
                        <div className='text-black'>
                            <p>Donor Name:
                                <span className='ml-2 capitalize text-[#6f60e2]'>{userName}</span></p>
                        </div>
                        <div className='text-black'>
                            <p>Pickup Location:
                                <span className='ml-2 capitalize text-[#6f60e2]'>{location}</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 border-2">


                    <Card className="border-0">
                        <img src={foodImage} alt="" className="h-[100px] rounded-lg" />
                        <h5 className="text-xl font-semibold  text-gray-900 ">
                            Food Item: {foodName}
                        </h5>
                        <p className="text-lg   text-gray-900">Quantity: {quantity}</p>
                        <p className="text-lg   text-gray-900">Expired Date: {date}</p>
                        <div>
                            <Button outline pill onClick={() => setOpenModal(true)}>

                                <p className="text-lg ">Request</p>
                                <HiOutlineArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </Card>
                </div>

            </div>

            {/* Modal section*/}
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} >
               
                <Modal.Body>
                    <div className="space-y-2">
                    <div className="mb-2 flex items-center gap-2">
                        <img src={foodImage} alt="" className="h-[150px] w-[70%] mx-auto"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label value="Food No" className="flex-1" />
                        <TextInput type="text" placeholder="Food Name" value={_id} disabled  className="flex-1" />
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Food Item" className="flex-1"/>
                        <TextInput type="text" placeholder="Food Name" value={foodName} disabled className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Donator Name" className="flex-1"/>
                        <TextInput type="text" placeholder="Food Name" value={userName} disabled className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Donator Email" className="flex-1"/>
                        <TextInput type="text" placeholder="Food Name" value={userEmail} disabled className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Donator Email" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={currentTime}  className="flex-1"/>
                </div>

                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Pickup Location" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={location} disabled  className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Expired Date" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={date}  disabled   className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Additional Notes" className="flex-1"/>
                        <TextInput type="text" placeholder="Note" value={customerNote} onChange={(e)=>setCustomerNote(e.target.value)}  className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value=" Donation Money" className="flex-1"/>
                        <TextInput type="text" placeholder="$" value={donation} onChange={(e)=>setDonation(e.target.value)}  className="flex-1"/>
                </div>
                
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Request</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    );
};

export default SingleFood;