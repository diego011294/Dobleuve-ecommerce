package com.ecommerce.Dobleuve.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "carritoProductos")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    private int cantidad;

    @ManyToOne
    private ShoppingCart carrito;

    public CartItem() {
    }

    public CartItem(Long id, Product product, int cantidad, ShoppingCart carrito) {
        this.id = id;
        this.product = product;
        this.cantidad = cantidad;
        this.carrito = carrito;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public ShoppingCart getCarrito() {
        return carrito;
    }

    public void setCarrito(ShoppingCart carrito) {
        this.carrito = carrito;
    }

    @Override
    public String toString() {
        return "CartItem [id=" + id + ", product=" + product + ", cantidad=" + cantidad + ", carrito=" + carrito + "]";
    }
}
