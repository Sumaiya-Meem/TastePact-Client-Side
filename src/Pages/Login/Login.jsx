import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FcGoogle } from 'react-icons/fc';
import Lottie from 'lottie-react';
import logInAnimation from "../../assets/animation/Animation - 1699164326146.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    //   console.log(location)
    const navigate = useNavigate();

    const { userLogin, googleSignIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const userInfo = {
        //     email, password
        // }
        // console.log(userInfo)
        setLoginError('');

        userLogin(email, password)
            .then(res => {
                // console.log(res.user)

                const loggedInUser = { email }
                // 
                // access token
                axios.post('http://localhost:5000/jwt', loggedInUser, { withCredentials: true })
                    .then(res => { 
                        console.log(res.data) 
                        if (res.data.success) {
                            Swal.fire(
                                'Successfully Login',
                                'success'
                            )
                            navigate(location?.state ? location.state : '/');
                        }
                    
                    })
                

            })
            .catch(error => {
                setLoginError(error.message);
            }
        );


    }
    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                res.user
                
                const loggedInUser = (res.user.email)
                console.log(loggedInUser)
                // 
                // access token
                axios.post('http://localhost:5000/jwt', loggedInUser, { withCredentials: true })
                    .then(res => { 
                        console.log(res.data) 
                        if (res.data.success) {
                            Swal.fire(
                                'Successfully Login',
                                'success'
                            )
                            navigate(location?.state ? location.state : '/');
                        }
                    
                    })
                

            })
        
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex flex-col md:flex-row gap-2 items-center my-5 ">
            <div className="flex-1 ">
                <form className="flex max-w-md flex-col gap-4 h-[480px] rounded-md p-4 shadow-lg" onSubmit={handleLogin}>
                    <h1 className='text-3xl font-semibold text-center text-[#0984e3]'>Login</h1>
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
                        <TextInput id="password1" name='password' type="password" required />
                    </div>
                    <div>
                        {
                            loginError && <p className="text-red-300">{loginError}</p>
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>


                    <Button type="submit">Submit</Button>
                    <div>
                        <p className="text-center"> Or Sign In With </p>
                        <div className="flex items-center justify-center mt-3">
                            <span className="text-2xl mr-3"><FcGoogle></FcGoogle></span>
                            <span className="text-center text-blue-500 text-lg underline cursor-pointer" onClick={handleGoogle}> Google</span>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p>Create an account
                            <span className="text-[#0984e3] ml-3 font-semibold"><Link to='/register'>Register</Link></span>
                        </p>
                    </div>
                </form>

            </div>
            {/* left side */}
            <div className="flex-1">
                <Lottie className='h-[400px]' animationData={logInAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Login;