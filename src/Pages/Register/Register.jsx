import Lottie from "lottie-react";
import { Button, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/animation/Animation - 1699167417687.json"
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {
    const { createNewUser,userLogOut } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.value;
        // const userInfo = {
        //     name,email, password,image
        // }
        // console.log(userInfo)

        setRegisterError('');
        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/.test(password)) {
            setRegisterError('Password should be at least six characters, one uppercase letter and one special character');
            return;
        }
        createNewUser(email, password)
        .then(res => {
            console.log(res.user)
            // const user={email}
                updateProfile(res.user, {
                displayName: name,
                photoURL: image, 
               })
               .then(() => {
                Swal.fire(
                    'Successfully Register',
                    'success'
                );
                
                userLogOut()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            })
            .catch(error => {
                console.log(error.message);
            });
        })
        

    }
    return (
        <div>
           <div className="flex gap-2 items-center my-5 ">
            <div className="flex-1 ">
                <form className="flex max-w-md flex-col gap-4 h-[520px] rounded-md p-4 shadow-lg" onSubmit={handleRegister}>
                    <h1 className='text-3xl font-semibold text-center text-[#0984e3]'>Register</h1>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="" value="Your Name" />
                        </div>
                        <TextInput name='name' type="text" placeholder="name" required />
                    </div>
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" name='email' type="email" placeholder="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" name='password' placeholder="password" type="password" required />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="" value="Image" />
                        </div>
                        <TextInput name='image' type="text" placeholder="photo" required />
                    </div>
                    <div>
                                    {
                                        registerError && <p className="text-red-500">{registerError}</p>
                                    }
                                </div>
                    <div>
                        <p>Already have an account ?
                            <span className="text-[#0984e3] ml-3"><Link to='/login'>Login</Link></span>
                        </p>
                    </div>

                    <Button type="submit">Register</Button>
                   
                </form>

            </div>
            {/* left side */}
            <div className="flex-1">
                <Lottie className='h-[450px]' animationData={registerAnimation} loop={true} />
            </div>
        </div>
        </div>
    );
};

export default Register;