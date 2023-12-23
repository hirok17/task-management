import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {FaGoogle} from "react-icons/fa6";

const SignUp = () => {
    const {createUser, googleSignUp}=useContext(AuthContext);
    const navigate =useNavigate();
    const heandelSignup=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;

        const user={name, email, photo, password};
        console.log(user);
        createUser(email, password)
        .then(result=>{
            const signInuser =result.user;
            console.log(signInuser);

            updateProfile(result.user, {
                displayName:name,
                photoURL:photo

            })
            .then(()=>{
                console.log('profile update');
            })
            .catch(error=>{
                console.log(error);
            })
            toast.success('sign Up success');
             navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const googlelogin=()=>{
        googleSignUp()
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate('/');
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="pb-5">
                    <div className="text-center mb-5 pt-5">
                        <h1 className="text-3xl font-bold">Sign Up!</h1>
                        </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={heandelSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                 <input className="btn btn-primary" type="submit" value="Sign up" />
                                
                            </div>
                        </form>
                        <div className="text-center space-y-3">
                            <p className="text-lg">Or Continue with</p>
                            <i onClick={googlelogin} className="flex justify-center cursor-pointer"><FaGoogle className="bg-[#140A44] text-white rounded-full p-4 w-16 h-16 hover:bg-[#EA4335]"></FaGoogle></i>
                        </div>
                        <p className="text-center pb-8 mt-3">Already have an account? <Link className="text-[#D44A64]" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;