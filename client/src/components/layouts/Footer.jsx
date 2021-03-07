const Footer = () => {
  return (
    <>
      <div className="flex-container py-6">
        <small>
          Pokémon and All Respective Names are Trademark and &copy; of Pokémon
          co./Nintendo/Creatures Inc./GAME FREAK inc. 1995-
          {new Date().getFullYear()}
        </small>
      </div>
    </>
  );
};

export default Footer;
