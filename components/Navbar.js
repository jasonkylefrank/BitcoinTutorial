import Link from 'next/link';
import { assetPrefix } from '../next.config';

const Navbar = () => {

  const urls = {
    'home': '/',
    'about': '/about'
  };
  // ----- "BACKEND URL" APPROACH #1 ---------
  // This approach requires the use of the
  //  "babel-plugin-transform-define" babel plugin, which in turn
  //  requires a .babelrc.js file and an env.config.js file to define
  //  the constant.
  //const backendURL = process.env.BACKEND_URL;

  // ----- "BACKEND URL" APPROACH #2 ---------
  // This approach for getting the backendURL just pulls the reponame
  //  from a variable that we need for Next.js anyway.
  const backendURL = assetPrefix;

  return (
    <div>
      <ul>
        <li><Link href={urls.home}
                  as={backendURL + urls.home}
                  >
              <a>Home</a>
            </Link>
        </li>
        <li><Link href={urls.about}
                  as={backendURL + urls.about}
                  >
              <a>About</a>
            </Link>
        </li>
      </ul>

      <style jsx>{`
          ul {
            background: #333;
            color: white;
            list-style: none;
            display: flex;
          }

          li {
            font-size: 18px;
            margin-right: 20px;
          }

          a {
            color: #fff;
            text-decoration: none;
          }

      `}</style>

    </div>
  )
};

export default Navbar;
