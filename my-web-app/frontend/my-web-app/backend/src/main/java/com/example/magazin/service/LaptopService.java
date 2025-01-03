package com.example.magazin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.example.magazin.model.Laptop;
import com.example.magazin.repository.LaptopuriRepository;

@Service
public class LaptopService {
    private final LaptopuriRepository laptopuriRepository;

    public LaptopService(LaptopuriRepository laptopuriRepository){
        this.laptopuriRepository=laptopuriRepository;
    }

    public List<Laptop> getAllLaptops(){
        return laptopuriRepository.findAll();
    }

    public Laptop getLaptopById(Long id){
        return laptopuriRepository.findById(id)
            .orElseThrow(() -> new ResourceAccessException("Laptop not found wiht id" + id));
    }

    public Laptop addLaptop(Laptop laptop){
        return laptopuriRepository.save(laptop);
    }

    public void deleteLaptop(Long id){
        laptopuriRepository.deleteById(id);
    }
}
