package com.credmarg.project.Service;

import com.credmarg.project.Model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EmpService {

    public Map<String, Object> addEmployee(List<Employee> employeeList, Employee employee){
        System.out.println("Service:addEmp invoked.");
        Optional<Employee> fetchEmployee=employeeList.stream().filter(emp -> emp.getEmail().equals(employee.getEmail())).findFirst();
        if(!fetchEmployee.isPresent() && employee.getEmail()!=null && employee.getEmail()!="") {
            System.out.println("Service:emp:email not found, adding");
            employeeList.add(employee);
            return Map.of("employeeList", employeeList, "response", "Successfully Created");
        }else {
            System.out.println("Service:emp:duplicate entry.");

            return Map.of("employeeList", employeeList, "response", "Email-ID Exists");
        }
    }

}
