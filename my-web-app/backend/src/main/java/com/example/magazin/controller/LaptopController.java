package com.example.magazin.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.magazin.model.Laptop;
import com.example.magazin.repository.LaptopuriRepository;
import com.example.magazin.service.LaptopService;

@RestController
@RequestMapping("/api/laptops")
@CrossOrigin(origins = "http://localhost:3000")
public class LaptopController {
    private final LaptopService laptopService;
    private final LaptopuriRepository laptopuriRepository;
    public LaptopController(LaptopService laptopService, LaptopuriRepository laptopuriRepository){
        this.laptopService=laptopService;
        this.laptopuriRepository=laptopuriRepository;
    }

    @GetMapping("/all")
    public List<Laptop> getAllLaptops() {
        return laptopService.getAllLaptops();
    }
    
    @GetMapping("/{id}")
    public Laptop getLaptopById(@RequestParam Long id) {
        return laptopService.getLaptopById(id);
    }

    @PostMapping("/add")
    public void addLaptop(@RequestBody Laptop laptop) {
        laptopuriRepository.save(laptop);
    }

    @PostMapping("/edit")
    public void editLaptop(@RequestBody Laptop laptop) {
        laptopuriRepository.save(laptop);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteLaptop(@PathVariable Long id){
        laptopService.deleteLaptop(id);
    }
    
    
}
