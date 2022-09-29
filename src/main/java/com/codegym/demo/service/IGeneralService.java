package com.codegym.demo.service;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface IGeneralService <T>{
    Iterable<T> findAll();

    Optional<T> findById(Long id);

    T save(T t);

    void remove (Long id);

}
