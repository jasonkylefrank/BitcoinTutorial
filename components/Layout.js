import Head from 'next/head';
import Navbar from './Navbar';


const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
    </Head>
    <Navbar/>

    <div class="container">
    {props.children}
    </div>
  </div>
);

export default Layout;