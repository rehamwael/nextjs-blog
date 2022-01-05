import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Head from 'next/head'

const IndexView = () => {
  return (
    <>
      <Head>
        <title>Reham Habbas</title>
        <meta name="description" content="Reham Habbas - Front-End Engineer" />
        <meta name="keywords" content="Reham Habbas, Front-End Engineer, UI Developer" />
      </Head>
      <Header />
      <About />
      <Contact />
    </>
  );
};

export default IndexView;