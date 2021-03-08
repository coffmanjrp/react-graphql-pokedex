import { useLocation, useHistory } from 'react-router-dom';
import { CgPokemon } from 'react-icons/cg';
import { FaChevronLeft } from 'react-icons/fa';
import { Sidebar } from './';

const Navbar = ({ title }) => {
  const location = useLocation();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="navbar mb-5">
        <div>
          {location.pathname !== '/' ? (
            <a href="#!" onClick={handleGoBack}>
              <FaChevronLeft />
            </a>
          ) : (
            ''
          )}
        </div>
        <h1>
          {title}
          <CgPokemon />
        </h1>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
