package com.example.demo.Controller;

import com.example.demo.Model.ListElement;
import com.example.demo.Service.ListElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/listelement")
@CrossOrigin
public class ListElementController {
    @Autowired
    private ListElementService listElementService;

    @PostMapping("/add")
    public String add(@RequestBody ListElement listElement) {
        listElementService.saveListElement(listElement);
        return "New element is added";
    }

    @GetMapping("/getAll")
    public List<ListElement> getAllListElements() {
        return listElementService.getAllListElements();
    }

}
