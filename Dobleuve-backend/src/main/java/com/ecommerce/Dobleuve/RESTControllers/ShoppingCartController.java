package com.ecommerce.Dobleuve.RESTControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Dobleuve.models.Product;
import com.ecommerce.Dobleuve.services.IProductService;
import com.ecommerce.Dobleuve.services.IShoppingCartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")
public class ShoppingCartController {

    @Autowired
    IShoppingCartService cartServ;
    @Autowired
    IProductService productServ;

    @GetMapping("/{cartId}/add/{productId}")
    public void añadirAlCarrito(@PathVariable Long cartId, @PathVariable Long productId){
        Product product = productServ.obtenerProductoPorId(productId);
        cartServ.añadirProductoAlCarrito(cartId, product);
    }
    
    @DeleteMapping("/{cartId}/remove/{productId}")
    public void eliminarProductoDelCarrito(@PathVariable Long cartId, @PathVariable Long productId){
        cartServ.eliminarProductoDelCarrito(cartId, productId);
    }
}
