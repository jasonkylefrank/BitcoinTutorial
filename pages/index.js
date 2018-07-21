import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = (props) => {
  console.log(props);



  return (
    <Layout>

      <h1>Welcome to BitzPrice</h1>

      <div>
        {/* {props.USD.rate} */}
        {props.data.bpi.USD.rate}

      </div>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  const data = await res.json();

  // console.log("Hello from getInitialProps()");
  // console.log(data);
  // debugger;

  return {
    //data.bpi
    data
  };
};

export default Index;
