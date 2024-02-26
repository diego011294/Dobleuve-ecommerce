package com.ecommerce.Dobleuve.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Dobleuve.models.Product;
import com.ecommerce.Dobleuve.models.ShoppingCart;
import com.ecommerce.Dobleuve.repositories.IShoppingCartRepository;

@Service
public class ShoppingCartService implements IShoppingCartService {

    @Autowired
    private IShoppingCartRepository cartRepo;

    @Override
    public ShoppingCart obtenerCarritoPorId(Long id) {
        return cartRepo.findById(id).orElse(null);
    }

    @Override
    public void añadirProductoAlCarrito(Long carritoId, Product product) {
        ShoppingCart carrito = obtenerCarritoPorId(carritoId);
        if (carrito != null) {
            carrito.getProducts().add(product);
            cartRepo.save(carrito);
        }
    }

    @Override
    public void eliminarProductoDelCarrito(Long carritoId, Long productId) {
        ShoppingCart carrito = obtenerCarritoPorId(carritoId);
        if (carrito != null) {
            carrito.getProducts().removeIf(producto -> producto.getId().equals(productId));
            cartRepo.save(carrito);
        }
    }

}
