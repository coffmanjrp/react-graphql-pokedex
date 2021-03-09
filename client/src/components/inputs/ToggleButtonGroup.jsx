const ButtonGroup = ({ labels }) => {
  return (
    <>
      <div className="btn-group btn-group-toggle btn-block">
        {labels.length > 0 &&
          labels.map((label, index) => (
            <button className="btn btn-secondary" key={index}>
              {label}
            </button>
          ))}
      </div>
    </>
  );
};

export default ButtonGroup;
