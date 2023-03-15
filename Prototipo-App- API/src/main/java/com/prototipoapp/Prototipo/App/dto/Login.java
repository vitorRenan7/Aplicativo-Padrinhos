package com.prototipoapp.Prototipo.App.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "login")
@Entity(name = "Login")
@Getter
@Setter
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String senha;

    public Login(DTOLogin dados){
        this.email = dados.email();
        this.senha = dados.senha();
    }
}
