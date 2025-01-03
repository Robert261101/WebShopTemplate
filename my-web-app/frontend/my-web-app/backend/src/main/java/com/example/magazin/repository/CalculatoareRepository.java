package com.example.magazin.repository;

import com.example.magazin.model.Calculator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CalculatoareRepository extends JpaRepository<Calculator, Long> {
     
}