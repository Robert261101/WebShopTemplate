package com.example.magazin.repository;

import com.example.magazin.model.Televizor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TelevizoareRepository extends JpaRepository<Televizor, Long> {
    
}