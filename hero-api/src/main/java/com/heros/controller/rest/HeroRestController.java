package com.heros.controller.rest;

import com.heros.domain.Hero;
import com.heros.service.HeroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeroRestController {
    
    @Autowired
    private HeroService heroService;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/hero")
    public List<Hero> buscarTodos() {
        return this.heroService.getHeros();
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("api/hero/{id}") 
    public Hero buscarHeroPorId(@PathVariable long id) {
        return this.heroService.buscarHeroPorId(id);
    }
    
}
