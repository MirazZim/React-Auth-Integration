import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const Name = e.target.name.value;

        console.log(Name,email,password )

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register !</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form onSubmit={handleRegister} className="card-body">


                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />

                        </div>
                        
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            

                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <p>Already have an Account? Please <Link to ="/login"><a href="#" className="text-xs text-blue-300 label-text-alt link link-hover">Log In.</a></Link> </p>

                    </form>

                
                </div>
            </div>
        </div>
    );
};

export default Register;