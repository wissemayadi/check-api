import React,{useState,useEffect} from 'react';
import axios from "axios"; 
import {Link} from "react-router-dom";
import '../App.css';

const User = () => {
const [users,setUsers]=useState([]);

const getUsers= async()=>{
try{

const res = await axios.get("https://jsonplaceholder.typicode.com/users")
console.log(res);
setUsers(res.data);
}catch(err){
console.log("Error",err);

}

}
useEffect(() => {
   
    getUsers();
    
}, [])


    return (
        <div>
            <p>
         {users.map((user,key)=>(
       

        <div>
            {/* <Link to ={`/profile/${user.id}`}></Link> */}
            <span key={key}>{ user.id}</span> 
            <span key={key}>{user.name}</span>
            <span key={key}>{user.username}</span>
            <span key={key}>{user.email}</span>
            <span key={key}>{user.adress}</span>
            <span key={key}>{user.geo}</span>
            <span key={key}>{user.phone}</span>
            <span key={key}>{user.website}</span>
            <span key={key}>{user.company.name}
            {user.company.catchPhrase}
            {user.company.bs}
            
            </span>
   
          
        </div>
         
     

) )}



            </p>
        </div>
    )
}

export default User
