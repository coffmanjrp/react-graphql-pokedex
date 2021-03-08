import { CgPokemon } from 'react-icons/cg';
import { FaChevronLeft } from 'react-icons/fa';
import { Sidebar } from './';

const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar mb-5">
        <FaChevronLeft />
        <h1>
          {title}
          <CgPokemon />
        </h1>
        <Sidebar />
      </div>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Pokedex',
};

export default Navbar;
