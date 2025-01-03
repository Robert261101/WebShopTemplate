package com.example.magazin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.example.magazin.model.Telefon;
import com.example.magazin.repository.TelefoaneRepository;

@Service
public class TelefonService {
    private final TelefoaneRepository telefoaneRepository;

    public TelefonService(TelefoaneRepository telefoaneRepository){
        this.telefoaneRepository=telefoaneRepository;
    }

    public List<Telefon> getAllTelephones(){
        return telefoaneRepository.findAll();
    }

    public Telefon getTelephonById(Long id){
        return telefoaneRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Telephone not found with id: " + id));
    }

    public Telefon addTelefon(Telefon telefon){
        return telefoaneRepository.save(telefon);
    }

    public void deleteTelefon(Long id){
        telefoaneRepository.deleteById(id);
    }

}
