package com.example.magazin.repository;

import com.example.magazin.model.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LaptopuriRepository extends JpaRepository<Laptop, Long> {
     
}