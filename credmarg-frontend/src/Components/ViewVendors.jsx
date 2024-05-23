import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewVendors() {
    const [vendors, setVendors] = React.useState([]);
    const getVendors = ()=>{
        console.log("Fetching Vendors");
        fetchVendors();
    }
    
    const fetchVendors = ()=>{
        axios.get("http://localhost:8010/credmarg/getVendors").then(
            (response=>{
                if(!response.data.length>0){
                    alert("No Vendor Found");
                }else{
                    console.log(response);
                    setVendors(response.data);
                }   
            })
        ).catch(error=>{
            console.log(error);	
            alert(error);
        })
    }
    
    useEffect(() =>{
        getVendors();
    },[])

    return (
        <div>
        {vendors.length > 0   ? (
            <table>
                <thead>
                <tr>
                    <th>Vendor Name</th>
                    <th>Vendor Email</th>
                    <th>Vendor Upi</th>
                </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor) =>{
                        return(
                        <tr key={vendor.email}>
                           <td>{vendor.name}</td> 
                           <td>{vendor.email}</td>
                           <td>{vendor.upi}</td>
                        </tr>
                        )
                    } )}
                </tbody>
            </table>
           ):(  
            <h4>No Vendor Found</h4> 
        )
        }
        <br/>
        <button><Link to="/">Home</Link></button>
        </div>
    )
}
export default ViewVendors;
