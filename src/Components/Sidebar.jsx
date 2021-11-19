import { Link } from "react-router-dom";
import spotifylogo from "../assets/spotify-logo.png";

const Sidebar = () => {
  return (
    <div className="col-12 d-none d-lg-block">
      <div className="row">
        <div className="side-bar col-12 px-0">
          <Link to="/">
            <img
              className="spotify-logo"
              src={spotifylogo}
              alt="sidebar-logo"
            />
          </Link>
          <Link to="/">
            <div className="nav-link d-flex selected py-2">
              <i className="bi bi-house-door mx-3"></i>
              <p>Home</p>{" "}
            </div>
          </Link>
          <div className="nav-link d-flex  py-2">
            <i className="mx-3 bi bi-search"></i>
            <p>Search</p>
          </div>

          <div className="nav-link d-flex py-2">
            <i className="bi bi-collection-play mx-3"></i>
            <p>Your Library</p>
          </div>

          <Link to="/album">
            <div className="nav-link d-flex py-2">
              <i className="bi bi-vinyl mx-3"></i>
              <p>Albums</p>
            </div>
          </Link>

          <Link to="/artist">
            <div className="nav-link d-flex py-2">
              <i className="bi bi-music-note-beamed mx-3"></i>
              <p>Artists</p>
            </div>
          </Link>
          <div className="nav-link d-flex py-2">
            <i className="bi bi-heart-fill mx-3"></i>
            <p>Liked Songs</p>
          </div>

          <div className="nav-link d-flex py-2">
            <i className="bi bi-person-circle mx-3"></i>
            <p>Account</p>
          </div>

          <hr className="border-secondary d-none d-xl-block" />
          {/* <div class="other-links d-none d-xl-flex flex-column">
                                    <a href="#good-morning-h3">Good Morning</a>
                                    <a href="#recently-played-h4">Recently Played</a>
                                    <a href="#shows-to-try-h4">Shows To Try</a>
                                    <a href="#more-of-what-you-like-h4">More Of What You Like</a>
                                    <a href="#hits-h4">Hits</a>
                                    <a href="#the-best-of-2020-h4">The Best of 2020</a>
                                    <a href="#jump-back-in-h4">Jump Back In</a>
                                    <a href="#for-fans-of-sanah-h4">For Fans Of Sanah</a>
                                    <a href="#">Your Top songs 2020</a>
                                    <a href="#">In Love With You-Erykah B..</a>
                                    <a href="#">FRANCHISE ft.Young Thig...</a>
                                    <a href="#">This is road Stewart</a>
                                    <a href="#">Your Top Songs 2019</a>
                                    <a href="#">Metal Ballades</a>
                                    <a href="#">Jazz Classics Blue Note...</a>
                                    <a href="#" class="light-gray-text"><i class="bi bi-arrow-down-circle"> </i>Install
                                        app</a>
                                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
