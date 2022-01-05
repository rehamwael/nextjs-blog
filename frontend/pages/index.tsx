import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Head from 'next/head'

const IndexView = () => {
  return (
    <>
      <Head>
        <title>Reham Habbas</title>
      </Head>
      <Header />
      <About />
      <Contact />
    </>
  );
};

export default IndexView;