import React from 'react'
import "./SignupForm.css"
import useForm  from "./useForm"

function SignupForm() {

    const { handleChange, user, handleSubmit  } = useForm();
    console.log(user)
    return (
        
        <div className="split-screen"> 
            <div className="left"> 
                <section className="split">
                    <span className="logo-title">
                        <h3 className="logo-signup">Logoname</h3>
                    </span>
                    <span className="content-center">
                        <h1 className="signup-header1">Lorem Ipsum is simply dummy text of the printing</h1>
                        <p className="para-text"> Welcome  Please Sign Up to your account. </p>
                    </span>
                </section>
            </div>

            <div className="right">
                
            <form className="form-signup" onSubmit={handleSubmit}>
                <section className="r-split">
                    <h2 className="signup-header2">Sign Up</h2>
                    <div className="login-container">
                        <button className="google" >
                            <span className="google-space">
                                <a className="signup-text" href="#"><i class="fab fa-google"></i>Sign up with Google</a>
                            </span>
                        </button>
                    </div>
                </section>
                <div className="input-container">
                    <label className="signup-label" for="username"  >Username</label>
                    <input type="text" name="name"  id="name" value={user.name} onChange={handleChange}></input>
                </div>
                
                <div className="input-container">
                    <label className="signup-label" for="email"  >Email Address</label>
                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange}></input>
                </div>
             
                <div className="input-container password">
                    <label className="signup-label" for="password"  >password</label>
                    <input type="password" name="password" id="password" placeholder="6+ charaters" value={user.password} onChange={handleChange}></input>
                    
                </div>
               
                <button class="signup-btn" type="submit" onClick={handleSubmit} >Create an Account</button>
                <div class="legal">
                    <label className="signup-label" >
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                        I agree to accept to the <a class="terms-legal" href="#">Terms of Service</a> &amp; <a href="#">Privacy Policy</a> 
                    </label>
                    <p className="login">Alredy have an account? <a href="#"><strong>Login</strong></a></p>
                </div>
            </form>
            </div>
        </div>
           
            
                 
             
    )
}

export default SignupForm
