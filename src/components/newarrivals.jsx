import '../styles/Header.css';
import React, { useState } from "react";
import { Button, Container , Card} from "react-bootstrap";
import '../styles/NewArrivals.css'

const products = [
    {
        id: 1,
        category: 'Beside Table',
        name: 'Savannah Beside Table',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/mirror.png"
    },
    {
        id: 2,
        category: 'Beside Table',
        name: 'Savannah Beside Table',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 3,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/mirror1.png"
    },
    {
        id: 4,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/dressingtable1.png"
    },
    {
        id: 5,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/armchair1.png"
    },
    {
        id: 6,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/armchair.png"
    },
    {
        id: 7,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 8,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 9,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 10,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 11,
        category: 'Beside Table',
        name: 'Savannah Beside Table',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/mirror.png"
    },
    {
        id: 12,
        category: 'Beside Table',
        name: 'Savannah Beside Table',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 13,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/mirror1.png"
    },
    {
        id: 14,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/dressingtable1.png"
    },
    {
        id: 15,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/armchair1.png"
    },
    {
        id: 16,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/armchair.png"
    },
    {
        id: 17,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
    {
        id: 18,
        category: 'Mirror',
        name: 'Aurore Mirror',
        material: 'Wood',
        dimension: "50-80cm",
        price: "49,5$",
        image: "../../public/bsdtable.png"
    },
   
];

function newarrivals() {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [visibleIndex, setVisibleIndex] = useState(0); // Indice pour les images visibles

    const handleNext = () => {
        
        if (visibleIndex + 8 < products.length) {
            setVisibleIndex(visibleIndex + 8);
        }
    };

    const handlePrev = () => {
        
        if (visibleIndex >= 8) {
            setVisibleIndex(visibleIndex - 8);
        }
    };

    return (
        <Container className="mt-4 position-relative">
            <h3 className="newarrivals">New Arrivals</h3>

           
            <button className="btn1 position-absolute start-0" onClick={handlePrev}>&lt;</button>

           
            <div className="carousel d-flex justify-content-center overflow-auto mb-4 gap-3">
                {products.slice(visibleIndex, visibleIndex + 8).map((prod) => (
                    <img
                        key={prod.id}
                        src={prod.image}
                        alt={prod.name}
                        width="100"
                        height="100"
                        className={` ${selectedProduct.id === prod.id ? "selecteditem" : "unselecteditem"}`}
                        onClick={() => setSelectedProduct(prod)}
                        style={{ cursor: "pointer" }}
                    />
                ))}
            </div>

           
            <button className="btn2 position-absolute end-0" onClick={handleNext}>&gt;</button>


            <div className="selected-product-card d-flex flex-row overflow-hidden">
               <div className="card-img-container">
                    <img
                       src={selectedProduct.image}
                        alt={selectedProduct.name}
                         className=" .card-image h-100 w-200 "
                     />
                </div>
                <div className="d-flex flex-column justify-content-center px-4 w-100">
                 <h5>{selectedProduct.name}</h5>
                 <div>
                 <p><strong>Material:</strong> {selectedProduct.material}</p>
                 <p><strong>Dimension:</strong> {selectedProduct.dimension}</p>
                 <p><strong>Price:</strong> {selectedProduct.price}</p>
                 <p><strong>Color:</strong> <span style={{
                  backgroundColor: "#e7d6bc",
                  borderRadius: "50%",
                  display: "inline-block",
                  width: "20px",
                  height: "20px"
      }}></span></p>
    </div>
    <div className="d-flex gap-2 mt-2">
      <button className="btn btn-outline-secondary">💬 Comment</button>
      <button className="btn btn-dark">🛒 Add to cart</button>
    </div>
  </div>
</div>


        </Container>
    );
}

export default newarrivals;
