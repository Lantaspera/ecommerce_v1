import {useState} from 'react';
// import { useHistory } from 'react-router-dom';

function useForm() {
    // const history = useHistory()
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })
    

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user, [name]:value
        });
    } ;

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const {name,email,password} = user 
        const res=await fetch('/signup',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
               name,email,password
           })
       })
       const data = await res.json();
       if(res.status === 422 || !data){
           window.alert('invalid')
           
       }else{
           window.alert('success')
           
        //history.push('/login')
       }
    };

    return { handleChange, user, handleSubmit };
    
};
export default useForm
