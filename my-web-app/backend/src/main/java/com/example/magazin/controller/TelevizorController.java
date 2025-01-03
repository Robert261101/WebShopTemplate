package com.example.magazin.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.magazin.model.Televizor;
import com.example.magazin.repository.TelevizoareRepository;
import com.example.magazin.service.TelevizorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/televizoare")
@CrossOrigin(origins = "http://localhost:3000")
public class TelevizorController {
    private final TelevizoareRepository televizoareRepository;
    private final TelevizorService televizorService;

    public TelevizorController(TelevizoareRepository televizoareRepository, TelevizorService televizorService){
        this.televizoareRepository=televizoareRepository;
        this.televizorService=televizorService;
    }

    @GetMapping("/all")
    public List<Televizor> getAllTelevizoare() {
        return televizorService.getAllTelevizoare();
    }

    @GetMapping("/{id}")
    public Televizor gettTelevizorById(@PathVariable Long id) {
        return televizorService.getTelevizorById(id);
    }
    
    @PostMapping("/add")
    public void addTelevizor(@RequestBody Televizor televizor) {
        televizoareRepository.save(televizor);
    }

    @PostMapping("/edit")
    public void editTelevizor(@RequestBody Televizor televizor) {
        televizoareRepository.save(televizor);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteTelevizor(@PathVariable Long id){
        televizoareRepository.deleteById(id);
    }
    
}
