package com.ecommerce.Dobleuve.services;

import java.util.List;

import com.ecommerce.Dobleuve.models.Product;

public interface IProductService {

    List<Product> listarProductos();
    List<Product> buscarProductosPorNombre(String nombre);
}
