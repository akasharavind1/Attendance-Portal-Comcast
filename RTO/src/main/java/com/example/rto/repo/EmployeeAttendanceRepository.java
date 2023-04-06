package com.example.rto.repo;

import com.example.rto.entity.UserEntityAttendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface EmployeeAttendanceRepository extends JpaRepository<UserEntityAttendance,Integer> {
   List<UserEntityAttendance> findByEmployeeId(Integer empId);

   List<UserEntityAttendance> findByDate(Date date);

   Set<UserEntityAttendance> findByDateIn(List<Date> date);

   List<UserEntityAttendance> findByEmployeeIdAndDateIn(Integer id, List<Date> datelist );

   @Query(value = "select * from employeeattendance where employee_id = :empId and date_trunc('month',date)=date_trunc('month',CURRENT_DATE)", nativeQuery = true)
   List<UserEntityAttendance> findByEmployeeIdAndCurrentMonth(@Param("empId") Integer empId);

   @Query(value = "SELECT uea.date FROM UserEntityAttendance uea where uea.employeeId = :empId")
   List<Date> fetchAllDatesForUser(@Param("empId") Integer empId);

}

