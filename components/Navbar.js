import Link from 'next/link';

const Navbar = () => {

  const urls = {
    'home': '/',
    'about': '/about'
  };
  const backendURL = process.env.BACKEND_URL;

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
