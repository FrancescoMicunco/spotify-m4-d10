const SubTitleJumbo =(props)=>{

return (

<div className="row" id="artist1">
  <div className="col-12 hp-sub-hero">
    <div className="d-flex justify-content-between mt-4 mb-3 mx-0">
      <h4 id="recently-played-h4">{props.title}</h4>
      <p className="hp-tag light-gray-text font-weight-bold">SEE ALL</p>
    </div>
    <div
      className="row d-flex justify-content-center"
      id="artistContainer1"
    ></div>
  </div>
</div>

)
}

export default SubTitleJumbo