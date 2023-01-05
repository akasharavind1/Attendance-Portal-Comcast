package com.example.rto.repo;

import com.example.rto.entity.userEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<userEntity,Integer>{


    boolean existsByMailId(String email);


    userEntity findByMailId(String email);

    boolean existsByPassword(String password);

}
