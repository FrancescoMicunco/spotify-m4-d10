import {Button} from 'react-bootstrap'


const Login = ()=>{
return (
  <div className="account">
    <div className="btn-group">
      
      <Button
        className="btn btn-sm bg-black dropdown-toggle rounded-pill"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-circle mr-1 pb-1"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>{" "}
        Your Name
      </Button>
      <div className="dropdown-menu">
        <p id="toggle-theme" className="mb-0">
          Change Theme
        </p>
      </div>
    </div>
  </div>
);

}
export default Login
