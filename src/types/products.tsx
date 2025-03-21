export interface Product {
  id: string;
  title: string;
  description: string;
  finalPrice: number;
  basePrice: number;
  appliedPrice: number;
  stock: number;
  images: Array<{
    secure_url: string;
    public_id: string;
    _id: string;
    id: string;
  }>;
  category: {
    _id: string;
    name: string;
    id: string;
    image?: {
      secure_url: string;
      public_id: string;
    };
  };
  brand?: {
    _id: string;
    name: string;
    logo?: {
      secure_url: string;
      public_id: string;
    };
  };
  discount?: {
    type: string;
    value: number;
  };
  status?: string;
  rate?: number;
  quantity?: number;
}