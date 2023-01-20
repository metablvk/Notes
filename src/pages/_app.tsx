import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout.component';
import './../styles/globals.css';
import { MdxComponentsProvider } from '../context/mdx.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}

export default MyApp;
