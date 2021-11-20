import Song from "./Song";


const MainSongContainer = (props) => {





  return (
    <>
      <div className="row" id="album1">
        <div className="col-12 hp-sub-hero">
          <div className="d-flex justify-content-between mt-4 mb-3">
            <h4 id="shows-to-try-h4">Albums</h4>
            <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
          </div>
          <div
            className="row d-flex justify-content-center"
            
          >

            <Song />
          </div>
        </div>
      </div>
      
    </>
  );
};
export default MainSongContainer;
