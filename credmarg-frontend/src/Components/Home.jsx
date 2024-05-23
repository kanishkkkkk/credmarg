import React from "react";
import { Link } from 'react-router-dom';
import SendEmail from "./SendEmail";

function Home(){
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <h3>To add an employee click here</h3>
            <button><Link to="/addEmployee">Add Employee</Link></button>
            <h3>To add a vendor click here</h3>
            <button><Link to="/addVendor">Add Vendor</Link></button>
            <h3>To view all vendors click here</h3>
            <button><Link to="/viewVendor">View Vendor</Link></button>
            <h3>To view all employees click here</h3>
            <button><Link to="/viewEmployee">View Employee</Link></button>
            <h3>To send an email to vendors click here</h3>
            <SendEmail/>
            <h3>To see all the mails click here</h3>
            <button><Link to="/viewEmails">View Emails</Link></button>

        </div>
    )
}
export default Home;
