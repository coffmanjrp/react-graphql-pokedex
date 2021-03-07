import { CgPokemon } from 'react-icons/cg';
const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar mb-5">
        <div />
        <h1>
          {title}
          <CgPokemon />
        </h1>
        <div />
      </div>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Pokedex',
};

export default Navbar;
