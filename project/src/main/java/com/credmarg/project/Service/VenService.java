package com.credmarg.project.Service;

import com.credmarg.project.Model.Vendor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class VenService {

    public Map<String, Object> addVendor(List<Vendor> vendorList, Vendor vendor){
        Optional<Vendor> fetchVendor=vendorList.stream().filter(ven -> ven.getEmail().equals(vendor.getEmail())).findFirst();
        if(!fetchVendor.isPresent() && vendor.getEmail()!=null && vendor.getEmail()!="") {
            vendorList.add(vendor);
            return Map.of("vendorList", vendorList, "response", "Successfully Created");
        }else {
            return Map.of("vendorList", vendorList, "response", "Email-ID Exists");
        }
    }

}
