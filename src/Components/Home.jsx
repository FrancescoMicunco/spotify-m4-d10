import { Row } from "react-bootstrap";
import MainSongContainer from "./MainSongContainer";
import MainContainer from "./MainContainer";
import { useState } from "react";

const artists = [
  ["1562681", "13", "12246", "246791", "564"],
  ["12178", "5306539", "4104927", "1188", "384236"],
  ["9507694", "9236850", "4794268", "8706544", "12088868"],
  ["293585", "75798", "11152580", "429675", "145"],
];

const albums = [
  ["86773062", "104188", "9007781", "69319552", "119606"],
  ["11848922", "8990105", "15478674", "3791241", "13680908"],
  ["14400090", "267291462", "182811182", "119043862", "41728321"],
  ["9188269", "746059", "244223", "739505", "231552772"],
];

const Home = () => {
  const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="container-fluid">
        <Row>
          <MainContainer
            type={queryType}
            query={query}
            setQueryType={setQueryType}
            setQuery={setQuery}
          />
          <MainSongContainer artists={artists}/>
          <MainSongContainer albums={albums}/>
        </Row>
      </div>
    </>
  );
};

export default Home;
