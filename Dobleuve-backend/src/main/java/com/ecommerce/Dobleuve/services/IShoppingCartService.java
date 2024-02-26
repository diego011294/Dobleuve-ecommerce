package com.ecommerce.Dobleuve.services;

import com.ecommerce.Dobleuve.models.Product;
import com.ecommerce.Dobleuve.models.ShoppingCart;

public interface IShoppingCartService {

    ShoppingCart obtenerCarritoPorId(Long id);
    void añadirProductoAlCarrito(Long carritoId, Product product);
    void eliminarProductoDelCarrito(Long carritoId, Long productId);
}
