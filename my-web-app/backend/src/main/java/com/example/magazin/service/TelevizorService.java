package com.example.magazin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.example.magazin.model.Televizor;
import com.example.magazin.repository.TelevizoareRepository;

@Service
public class TelevizorService {
    private final TelevizoareRepository televizoareRepository;

    public TelevizorService(TelevizoareRepository televizoareRepository){
        this.televizoareRepository=televizoareRepository;
    }

    public List<Televizor> getAllTelevizoare(){
        return televizoareRepository.findAll();
    }

    public Televizor getTelevizorById(Long id){
        return televizoareRepository.findById(id)
                        .orElseThrow(() -> new ResourceAccessException("Televizor not found with id: " + id));
    }

    public Televizor addTelevizor(Televizor televizor){
        return televizoareRepository.save(televizor);
    }

    public void deleteTelevizor(Long id){
        televizoareRepository.deleteById(id);
    }

}
