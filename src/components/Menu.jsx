export function Menu() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-container">
          <a href="/">Home</a>
          <a href="#/stock">Stock</a>
          <a href="#/burgers">Burgers</a>
          <a href="#/orders">Orders</a>
          <div class="logo">
            <i class="fas fa-hamburger"></i>
            <h1>Burger Store</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
