package com.example.magazin.repository;

import com.example.magazin.model.Monitor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MonitoareRepository extends JpaRepository<Monitor, Long> {

}