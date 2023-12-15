package com.example.demo.Service;

import com.example.demo.Model.ListElement;

import java.util.List;

public interface ListElementService {
    public ListElement saveListElement(ListElement listElement);
    public List<ListElement> getAllListElements();
    public void deleteListElement(Long id);
}
