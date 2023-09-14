const AllForms = ({ pack, func, handleClck, uri }) => {
  return (
    <div className="form">
      <div className="inps">
        <input
          type="text"
          placeholder="enter top text ..."
          readOnly={uri ? false : true}
          value={pack.Ttext}
          onChange={(e) => {
            func((prPack) => ({ ...prPack, Ttext: e.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="enter buttom text ..."
          readOnly={uri ? false : true}
          value={pack.Btext}
          onChange={(e) => {
            func((prPack) => ({ ...prPack, Btext: e.target.value }));
          }}
        />
      </div>
      <button onClick={handleClck}>Get a new meme image</button>
    </div>
  );
};

export default AllForms;
