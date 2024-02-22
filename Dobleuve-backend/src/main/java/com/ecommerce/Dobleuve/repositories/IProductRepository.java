package com.ecommerce.Dobleuve.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecommerce.Dobleuve.models.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE LOWER(p.nombre) LIKE %:name%")
    List<Product> findByNombreContainingIgnoreCase(String name);
}
