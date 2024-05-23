package com.credmarg.project.Model;

import lombok.Data;

import javax.persistence.Id;

@Data
//@Document(collection="employee")
public class Employee {

    private String name;
    private String designation;
    private String ctc;
    @Id
    private String email;

}
