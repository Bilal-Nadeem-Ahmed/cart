import React, { useState } from 'react';



const COFFEE = 'Coffee Beans';
const GRINDER = 'Coffee Grinders';


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: GRINDER,
      name: 'Niche Zero',
      cost: 499.99,
      image:
        'https://www.baristamagazine.com/wp-content/uploads/2019/11/Niche3-550x733.jpg',
    },
    {
      category: GRINDER,
      name: '1Zpresso JX Pro',
      cost: 149.99,
      image:
        'https://www.bellabarista.co.uk/pub/media/catalog/product/cache/79cfc10c82e6856964a1614dea8e30ef/i/z/izpresso_jx_pro_4.jpg',
    },
    {
      category: COFFEE,
      name: 'Union Bright note 250g',
      cost: 5.99,
      image:
        'https://cdn.shopify.com/s/files/1/0060/6230/9494/products/bright_note_main_image_600x.png?v=1562321328',
    },
    {
      category: COFFEE,
      name: 'ALT Adventurer 200g',
      cost: 10.99,
      image:
        'https://cdn.shopify.com/s/files/1/0541/0642/3494/products/IMG_8441_5228a400-70a6-4719-a4b9-f1796c6d4a5a_2048x2048.jpg?v=1619955398',
    },
    {
      category: COFFEE,
      name: 'Resolute Espresso',
      cost: 7.99,
      image:
        'https://cdn.shopify.com/s/files/1/1097/5586/products/ResoluteV14_TC_1024x1024.jpg?v=1621516511',
    },
    {
      category: COFFEE,
      name: 'Volcano the mount blend',
      cost: 11.99,
      image:
        'https://cdn.shopify.com/s/files/1/2502/9096/products/MicrosoftTeams-image_20_960x.jpg?v=1617812706',
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(COFFEE);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
      
       
        <option value={COFFEE}>{COFFEE}</option>
        <option value={GRINDER}>{GRINDER}</option>

      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>£{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
