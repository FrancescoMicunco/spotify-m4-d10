const Artist = () => {
  return (
<div className="col-12 px-0 mx-0 col-lg-10 main-page-content">
                    <div className="row album-img-header">
                        <div className="col-12">
                            <div className="album-header-image">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex mb-3">
                                    <div className="d-flex hp-hero-top circle-top mr-3">
                                        <div className="triangle-top-l"></div>
                                    </div>
                                    <div className="d-flex hp-hero-top circle-top">
                                        <div className="triangle-top-r"></div>
                                    </div>
                                </div>
                                <div className="account">
                                    <div className="btn-group">
                                        <button className="btn btn-sm bg-black dropdown-toggle rounded-pill" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                            </svg> Your Name
                                        </button>
                                        <div className="dropdown-menu">
                                            ...
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="album-info">
                                <p className="artist-name"><strong>Queen</strong></p>
                            </div>

                            </div>
                        </div>
                    </div>
</div>





  )
};

export default Artist;
