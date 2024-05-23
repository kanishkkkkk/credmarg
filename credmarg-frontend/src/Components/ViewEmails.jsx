import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewEmails(){
    const [emails, setEmails] = useState([]);
    const getEmails=()=>{
        console.log("Getting Emails");
        fetchEmails();
    }

    const fetchEmails=()=>{
        axios.get("http://localhost:8010/credmarg/getEmails").then(
            (response=>{
                if(response.data.length>0){
                    console.log(response.data);
                    setEmails(response.data);
                }else{
                    console.log("No Emails Found");
                }
            })
        ).catch(error=>{
                console.log(error);
                alert(error);
        })
    }

    useEffect(() => {
        getEmails();
    },[])

    return(
        <div>
            { emails.length>0 ? (
                <div>
                { 
                    emails.map((email)=>{
                    return (
                        <ul>
                        <li>{email}</li>
                        </ul>
                        )
                    })
                }      
                </div>
            ):(
                <h3>No Emails Found</h3>
            )}
            <button><Link to="/">Home</Link></button>
        </div>
    )
}
export default ViewEmails;