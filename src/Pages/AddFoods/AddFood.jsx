import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddFood = () => {
    const {user} =useContext(AuthContext);
    
  console.log(user.displayName)

    const handleAddFood = e =>{
        e.preventDefault();
        const form=e.target

      const userName =user.displayName;
      const userImage = user.photoURL;
      const userEmail=user.email;

        const addFoodInfo ={
            foodName:form.name.value || "Not-Given",
            foodImage:form.image.value || "Not-Given",
            quantity:form.quantity.value|| "Not-Given",
            location:form.location.value|| "Not-Given",
            date:form.date.value|| "Not-Given",
            note:form.note.value|| "Not-Given",
            userName, userImage,userEmail,
            status:'available',
        }
        console.log(addFoodInfo)
    }


    return (
        <div className="my-10 p-4">
            <form className="flex flex-col gap-4" onSubmit={handleAddFood}>
                {/* 1st row */}
                <div className='flex gap-2'>
                    <div className='flex-1 '>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Name" />
                        </div>
                        <TextInput name='name' type="text" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Image" />
                        </div>
                        <TextInput name='image' type="text" required />
                    </div>
                </div>
                {/* 2nd row */}
                <div className='flex gap-2'>
                    <div className='flex-1 '>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Quantity" />
                        </div>
                        <TextInput name='quantity' type="number" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="PickUp Location" />
                        </div>
                        <TextInput name='location' type="text" required />
                    </div>
                </div>
                {/* 3rd row */}
                <div className='flex gap-2'>
                    <div className='flex-1 '>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Expired Date" />
                        </div>
                        <TextInput name='date' type="date" required />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Note" />
                        </div>
                        <TextInput name='note' type="text" required />
                    </div>
                </div>
                <Button type="submit" className='text-2xl'>Add Food</Button>
            </form>

        </div>
    );
};

export default AddFood;