'use client'
import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { products } from '../data/products'

const filters = ["All", "New", "A-Z", "Z-A", "Low Prize", "High Prize"]

interface Product {
    id: number;
    product_name: string;
    prize: string;
    image: string;
    category?: string;
}

function page() {

    const [selectedFilter, setSelectedFilter] = useState<String>(filters[0])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        let newProducts = [...products];
        switch (filter) {
          case "All":
            break;
          case "New":
            newProducts = newProducts.reverse();
            break;
          case "A-Z":
            newProducts = newProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
            break;
          case "Z-A":
            newProducts = newProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
            break;
          case "Low Prize":
              newProducts = newProducts.sort((a, b) => parseFloat(a.prize.replace(/[^0-9.-]/g, "")) - parseFloat(b.prize.replace(/[^0-9.-]/g, "")));
              break;
            case "High Prize":
              newProducts = newProducts.sort((a, b) => parseFloat(b.prize.replace(/[^0-9.-]/g, "")) - parseFloat(a.prize.replace(/[^0-9.-]/g, "")));
            break;
          default:
            console.warn(`Unhandled filter: ${filter}`);
        }
        setFilteredProducts(newProducts);
      };

  return (
    <>
        <Header />
        <section className='shop-cont'>
            <ul className='filters-cont'>
                {filters.map((elem, i) => {
                    return <li key={i} 
                        className={selectedFilter === elem ? 'active' : 'filter'}
                        onClick={() => handleFilterChange(elem)}>
                        {elem}
                    </li>
                })}
            </ul>
            <ul className='shop-list'>
                {filteredProducts.map((elem) => {
                    return <article key={elem.id} className="feat-box">
                        <div className="feat-img">
                            <img src={`/images/${elem.image}`} alt={elem.product_name} className="in-img"/>
                        </div>
                        <div className="desc-box">
                            <h5 className="feat-title">{elem.product_name}</h5>
                            <span className="feat-prize">{elem.prize}</span>
                        </div>
                  </article>
                })}
            </ul>
        </section>
        <Footer />
    </>
  )
}

export default page