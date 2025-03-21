export interface Category {
  id: string;
  name: string;
  image?: {
    secure_url: string;
    public_id: string;
  };
  brands?: Array<{
    id: string;
    name: string;
    logo: {
      secure_url: string;
      public_id: string;
    };
  }>;
}
