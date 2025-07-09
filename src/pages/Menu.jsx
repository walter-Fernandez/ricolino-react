import React, { useState } from 'react';
import '../App.css';

const menuItems = [
  { name: 'Taco Al Pastor', description: 'Marinated pork with pineapple', price: 3.50 },
  { name: 'Carne Asada Taco', description: 'Grilled steak with salsa', price: 3.75 },
  { name: 'Chicken Enchiladas', description: 'With green tomatillo sauce', price: 8.50 },
  { name: 'Cheese Quesadilla', description: 'Grilled flour tortilla with cheese', price: 5.00 },
  { name: 'Churros', description: 'Fried-dough pastry with cinnamon sugar', price: 3.00 },
  { name: 'Horchata', description: 'Traditional rice drink with cinnamon', price: 2.50 },
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = cart.find((i) => i.name === item.name);
    if (exists) {
      setCart(cart.map((i) => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map((item) => item.name === name ? { ...item, quantity } : item));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="menu-container" style={{ backgroundColor: '#fff3e0', padding: '2rem' }}>
      <h2 className="text-center" style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Menu</h2>

      <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.name}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{item.description}</p>
            <p style={{ color: '#ff5722', fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)} style={{ marginTop: '0.5rem', backgroundColor: '#ff5722', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '5px' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart" style={{ marginTop: '3rem' }}>
        <h3 style={{ fontWeight: 'bold' }}>Shopping Cart</h3>
        {cart.length === 0 ? <p>Your cart is empty.</p> : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                <strong>{item.name}</strong> x
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.name, parseInt(e.target.value))}
                  style={{ width: '50px', margin: '0 0.5rem' }}
                />
                = ${(item.price * item.quantity).toFixed(2)}
                <button onClick={() => removeFromCart(item.name)} style={{ marginLeft: '1rem', background: 'red', color: 'white', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '5px' }}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p style={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-container {
            padding: 1rem;
          }
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .menu-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Menu;
