import { create } from "zustand";
import { Product } from "@/utils/api";

export interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  cart: CartProduct[];
  favorites: Product[]; // ✅ רשימת מועדפים
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;

  // ✅ פונקציות מועדפים
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
}

const getCartFromStorage = (): CartProduct[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    if (stored) return JSON.parse(stored);
  }
  return [];
};

const getFavoritesFromStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("favorites");
    if (stored) return JSON.parse(stored);
  }
  return [];
};

// ✅ יצירת ה-Store עם פונקציות חישוב ומועדפים
export const useCartStore = create<CartState>((set, get) => ({
  cart: getCartFromStorage(),
  favorites: getFavoritesFromStorage(),

  addToCart: (product, quantity = 1) => {
    const cart = get().cart;
    const existing = cart.find((p) => p.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      );
    } else {
      newCart = [...cart, { ...product, quantity }];
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    set({ cart: newCart });
  },

  removeFromCart: (id) => {
    const newCart = get().cart.filter((p) => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    set({ cart: newCart });
  },

  updateQuantity: (id, quantity) => {
    let newCart;
    if (quantity <= 0) {
      newCart = get().cart.filter((p) => p.id !== id);
    } else {
      newCart = get().cart.map((p) => (p.id === id ? { ...p, quantity } : p));
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    set({ cart: newCart });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  getTotalItems: () =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),

  getTotalPrice: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  // =====================
  // ✅ פונקציות מועדפים
  addToFavorites: (product) => {
    const favorites = get().favorites;
    const exists = favorites.some((p) => p.id === product.id);
    const newFavorites = exists ? favorites : [...favorites, product];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  removeFromFavorites: (id) => {
    const newFavorites = get().favorites.filter((p) => p.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },
}));
