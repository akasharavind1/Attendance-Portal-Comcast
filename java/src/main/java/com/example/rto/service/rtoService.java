package com.example.rto.service;

import com.example.rto.dto.UserDTO;
import com.example.rto.entity.userEntity;
import com.example.rto.repo.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class rtoService {
@Autowired
    private final ModelMapper modelMapper;
    private final EmployeeRepository employeeRepository;


    @Autowired
    public rtoService(ModelMapper modelMapper, EmployeeRepository employeeRepository) {
        this.modelMapper = modelMapper;
        this.employeeRepository = employeeRepository;

    }
    public ResponseEntity<?> login(UserDTO loginInfo) {
        try {

            if (employeeRepository.existsByMailId(loginInfo.getMailId())) {
                if (employeeRepository.existsByPassword(loginInfo.getPassword())) {
                    UserDTO userdto = modelMapper.map(employeeRepository.findByMailId(loginInfo.getMailId()), UserDTO.class);
                    userdto.setMessage("User retrieved successfully");
                    return ResponseEntity.ok(userdto);
                }
                return ResponseEntity.ok("Password Mismatch");
            }
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            throw e;
        }
    }
}
