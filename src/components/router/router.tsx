import { Routes, Route } from "react-router-dom";
import Home from "../../components/home/home";
import About from "../about/about";
import Help from "../help/help";
import Products from "../products/products";
import Product from "../products/product/product";
import NotFound from "../not_found/not_found";
import MainLayout from "../../components/layouts/main_layouts";

export const Router = () => {
    return (
    <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "about" element = {<About/>}/>
            <Route path = "help" element = {<Help/>}/>
            <Route path = "products" element = {<Products/>}/>
            <Route path = "/products/:productId" element = {<Product />}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}