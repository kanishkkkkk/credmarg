package com.credmarg.project.Service;

import com.credmarg.project.Model.Vendor;

public class EmailService {
    public static String sendEmail(Vendor vendor){
        String body= "Sending payments to vendor %s at upi %s.";
        String emailBody= String.format(body, vendor.getName(), vendor.getUpi());
        String toEmail= vendor.getEmail();
        String subject= "Sending payment";
        String from= "credmarg@mail.com";

        String mail= "From: "+from +
                "\nTo: "+toEmail+
                "\nSubject: "+subject+
                "\nBody: "+emailBody;

        System.out.println(mail);
        System.out.println("--------------------------------");
        return mail;
    }
}
