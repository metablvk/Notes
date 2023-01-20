import Thumbnail from '../components/thumbnail/thumbnail.component';
import type { NextPage, GetStaticProps } from 'next';
import { IPost } from '../types/post';
import Link from 'next/link';
import { getAllPosts } from '../utils/mdx.utils';

// props type
type Props = {
  posts: [IPost];
};

const HTML: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <div>
        {/* {posts
          .filter((post) => {
            return post.category === 'HTML';
          })
          .map((post) => (
            <div key={post.slug}>
              <h2>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default HTML;

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
