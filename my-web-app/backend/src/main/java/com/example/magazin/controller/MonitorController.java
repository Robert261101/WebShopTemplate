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

import com.example.magazin.model.Monitor;
import com.example.magazin.repository.MonitoareRepository;
import com.example.magazin.service.MonitorService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/monitors")
@CrossOrigin(origins = "http://loaclhost:3000")
public class MonitorController {
    private final MonitorService monitorService;
    private final MonitoareRepository monitoareRepository;

    public MonitorController(MonitorService monitorService, MonitoareRepository monitoareRepository){
        this.monitoareRepository=monitoareRepository;
        this.monitorService=monitorService;
    }

    @GetMapping("/all")
    public List<Monitor> getAllMonitors() {
        return monitorService.getAllMonitors();
    }

    @GetMapping("/{id}")
    public Monitor getMonitorById(@PathVariable Long id) {
        return monitorService.getMonitorById(id);
    }

    @PostMapping("/add")
    public void addMonitor(@RequestBody Monitor monitor){
        monitoareRepository.save(monitor);
    }

    @PostMapping("/edit")
    public void editMonitor(@RequestBody Monitor monitor) {
        monitoareRepository.save(monitor);
    }
    
    @DeleteMapping("/delete/{id}")
    public void deleteMonitor(@PathVariable Long id){
        monitorService.deleteMonitor(id);
    }
    
}
