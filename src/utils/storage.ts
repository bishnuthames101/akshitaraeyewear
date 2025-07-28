// Utility functions for offline storage
export class OfflineStorage {
  private static readonly CART_KEY = 'asia-eye-care-cart';
  private static readonly FAVORITES_KEY = 'asia-eye-care-favorites';
  private static readonly PRODUCTS_KEY = 'asia-eye-care-products';

  // Cart operations
  static saveCart(cart: any[]) {
    try {
      localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }

  static getCart(): any[] {
    try {
      const cart = localStorage.getItem(this.CART_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Failed to load cart:', error);
      return [];
    }
  }

  // Favorites operations
  static saveFavorites(favorites: string[]) {
    try {
      localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }

  static getFavorites(): string[] {
    try {
      const favorites = localStorage.getItem(this.FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Failed to load favorites:', error);
      return [];
    }
  }

  // Product catalog caching
  static saveProducts(products: any[]) {
    try {
      const data = {
        products,
        timestamp: Date.now()
      };
      localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save products:', error);
    }
  }

  static getProducts(): any[] {
    try {
      const data = localStorage.getItem(this.PRODUCTS_KEY);
      if (!data) return [];

      const parsed = JSON.parse(data);
      const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000; // 24 hours

      if (isExpired) {
        localStorage.removeItem(this.PRODUCTS_KEY);
        return [];
      }

      return parsed.products || [];
    } catch (error) {
      console.error('Failed to load products:', error);
      return [];
    }
  }

  // Clear all offline data
  static clearAll() {
    try {
      localStorage.removeItem(this.CART_KEY);
      localStorage.removeItem(this.FAVORITES_KEY);
      localStorage.removeItem(this.PRODUCTS_KEY);
    } catch (error) {
      console.error('Failed to clear offline data:', error);
    }
  }
}