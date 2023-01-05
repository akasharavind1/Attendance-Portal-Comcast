package com.example.rto.controller;
import com.example.rto.dto.UserDTO;
import com.example.rto.entity.userEntity;
import com.example.rto.repo.EmployeeRepository;
import com.example.rto.service.rtoService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class RtoController {
private final EmployeeRepository employeeRepository;
    private final rtoService rtoService;

    @Autowired
    public RtoController(EmployeeRepository employeeRepository, rtoService rtoService) {
        this.employeeRepository = employeeRepository;
        this.rtoService =rtoService;
    }
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDTO loginInfo)
    {
        return ResponseEntity.ok(this.rtoService.login(loginInfo));
    }
    @PostMapping("/signup")
    public ResponseEntity postEmployee(@RequestBody userEntity signup) {
        return ResponseEntity.ok(this.employeeRepository.save(signup));
    }
    @GetMapping("/getLogin")
    public List<userEntity> demo(){
        return employeeRepository.findAll();
    }

}

