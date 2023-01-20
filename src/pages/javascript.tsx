import Thumbnail from '../components/thumbnail/thumbnail.component';
import type { NextPage, GetStaticProps } from 'next';
import { IPost } from '../types/post';
import Link from 'next/link';
import { getAllPosts } from '../utils/mdx.utils';

// props type
type Props = {
  posts: [IPost];
};

const JavaScript: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default JavaScript;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'category',
    'description',
    'thumbnail',
  ]);

  // retunr the posts props
  return { props: { posts } };
};
