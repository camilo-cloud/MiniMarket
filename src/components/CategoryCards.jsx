import "./CategoryCards.css";
import { Link } from "react-router-dom";

import cleaningCategory from "../assets/images/cleaning_category.PNG";
import dairyCategory from "../assets/images/dairy_category.PNG";
import drinksCategory from "../assets/images/drinks_category.PNG";
import fruitsCategory from "../assets/images/Fruits_category.PNG";

export default function CategoryCards() {
    const categories = [
        { id: 1, img: cleaningCategory, alt: "Cleaning", link: "/products?category=cleaning" },
        { id: 2, img: dairyCategory, alt: "Dairy & Eggs", link: "/products?category=dairy" },
        { id: 3, img: drinksCategory, alt: "Drinks", link: "/products?category=drinks" },
        { id: 4, img: fruitsCategory, alt: "Fruits & Vegetables", link: "/products?category=fruits" },
    ];

    return (
        <section className="category">
            <h2 className="category__container-title">Need something for your home today?</h2>
            <div className="category__container">
                {categories.map(cat => (
                    <Link key={cat.id} to={cat.link} className="category__image-container">
                        <img src={cat.img} alt={cat.alt} />
                    </Link>
                ))}
            </div>
        </section>
    );
}
