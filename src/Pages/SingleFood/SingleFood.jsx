import { useLoaderData } from "react-router-dom";
import { Card, Label, TextInput } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthProvider";
import axios from 'axios';
import Swal from 'sweetalert2';

const SingleFood = () => {
    const { user } = useContext(AuthContext);

    //  console.log(user)

    const data = useLoaderData()
    // console.log(data)

    const [openModal, setOpenModal] = useState(false);
    const [customerNote, setCustomerNote] = useState('');
    const [donationMoney, setDonationMoney] = useState('');

    const { _id, userName, userEmail, foodImage, foodName, location, quantity, date } = data || "Not-Given"
    // console.log(userName,userImage)

    const getCurrentTime = () => {
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${currentDate} ${currentTime}`;
    };

    const currentTime = getCurrentTime();

    const customerEmail = user.email;

    const handleRequestFood = () => {

        const requestFoodInfo = {
            _id, foodName, foodImage, userEmail, userName, customerEmail, currentTime, location,
            date, customerNote, donationMoney
        }
        //  console.log(requestFoodInfo);
        axios.post("http://localhost:5000/requestFood", requestFoodInfo)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Your response is accepted',
                        'success'
                    );

                }
                setOpenModal(false)
                setCustomerNote('');
                setDonationMoney('');

            })

    }


    return (
        <div className="max-w-[700px] mx-auto mt-10 p-2">

            <div className="flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 flex flex-col items-center justify-center border-2  p-2">
                    <h1 className="font-semibold text-center mb-4 text-[#0984e3] text-2xl">Donor Information</h1>

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
                        {/* <div className="mb-2 flex items-center gap-2">
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
                        <Label  value="Donator Email" className="flex-1"/>
                        <TextInput type="text" placeholder="Food Name" value={userEmail} disabled className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Donator Name" className="flex-1"/>
                        <TextInput type="text" placeholder="Food Name" value={userName} disabled className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="User Name" className="flex-1"/>
                        <TextInput type="text" placeholder="User Name" value={user.email} disabled className="flex-1"/>
                </div>

                <div className="mb-2 flex items-center gap-2">
                        <Label  value=" Request Date" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={currentTime} disabled className="flex-1"/>
                </div>

                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Pickup Location" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={location} disabled  className="flex-1"/>
                </div>
                <div className="mb-2 flex items-center gap-2">
                        <Label  value="Expired Date" className="flex-1"/>
                        <TextInput type="text" placeholder="Current Time" value={date}  disabled   className="flex-1"/>
                </div> */}

                        <div className="mb-2 flex items-center gap-2">
                            <Label value="Additional Notes" className="flex-1" />
                            <TextInput type="text" placeholder="Note" value={customerNote} onChange={(e) => setCustomerNote(e.target.value)} className="flex-1" />
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <Label value=" donationMoney Money" className="flex-1" />
                            <TextInput type="text" placeholder="$" value={donationMoney} onChange={(e) => setDonationMoney(e.target.value)} className="flex-1" />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleRequestFood} >Request</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    );
};

export default SingleFood;