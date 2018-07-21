import Layout from '../components/Layout';

const About = () => (
  <Layout>

    <h1>About BitzPrice</h1>

    <p>Application to view Bitcoin prices.</p>

    <p>Built with <strong>React.js</strong> for front-end components. Server-side rendering
       was accomplished using <strong>Next.js</strong>.  I also tried-out using Next.js's JSX
       style option, which lets you write CSS-Module-like styles right in your
       component JSX file (Next.js creates CSS-Module-like classes for you).
    </p>
    <p>
      I followed <a href="https://www.youtube.com/watch?v=IkOVe40Sy0U">this crash course tutorial</a> for the basics of the app.
    </p>
  </Layout>
);

export default About;
