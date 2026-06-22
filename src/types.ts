export interface MenuItem {
  id: string;
  category: 'Coffee' | 'Bakery' | 'Food';
  name: string;
  price: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}
