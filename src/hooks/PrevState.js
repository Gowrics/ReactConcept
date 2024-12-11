import React, { useState } from 'react';
import img1 from '../assets/img/authors/1.jpg';
function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <><p>Now you see me!</p>
        <img src={img1} alt='Author' />
      </>
      }
    </div>
  );
}

export default ToggleComponent;













/*import React, { useState } from 'react';
const ShoppingCart = () => {
  const [cart, setCart] = useState(0);

  const addItem = (quantity) => {
    setCart(prevState => prevState + quantity); // Update based on previous state
  };

  const resetCart = () => {
    setCart(0); // Reset cart to 0
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Items in Cart: {cart}</h1>
      <button onClick={() => addItem(1)} style={{ margin: '5px', padding: '10px' }}>
        Add 1 Item
      </button>
      <button onClick={() => addItem(5)} style={{ margin: '5px', padding: '10px' }}>
        Add 5 Items
      </button>
      <button onClick={resetCart} style={{ margin: '5px', padding: '10px' }}>
        Reset Cart
      </button>
    </div>
  );
};

export default ShoppingCart;

*/