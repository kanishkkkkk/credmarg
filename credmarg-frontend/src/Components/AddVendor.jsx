import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddVendor() {
    const [vendor, setVendor]= React.useState({
        name:"",
        email:"",
        upi:""
    })

    const submitForm=(event)=>{
        event.preventDefault();
        console.log(vendor);
        addVendorToDB(vendor);
    }

    const addVendorToDB=(vendorData)=>{
        axios.post("http://localhost:8010/credmarg/addVendor", vendorData).then(
            response=>{
                console.log(response.data);
                alert(response.data);
    }
        ).catch(error=>{
            console.log(error);
            alert(error);
        })
    }
    return (
        <div>
        <h1>Add Vendor</h1>
        <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" name="name" id="name" onChange={(event)=>{
            setVendor({...vendor,name:event.target.value})
        }}
        />
        <br/><br/>
        <label>Email: </label>
        <input type="email" name="email" id="email" onChange={(event)=>{
            setVendor({...vendor,email:event.target.value})
        }}
        />
        <br/><br/>
        <label>Upi: </label>
        <input type="text" name="upi" id="upi" onChange={(event)=>{
            setVendor({...vendor,upi:event.target.value})
        }}
        />
        <br/><br/>
        <button type="submit">ADD</button>
        <br/>
        <button><Link to="/">Home</Link></button>
        </form>
        </div>
    )
}
export default AddVendor;