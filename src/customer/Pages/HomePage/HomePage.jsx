import React, { useEffect, useState } from "react";
import MainCarousel from "../../components/HomeCarosel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mensKurta";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../State/store";
import { findProducts } from "../../../State/Product/Action";

function HomePage() {
  const { products } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [mensKurtaData, setMensKurtaData] = useState([]);
  const [topsData, setTopsData] = useState([]);

  useEffect(() => {
    const categories = ["mens_kurta", "tops"]; 

    categories.forEach((category) => {
      const data = {
        category: category,
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 1000000,
        minDiscount: 0,
        sort: "price_low",
        pageNumber: 0,
        pageSize: 10,
        stock: "in_stock",
      };

      console.log("Category before dispatch:", data.category);

      dispatch(findProducts(data)).then(() => {});
    });
  }, []);

  useEffect(() => {
  
    products?.products?.content?.filter((item) =>
      item?.category?.name === "mens_kurta"
        ? setMensKurtaData(products?.products?.content)
        : null
    );
    products?.products?.content?.filter((item) =>
      item?.category?.name === "tops"
        ? setTopsData(products?.products?.content)
        : null
    );
  }, [products]);

  return (
    <div>
      <div className="pt-8">
        <MainCarousel />
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel prop={mensKurtaData} sectionName={"Mens Kurta"} />
        <HomeSectionCarousel prop={topsData} sectionName={"Tops"} />
      </div>
    </div>
  );
}

export default HomePage;
