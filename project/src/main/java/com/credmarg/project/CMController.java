package com.credmarg.project;

import com.credmarg.project.Model.Employee;
import com.credmarg.project.Model.Vendor;
import com.credmarg.project.Service.EmailService;
import com.credmarg.project.Service.EmpService;
import com.credmarg.project.Service.VenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/credmarg")
@CrossOrigin("*")
public class CMController {

    @Autowired
    private EmpService empService;
    @Autowired
    private VenService venService;
    List<String> emailList=new ArrayList<>();
    List<Employee> employeeList=new ArrayList<>();
    List<Vendor> vendorList=new ArrayList<>();

    public CMController() {
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<String> addEmp(@RequestBody Employee employee){
        System.out.println("Adding employee");
        Map<String, Object> response= empService.addEmployee(employeeList, employee);
        employeeList= (List<Employee>) response.get("employeeList");
        System.out.println(response.get("response").toString());
        System.out.println("employeeList: "+employeeList);
        return ResponseEntity.ok(response.get("response").toString());
    }

    @GetMapping("/getEmployees")
    public ResponseEntity<List<Employee>> getEmployees(){
        System.out.println("Getting employee");

        return ResponseEntity.ok(employeeList);
    }

    @PostMapping("/addVendor")
    public ResponseEntity<String> addEmp(@RequestBody Vendor vendor){
        System.out.println("Adding vendor");

        Map<String, Object> response= venService.addVendor(vendorList, vendor);
        vendorList= (List<Vendor>) response.get("vendorList");
        System.out.println(response.get("response").toString());
        System.out.println(vendorList);
        return ResponseEntity.ok(response.get("response").toString());
    }

    @GetMapping("/getVendors")
    public ResponseEntity<List<Vendor>> getVendors(){
        System.out.println("Getting vendor");

        return ResponseEntity.ok(vendorList);
    }

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail() {
        if(vendorList.isEmpty()){
            return ResponseEntity.ok("No Vendor Found");
        }
        for (Vendor vendor : vendorList) {
            String email= EmailService.sendEmail(vendor);
            emailList.add(email);
        }
        return ResponseEntity.ok("Sent");
    }

    @GetMapping("/getEmails")
    public ResponseEntity<List<String>> getEmails(){
        System.out.println("Printing emails");
        return ResponseEntity.ok(emailList);
    }

}
