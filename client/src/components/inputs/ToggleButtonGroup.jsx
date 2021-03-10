const ButtonGroup = ({ labels, onClick }) => {
  return (
    <>
      <div className="btn-group btn-group-toggle btn-block">
        {labels.length > 0 &&
          labels.map((label, index) => (
            <button
              className="btn btn-secondary"
              value={label.toLowerCase()}
              key={index}
              onClick={onClick}
            >
              {label}
            </button>
          ))}
      </div>
    </>
  );
};

export default ButtonGroup;
