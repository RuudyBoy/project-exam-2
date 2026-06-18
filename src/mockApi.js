import axios from 'axios';

const hotelsData = [
  {
    id: 1,
    attributes: {
      hotel: "Grand Ocean Resort",
      price: 1500,
      rating: 9.5,
      text: "Experience luxury by the sea with stunning ocean views and premium amenities.",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" } } }
    }
  },
  {
    id: 2,
    attributes: {
      hotel: "Mountain View Lodge",
      price: 1200,
      rating: 8.8,
      text: "A cozy retreat nestled in the mountains, perfect for nature lovers.",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1551882547-ff40eb0d1e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" } } }
    }
  },
  {
    id: 3,
    attributes: {
      hotel: "City Center Inn",
      price: 900,
      rating: 7.9,
      text: "Conveniently located in the heart of the city, close to all major attractions.",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" } } }
    }
  }
];

const enquiriesData = [
  {
    id: 1,
    attributes: {
      name: "John Doe",
      email: "john@example.com",
      arrival: "2023-10-01",
      departure: "2023-10-07",
      information: "Looking forward to our stay. Any vegan options at breakfast?"
    }
  }
];

const messagesData = [
  {
    id: 1,
    attributes: {
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Can you provide more details about the spa services?"
    }
  }
];

// Mock fetch
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;
  
  if (url) {
    if (url.includes('hotels?populate=*')) {
      return { ok: true, json: async () => ({ data: hotelsData }) };
    }
    
    if (url.includes('hotels/') && !url.includes('?')) {
      const idMatch = url.match(/hotels\/(\d+)/);
      if (idMatch) {
        const id = parseInt(idMatch[1], 10);
        const hotel = hotelsData.find(h => h.id === id);
        if (hotel) {
          return { ok: true, json: async () => ({ data: hotel }) };
        }
      }
    }
    
    if (url.includes('enquiries')) {
      return { ok: true, json: async () => ({ data: enquiriesData }) };
    }
    
    if (url.includes('messages')) {
      return { ok: true, json: async () => ({ data: messagesData }) };
    }
  }
  
  return originalFetch(...args);
};

// Mock axios.post
const originalPost = axios.post;
axios.post = async (url, data, config) => {
  if (url) {
    if (url.includes('auth/local')) {
      // Simulate successful login
      return { data: { jwt: "fake-jwt-token-123", user: { username: "admin" } } };
    }
    if (url.includes('hotels')) {
      // Fake successful hotel creation
      return { data: { data: { id: 4, attributes: { ...data.data } } } };
    }
    if (url.includes('messages')) {
      // Fake successful message creation
      return { data: { data: { id: 2, attributes: { ...data.data } } } };
    }
    if (url.includes('enquiries')) {
      // Fake successful enquiry creation
      return { data: { data: { id: 2, attributes: { ...data.data } } } };
    }
  }
  
  return originalPost(url, data, config);
};
