package com.example.magazin.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.magazin.model.Telefon;
import com.example.magazin.repository.TelefoaneRepository;
import com.example.magazin.service.TelefonService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/telephones")
@CrossOrigin(origins = "http://localhost:3000")
public class TelefonController {
    private final TelefoaneRepository telefoaneRepository;
    private final TelefonService telefonService;

    public TelefonController(TelefoaneRepository telefoaneRepository, TelefonService telefonService){
        this.telefoaneRepository=telefoaneRepository;
        this.telefonService=telefonService;
    }

    @GetMapping("/all")
    public List<Telefon> getAllTelephones() {
        return telefonService.getAllTelephones();
    }
    
    @GetMapping("/{id}")
    public Telefon getTelephonById(@PathVariable Long id) {
        return telefonService.getTelephonById(id);
    }
    
    @PostMapping("/add")
    public void addTelephon(@RequestBody Telefon telefon) {
        telefoaneRepository.save(telefon);
    }

    @PostMapping("/edit")
    public void editTelephon(@RequestBody Telefon telefon) {
        telefoaneRepository.save(telefon);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTelephone(@PathVariable Long id){
        telefonService.deleteTelefon(id);
    }    


}
