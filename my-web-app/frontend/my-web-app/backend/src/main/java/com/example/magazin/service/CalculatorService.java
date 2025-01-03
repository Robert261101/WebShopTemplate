package com.example.magazin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.example.magazin.model.Calculator;
import com.example.magazin.repository.CalculatoareRepository;

@Service
public class CalculatorService {
    private final CalculatoareRepository calculatorRepository;

    public CalculatorService(CalculatoareRepository calculatorRepository) {
        this.calculatorRepository = calculatorRepository;
    }

    public List<Calculator> getAllCalculators() {
        return calculatorRepository.findAll();
    }

    public Calculator getCalculatorById(Long id) {
        return calculatorRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Calculator not found with id: " + id));
    }

    public Calculator addCalculator(Calculator calculator) {
        return calculatorRepository.save(calculator);
        
    }

    public void deleteCalculator(Long id) {
        calculatorRepository.deleteById(id);
    }
}
