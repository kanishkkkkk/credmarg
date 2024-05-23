import React from "react";
import axios from "axios";

function SendEmail() {
    const sendEmails= ()=>{
        console.log("Sending Emails");
        sendEmailsToVendor();
    }
    const sendEmailsToVendor = () => {
        axios.post("http://localhost:8010/credmarg/sendEmail").then(
            (response=> {
                console.log(response.data);
                alert(response.data);
            })
        ).catch(error =>{
            console.log(error);
            alert(error);
        })
    }
    return (
        <div> 
            <button onClick={sendEmails}>Send Emails</button>
        </div>
    )
}
export default SendEmail;