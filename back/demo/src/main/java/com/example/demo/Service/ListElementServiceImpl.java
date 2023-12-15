package com.example.demo.Service;

import com.example.demo.Model.ListElement;
import com.example.demo.Repository.ListElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListElementServiceImpl implements ListElementService{
    @Autowired
    private ListElementRepository listElementRepository;

    @Override
    public ListElement saveListElement(ListElement listElement) {
        return listElementRepository.save(listElement);
    }

    @Override
    public List<ListElement> getAllListElements() {
        return listElementRepository.findAll();
    }

    @Override
    public void deleteListElement(Long id) {
        listElementRepository.deleteById(id.intValue());
    }
}
