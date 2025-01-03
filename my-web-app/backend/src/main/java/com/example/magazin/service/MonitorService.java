package com.example.magazin.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.example.magazin.model.Monitor;
import com.example.magazin.repository.MonitoareRepository;

@Service
public class MonitorService {
    private final MonitoareRepository monitoareRepository;

    public MonitorService(MonitoareRepository monitoareRepository){
        this.monitoareRepository=monitoareRepository;
    }

    public List<Monitor> getAllMonitors(){
        return monitoareRepository.findAll();
    }

    public Monitor getMonitorById(Long id){
        return monitoareRepository.findById(id)
            .orElseThrow(() -> new ResourceAccessException("Monitor not found with id: " + id));
    }

    public Monitor addMonitor(Monitor monitor)
    {
        return monitoareRepository.save(monitor);
    }
    
    public void deleteMonitor(Long id){
        monitoareRepository.deleteById(id);
    }
}
