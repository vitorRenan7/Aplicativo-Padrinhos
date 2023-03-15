package com.prototipoapp.Prototipo.App.controller;

import com.prototipoapp.Prototipo.App.dto.DTOLogin;
import com.prototipoapp.Prototipo.App.dto.Login;
import com.prototipoapp.Prototipo.App.dto.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/prototipo")
public class PrototipoController {

    @Autowired
    LoginRepository repository;

    @CrossOrigin(origins = "http://localhost:8100")
    @PostMapping
    public ResponseEntity<Map<String, Object>> cadastro(@RequestBody DTOLogin dados){
        repository.save(new Login(dados));

        Map<String, Object> response = new HashMap<>();
        response.put("Message", "Cadastrado com sucesso");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
