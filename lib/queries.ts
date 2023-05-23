import { groq } from 'next-sanity';

import { client } from './sanity.client';
type Query = string;
type Slug = string;

const dataFetch = (query: Query, slug?: Slug) => {
  try {
    if (slug) return client.fetch(query, { slug });
    return client.fetch(query);
  } catch (err) {
    throw new Error('Ops, algo deu errado!');
  }
};

export const sanityQueries = {
  posts: () => {
    const query = groq`*[_type == 'post'] {
      ...,
      author->,
      categories[]->
    }`;
    return dataFetch(query);
  },
  postBySlug: (slug: Slug) => {
    const query = groq`*[_type == 'post' && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }`;
    return dataFetch(query, slug);
  }
};
