import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function AddEmployee() {
    const [employee,setEmployee]=React.useState({
        name:"",
        email:"",
        ctc:"",
        designation:""
    })
    const submitForm=(event)=>{
        event.preventDefault();
        console.log(employee);
        addEmployeeToDB(employee);
    }

    const addEmployeeToDB=(employeeData)=>{
        
        axios.post("http://localhost:8010/credmarg/addEmployee",employeeData).then(
        response=>{
            console.log(response.data);
            alert(response.data);
        })
        .catch(error=>{
            console.log(error);
            alert(error);
        })
    }
    return (
        <div>
        <h1>Add Employee</h1>
        <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" name="name" id="name" onChange={(event)=>{
            setEmployee({...employee,name:event.target.value})
        }}
        />
        <br/><br/>
        <label>Email: </label>
        <input type="email" name="email" id="email" onChange={(event)=>{
            setEmployee({...employee,email:event.target.value})
        }}
        />
        <br/><br/>
        <label>Designation: </label>
        <input type="text" name="designation" id="designation" onChange={(event)=>{
            setEmployee({...employee,designation:event.target.value})
        }}
        />
        <br/><br/>
        <label>CTC: </label>
        <input type="number" name="ctc" id="ctc" onChange={(event)=>{
            setEmployee({...employee,ctc:event.target.value})
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
export default AddEmployee;
