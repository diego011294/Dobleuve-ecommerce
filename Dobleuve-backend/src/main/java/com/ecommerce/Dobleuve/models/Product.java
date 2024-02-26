package com.ecommerce.Dobleuve.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 55)
    private String nombre;

    @Column(nullable = false, length = 300)
    private String descripcion;

    private double precio;

    private int cantidadDisponible;

    @Column(nullable = true)
    private String imageUrl;

    @ManyToOne
    private ShoppingCart cart;

    public Product() {
    }

    public Product(Long id, String nombre, String descripcion, double precio, int cantidadDisponible, String imageUrl,
            ShoppingCart cart) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidadDisponible = cantidadDisponible;
        this.imageUrl = imageUrl;
        this.cart = cart;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getCantidadDisponible() {
        return cantidadDisponible;
    }

    public void setCantidadDisponible(int cantidadDisponible) {
        this.cantidadDisponible = cantidadDisponible;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public ShoppingCart getCart() {
        return cart;
    }

    public void setCart(ShoppingCart cart) {
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", precio=" + precio
                + ", cantidadDisponible=" + cantidadDisponible + ", imageUrl=" + imageUrl + ", cart=" + cart + "]";
    }
}
