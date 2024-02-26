package com.ecommerce.Dobleuve.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.Dobleuve.models.ShoppingCart;

@Repository
public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

}
