import {useForm } from "react-hook-form";
import "./form.css";

export default function AdvanceForm(){
    const {register , handleSubmit , formState: {errors}} = useForm();

    function onSubmit(data){
        alert(`Submitted withy email: ${data.email} and Password${data.password}`);

            }       
            
            return (
            <div className="form-main-container">
                <h1 style={{color:"black"}}>
                    hook validation form 
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" 
                    placeholder="Enter email" 
                    {...register("email", {required:"email is required"},
                    
                )}
                    />

                    <input 
                    type="password" 
                    placeholder="Enter your password"
                    {...register("password", {required:"password is required" , 
                    minLength:{
                        value:6,
                        message:"password must be at lesta 6 characters ",
                    },
                    maxLength:{
                        value:15,
                        message:"password must be at most 15 charactes",
                    },
                })}
                    />
                    {errors.password && (
                    <p style={{color:"red"}}>
                        {errors.password.message}
                    </p>
                )}

                    <button type="submit">Create account</button>
                </form>
            </div>
        );
    }
