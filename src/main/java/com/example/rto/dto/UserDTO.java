package com.example.rto.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String mailId;
    private String password;
    private  String roles;
    private String message;
}
