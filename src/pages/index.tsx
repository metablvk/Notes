import Thumbnail from '../components/thumbnail/thumbnail.component';
import type { NextPage, GetStaticProps } from 'next';
import { IPost } from '../types/post';
import Link from 'next/link';
import { getAllPosts } from '../utils/mdx.utils';
import styles from './../styles/home.module.css';
// props type
type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <h2 className='text-5xl font-medium mb-4'>HTML</h2>
      <div className={`${styles.posts_container}`}>
        {posts
          .filter((post) => post.category === 'HTML')
          .map((post) => (
            <div key={post.slug} className={`mb-6 ${styles.post}`}>
              <div className='mb-4'>
                <Thumbnail
                  slug={post.slug}
                  title={post.title}
                  src={post.thumbnail}
                />
              </div>
              <h2 className='text-2xl mb-2 font-normal'>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

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
