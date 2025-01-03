package com.example.magazin.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "monitoare")
public class Monitor {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
    private String producator;
    private String model;
    private double pret;
    @Column(name="dimensiune_diagonala")
    private int dimensiuneDiagonala;
    @Column(name = "rata_refresh")
    private int rataRefresh;
    @Column(name="creation_date")
    private LocalDate creationDate;

    

    public Monitor(Integer id, String producator, String model, double pret, int dimensiuneDiagonala, int rataRefresh,
            LocalDate creationDate) {
        this.id = id;
        this.producator = producator;
        this.model = model;
        this.pret = pret;
        this.dimensiuneDiagonala = dimensiuneDiagonala;
        this.rataRefresh = rataRefresh;
        this.creationDate = creationDate;
    }

    public Monitor(){
         //TODO Auto-generated constructor stub
    }

    
    public String getProducator() {
        return producator;
    }

    public void setProducator(String producator) {
        this.producator = producator;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPret() {
        return pret;
    }

    public void setPret(double pret) {
        this.pret = pret;
    }

    public int getDimensiuneDiagonala() {
        return dimensiuneDiagonala;
    }

    public void setDimensiuneDiagonala(int dimensiuneDiagonala) {
        this.dimensiuneDiagonala = dimensiuneDiagonala;
    }

    public int getRataRefresh() {
        return rataRefresh;
    }

    public void setRataRefresh(int rataRefresh) {
        this.rataRefresh = rataRefresh;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }


    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }
}
