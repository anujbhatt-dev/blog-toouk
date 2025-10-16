export type CategorySchema = {
    id: number;
    name: string;
    slug: string;
  };

  export type PostSchema = {
    id: number;
    title: string;
    slug: string;
    description:string;
    category:string;
    image:string;
    date:string;
  };


export type WPPost = {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    categories: number[];
  };
  
export type WPCategory = {
    id: number;
    name: string;
    slug: string;
  };


  export interface User {
    id: string;
    email: string;
    username: string;
    role: Role;
    isActive: boolean;
  }
  