package com.ecommerce.Dobleuve.RESTControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Dobleuve.models.Product;
import com.ecommerce.Dobleuve.services.IProductService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private IProductService productServ;

    @GetMapping("/products")
    public List<Product> listarProductos(){
        return productServ.listarProductos();
    }

    @GetMapping("/products/search")
    public List<Product> buscarProductosPorNombre(@RequestParam String nombre){
        return productServ.buscarProductosPorNombre(nombre);
    }
}
