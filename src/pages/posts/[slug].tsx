import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { useMdxComponentsContext } from '../../context/mdx.context';
import Thumbnail from '../../components/thumbnail/thumbnail.component';
import { IPost } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdx.utils';
import Prerequisites from '../../components/prerequisites/prerequisites.component';
import { ParsedUrlQuery } from 'querystring';
import Stacks from '../../components/stacks/stacks.component';
import styles from './../../styles/post.module.css';
// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
};

// components to render
const components = {
  Prerequisites,
  Stacks,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  // get setters
  const { setPrerequisites, setStacks } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    setPrerequisites(frontMatter.prerequisites);
    // set stacks
    setStacks(frontMatter.stacks);
  }, [
    setPrerequisites,
    setStacks,
    frontMatter.prerequisites,
    frontMatter.stacks,
  ]);

  return (
    <div>
      <article>
        {/* <div className='mb-4'>
          <Image
            height={720}
            width={1280}
            alt={`Thumbnail cover image ${frontMatter.title}`}
            src={frontMatter.thumbnail}
            className={styles.feature_img}
          />
        </div> */}
        <div className='max-w-3xl mx-auto'>
          <h1 className={`text-4xl font-bold mb-2`}>{frontMatter.title}</h1>
          <p className='text-lg mb-4'>{frontMatter.description}</p>

          <div className={`${styles.mdx_content}`}>
            <MDXRemote components={components} {...source} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(['slug']);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
