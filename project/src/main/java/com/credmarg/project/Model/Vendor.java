package com.credmarg.project.Model;

import lombok.Data;

import javax.persistence.Id;

@Data
//@Document(collection="Vendor")
public class Vendor {
    private String name;
    @Id
    private String email;
    private String upi;
}
