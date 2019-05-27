package com.heros.service;

import com.heros.domain.Hero;
import com.heros.repository.HeroRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroService {

    @Autowired
    private HeroRepository heroRepository;

    public List<Hero> getHeros() {
        return heroRepository.findAll();
    }

}
