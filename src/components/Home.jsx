import { useState } from "react";
import "../App.css";
import Header from "./header";
import Movies from "./movies";
/* import Modal from "./modal"; */

function Home() {
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [ranking, setRanking] = useState("");
  return (
    <div className="container-fluid p-0">
      <Header
        searchedTitle={searchedTitle}
        setSearchedTitle={setSearchedTitle}
        ranking={ranking}
        setRanking={setRanking}
      />

      <div className="App">
        {/* <Modal
          onClose={() => setShow(false)}
          show={show}
          searchedTitle={searchedTitle}
          ranking={ranking}
        /> */}

        <Movies
          searchedTitle={searchedTitle}
          ranking={ranking}
          setShow={setShow}
        />
      </div>
    </div>
  );
}

export default Home;
