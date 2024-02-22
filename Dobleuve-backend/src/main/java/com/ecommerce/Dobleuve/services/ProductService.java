package com.ecommerce.Dobleuve.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Dobleuve.models.Product;
import com.ecommerce.Dobleuve.repositories.IProductRepository;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepo;

    @Override
    public List<Product> listarProductos() {
        return productRepo.findAll();
    }

    @Override
    public List<Product> buscarProductosPorNombre(String nombre) {
        return productRepo.findByNombreContainingIgnoreCase(nombre);
    }

    @Override
    public Product obtenerProductoPorId(Long id) {
        return productRepo.findById(id).orElse(null);
    }


}
