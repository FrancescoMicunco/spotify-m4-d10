import { useState } from "react";
import ForwardRew from "./ForwardRew";
import Login from "./Login";
import SubTitleJumbo from "./SubTitleJumbo";
import SearchField from "./SearcField";
import SmallCard from "./SmallCard";



const MainContainer = () => {
  const [searched, setSearched] = useState("Artist");
  return (
    <div className="col-12 main-page-content">
      <div className="row">
        <div className="col-12 hp-hero pt-2">
          <div className="d-none d-md-flex justify-content-between">
            <ForwardRew /> {/*here the arrows on the top of the page */}
            <div>
              <SearchField searched={searched} setSearched={setSearched} />
            </div>
            <Login />
          </div>
          <h3 id="good-morning-h3">
            <strong>Good morning</strong>
          </h3>

          <div className="good-morning-container row ml-2">
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            <SmallCard title={"Rolling Stones"} />
            {/* <SmallCard title={"Beatles"} />
            <SmallCard title={"Depeche Mode"} />
            <SmallCard title={"the Cranberries"} /> */}
          </div>
        </div>
      </div>
      <SubTitleJumbo title={searched} />
    </div>
  );
};

export default MainContainer;
