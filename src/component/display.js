const Display = ({ uri }) => {
  return (
    <div className="box">
      <img src={uri} alt="meme" className="box--meme" />
    </div>
  );
};

export default Display;
