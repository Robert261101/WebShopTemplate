package com.example.magazin.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "televizoare")
public class Televizor {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
    private String producator;
    private String model;
    private double pret;
    @Column(name="dimensiune_diagonala")
    private int dimensiuneDiagonala;
    @Column(name="tehnologie_display")
    private String tehnologieDisplay;
    @Column(name="claritate_imagine")
    private String claritateImagine;
    @Column(name="clasa_energetica")
    private String clasaEnergetica;
    @Column(name="creation_date")
    private LocalDate creationDate;

    public Televizor(Integer id, String producator, String model, double pret, int dimensiuneDiagonala,
            String tehnologieDisplay, String claritateImagine, String clasaEnergetica, LocalDate creationDate) {
        this.id = id;
        this.producator = producator;
        this.model = model;
        this.pret = pret;
        this.dimensiuneDiagonala = dimensiuneDiagonala;
        this.tehnologieDisplay = tehnologieDisplay;
        this.claritateImagine = claritateImagine;
        this.clasaEnergetica = clasaEnergetica;
        this.creationDate = creationDate;
    }

    public Televizor(){

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

    public String getTehnologieDisplay() {
        return tehnologieDisplay;
    }

    public void setTehnologieDisplay(String tehnologieDisplay) {
        this.tehnologieDisplay = tehnologieDisplay;
    }

    public String getClaritateImagine() {
        return claritateImagine;
    }

    public void setClaritateImagine(String claritateImagine) {
        this.claritateImagine = claritateImagine;
    }

    public String getClasaEnergetica() {
        return clasaEnergetica;
    }

    public void setClasaEnergetica(String clasaEnergetica) {
        this.clasaEnergetica = clasaEnergetica;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }
}
