import Header from '../header/header.component';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div>
        <Header />
        <main className={`py-8 px-8 max-w-6xl mx-auto`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
