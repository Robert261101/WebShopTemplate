package com.example.magazin.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "calculatoare")
public class Calculator {
    @Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
    private String model;
    private double pret;
    @Column(name="tip_procesor")
    private String tipProcesor;
    @Column(name="placa_video")
    private String placaVideo;
    @Column(name="memorie_ram")
    private String memorieRAM;
    @Column(name="sistem_operare")
    private String sistemOperare;
    @Column(name="tip_stocare")
    private String tipStocare;
    @Column(name="creation_date")
    private LocalDate creationDate;

    public Calculator(Integer id, String model, double pret, String tipProcesor, String placaVideo, String memorieRAM,
            String sistemOperare, String tipStocare, LocalDate creationDate) {
        this.id = id;
        this.model = model;
        this.pret = pret;
        this.tipProcesor = tipProcesor;
        this.placaVideo = placaVideo;
        this.memorieRAM = memorieRAM;
        this.sistemOperare = sistemOperare;
        this.tipStocare = tipStocare;
        this.creationDate = creationDate;
    }

    public Calculator() {
        //TODO Auto-generated constructor stub
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

    public String getTipProcesor() {
        return tipProcesor;
    }

    public void setTipProcesor(String tipProcesor) {
        this.tipProcesor = tipProcesor;
    }

    public String getPlacaVideo() {
        return placaVideo;
    }

    public void setPlacaVideo(String placaVideo) {
        this.placaVideo = placaVideo;
    }

    public String getMemorieRAM() {
        return memorieRAM;
    }

    public void setMemorieRAM(String memorieRAM) {
        this.memorieRAM = memorieRAM;
    }

    public String getSistemOperare() {
        return sistemOperare;
    }

    public void setSistemOperare(String sistemOperare) {
        this.sistemOperare = sistemOperare;
    }

    public String getTipStocare() {
        return tipStocare;
    }

    public void setTipStocare(String tipStocare) {
        this.tipStocare = tipStocare;
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
