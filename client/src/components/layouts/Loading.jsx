import loader from '../../assets/image/loading.png';

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <img src={loader} alt="Loading..." className="loading" />
      </div>
    </>
  );
};

export default Loading;
