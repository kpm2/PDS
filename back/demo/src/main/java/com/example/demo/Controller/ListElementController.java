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

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        listElementService.deleteListElement(id);
        return "Element deleted successfully";
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable Long id, @RequestBody ListElement updatedElement) {
        ListElement existingElement = listElementService.getListElementById(id);
        if (existingElement != null) {
            existingElement.setText(updatedElement.getText());
            listElementService.saveListElement(existingElement);
            return "Element updated successfully";
        } else {
            return "Element not found";
        }
    }
}
