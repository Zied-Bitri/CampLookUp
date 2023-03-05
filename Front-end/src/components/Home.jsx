
//import { color } from '@mui/system';
import React, { useEffect } from "react";
import UserService from "../services/user.service";
import SitesList from "../components/SitesList.jsx";
import AuthService from "../services/auth.service";

const Home = ({sites, setCurrentSite}) => {
//setCurrentUser(undefined);
AuthService.logout();
 /* useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setSites(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setSites(_content);
      }
    );
  }, []);*/
  return (

    <div className="home">
      <header>
        <h1>Welcome Campers</h1>
        <h4>Choose your favorite <span>Camping Sites</span></h4>
      </header>

        <div className="feature">
          <img src="https://cdn.big4.com.au/getmedia/f2b92ba3-169b-4816-b055-84f3272d2040/Hero_379.jpg"  />
        </div>

       
      <section className="call-to-action">
        <h3>Ready to start camping?</h3>
        <p>Book your site today!</p>
        <button>Book Now</button>
      </section>
    </div>

  );
}

export default Home;
