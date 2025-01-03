package com.example.magazin.repository;

import com.example.magazin.model.Telefon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TelefoaneRepository extends JpaRepository<Telefon, Long> {
    
}