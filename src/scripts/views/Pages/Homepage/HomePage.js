const HomePage = {
  async render() {
    return `
        <div class="container">
            <h2>Welcome to Our Website</h2>
            <p>Discover amazing content, services, and products.</p>
            <a href="/products" class="btn btn-primary">Explore Products</a>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
