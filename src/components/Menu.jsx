export function Menu() {
  return (
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo-img">
            <i class="fas fa-hamburger"></i>
          </div>
          <div class="logo">
            <h1>Burger Store</h1>
          </div>
          <div class="menu-items">
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/stock">Stock</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
