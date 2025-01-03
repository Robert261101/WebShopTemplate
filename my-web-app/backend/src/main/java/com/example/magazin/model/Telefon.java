package com.example.magazin.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "telefoane")
public class Telefon {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;

    private String producator;
    private String model;
    private double pret;
    private int dimensiuneDiagonala;
    private int memorieInterna;
    private int memorieRAM;
    private String sistemOperare;
    private String culoare;
    private LocalDate creationDate;

    public Telefon(Integer id, String producator, String model, double pret, int dimensiuneDiagonala,
            int memorieInterna, int memorieRAM, String sistemOperare, String culoare, LocalDate creationDate) {
        this.id = id;
        this.producator = producator;
        this.model = model;
        this.pret = pret;
        this.dimensiuneDiagonala = dimensiuneDiagonala;
        this.memorieInterna = memorieInterna;
        this.memorieRAM = memorieRAM;
        this.sistemOperare = sistemOperare;
        this.culoare = culoare;
        this.creationDate = creationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public int getMemorieInterna() {
        return memorieInterna;
    }

    public void setMemorieInterna(int memorieInterna) {
        this.memorieInterna = memorieInterna;
    }

    public int getMemorieRAM() {
        return memorieRAM;
    }

    public void setMemorieRAM(int memorieRAM) {
        this.memorieRAM = memorieRAM;
    }

    public String getSistemOperare() {
        return sistemOperare;
    }

    public void setSistemOperare(String sistemOperare) {
        this.sistemOperare = sistemOperare;
    }

    public String getCuloare() {
        return culoare;
    }

    public void setCuloare(String culoare) {
        this.culoare = culoare;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }
}