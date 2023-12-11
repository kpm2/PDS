package com.example.demo.Repository;

import com.example.demo.Model.ListElement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListElementRepository extends JpaRepository<ListElement, Integer> {
    
}
