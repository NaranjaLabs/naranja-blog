type Base = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  publishedAt: string;
}

interface Category extends Base {
  description: string;
  title: string;
  slug: Slug;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
  linkedin: string;
  github: string;
}

interface Banner extends Base {
  name: string;
  image: Image;
  link?: string;
}
interface Image {
  _type: 'image';
  asset: Reference;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Title {
  _type: 'string';
  current: string;
}
