package com.example.magazin.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.magazin.model.Calculator;
import com.example.magazin.repository.CalculatoareRepository;
import com.example.magazin.service.CalculatorService;

@RestController
@RequestMapping("/api/calculators")
@CrossOrigin(origins = "http://localhost:3000")  // Permite cererile de la frontend-ul React
public class CalculatorController {
    private final CalculatorService calculatorService;
	private final CalculatoareRepository calculatorRepository;
    public CalculatorController(CalculatorService calculatorService, CalculatoareRepository calculatoareRepository) {
        this.calculatorService = calculatorService;
		this.calculatorRepository = calculatoareRepository;
    }

    @GetMapping("/all")
    public List<Calculator> getAllCalculators() {
        return calculatorService.getAllCalculators();
    }

    @GetMapping("/{id}")
    public Calculator getCalculatorById(@PathVariable Long id) {
        return calculatorService.getCalculatorById(id);
    }

    @PostMapping("/add")
    public void addCalculator(@RequestBody Calculator calculator) {
         calculatorRepository.save(calculator);
    	
    }
	@PostMapping("/edit")
    public void editCalculator(@RequestBody Calculator calculator) {
         calculatorRepository.save(calculator);
    	
    }
    @DeleteMapping("/delete/{id}")
    public void deleteCalculator(@PathVariable Long id) {
        calculatorService.deleteCalculator(id);
    }
}
