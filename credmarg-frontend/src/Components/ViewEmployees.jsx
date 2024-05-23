import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewEmployees() {
    const [employees, setEmployee] =useState([]);
    const getEmployees = () =>{
        console.log("Fetching employees");
        fetchEmployees();
    }
    const fetchEmployees = () =>{
        axios.get("http://localhost:8010/credmarg/getEmployees").then(
            (response=>{
                if(!response.data.length>0){
                    console.log("No employees found");
                }else{
                    console.log(response.data);
                    setEmployee(response.data);
                }
            })
        ).catch(error=>{
            console.log(error);
            alert(error);
        })
    }
    useEffect(()=>{
        getEmployees();
    },[])
    
    return (
        <div>
            {employees.length >0? (
                <table>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            <th>Employee CTC</th>
                            <th>Employee Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                        employees.map((employee)=>{
                            return (
                                <tr key={employee.email}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.ctc}</td>
                                    <td>{employee.designation}</td>
                                </tr>
                                 )
                            })
                        }
                    </tbody>
                </table>
            ):(
                <h3>No Employee Found</h3>
            )}
            <button><Link to="/">Home</Link></button>
        </div>
    )
}
export default ViewEmployees;
