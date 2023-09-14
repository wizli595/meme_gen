import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Display from "./display";
import AllForms from "./allforms";
const MemeForm = () => {
  const [uri, setUri] = useState("");
  const [pack, setpack] = useState({
    Ttext: "",
    Btext: "",
  });

  const { loading, meme, err } = useFetch();
  const getUrl = () => {
    if (err) return;
    const lent = meme.memes.length;
    const ranIndx = Math.floor(Math.random() * lent);
    const url = meme.memes[ranIndx].url;
    setUri(url);
  };

  return (
    <main>
      <AllForms pack={pack} func={setpack} handleClck={getUrl} uri={uri} />
      <div className="meme">
        <p className="top">{pack.Ttext}</p>
        <p className="buttom">{pack.Btext}</p>
        {uri && <Display uri={uri} />}
      </div>
    </main>
  );
};

export default MemeForm;
