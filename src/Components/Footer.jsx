import {Link} from 'react-router-dom'

const Footer =()=>{
    return (<div className="row music-controls">

                <div className="col-10 col-lg-4">

                    <div className="song-info-footer d-flex justify-content-center justify-content-lg-start">
                        {/* <img className="d-none d-xl-block" src="./assets/ckay.jfif" alt=""> */}
                        <div className="d-flex flex-column">
                            <p className="ml-3 mb-0 font-weight-bold">Love Nwantiti (ah ah ah)</p>
                            <p className="ml-3 light-gray-text smaller-text mb-0">CKay</p>
                        </div>
                        <i className="bi bi-heart ml-2"></i>
                    </div>

                </div>

                <div className="col-2 d-lg-none">
                    <i className="bi bi-play-circle-fill"></i>
                </div>
                {/* <!-- <div className="col-3 d-lg-none nav-bar">
                <a href="./profile/profile.html" className="d-flex selected flex-column justify-content-center align-items-center py-2">
                    <i className="bi bi-person-circle mx-3"></i>
                    <p className="d-none d-sm-block mb-0">Account</p>
                </a> 
            </div> --> */}
                <div className="col-3 d-lg-none nav-bar">
                    <Link to="/">
                    <div className="d-flex selected flex-column justify-content-center align-items-center py-2">
                        <i className="bi bi-house-door mx-3"></i>
                        <p className="d-none d-sm-block mb-0">Home</p>
                    </div>
                    </Link>
                </div>

                <div className="col-3 d-lg-none nav-bar">
                    <div  className="d-flex flex-column justify-content-center align-items-center py-2">
                        <i className="bi bi-collection-play mx-3"></i>
                        <p className="d-none d-sm-block mb-0">Your Library</p>
                    </div>
                </div>

                <div className="col-3 d-lg-none nav-bar">
                    <div className="d-flex flex-column justify-content-center align-items-center py-2">
                        <i className="bi bi-vinyl mx-3"></i>
                        <p className="d-none d-sm-block mb-0">Albums</p>
                    </div>
                </div>

                <div className="col-3 d-lg-none nav-bar">
                    <div className="d-flex flex-column justify-content-center align-items-center py-2">
                        <i className="bi bi-music-note-beamed mx-3"></i>
                        <p className="d-none d-sm-block mb-0">Artists</p>
                    </div>
                </div>

                <audio className="audio-play" src="../CKay.mp3">
                </audio>

                <div className="col-12 col-lg-4 d-none d-lg-flex flex-column align-items-center">
                    <div className="music-controls-section d-flex align-items-center">
                        <i className="bi bi-shuffle mx-3 light-gray-text"></i>
                        <i className="bi bi-skip-backward-fill mx-3 light-gray-text"></i>
                        <button type="button" className="music-play-btn btn btn-success"><i
                                className="bi bi-play-circle-fill"></i></button>
                        <button type="button" className="music-pause-btn btn btn-success"><i
                                className="bi bi-pause-circle"></i></button>
                        <i className="bi bi-skip-forward-fill mx-3 light-gray-text"></i>
                        <i className="bi bi-arrow-repeat mx-3 light-gray-text"></i>
                    </div>
                    <div className="track-length d-flex align-items-center">
                        <p className="mb-0 mx-3">0:00</p>
                        <div className="track-bar"></div>
                        <p className="mb-0 mx-3">5:50</p>
                    </div>
                </div>

                <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-end align-items-center">
                    <i className="bi bi-laptop mx-2 light-gray-text"></i>
                    <i className="bi bi-volume-up mx-2 light-gray-text"></i>
                    <div className="volume-bar"></div>
                </div>

            </div>)
}

export default Footer