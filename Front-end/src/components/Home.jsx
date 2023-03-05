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
    <React.StrictMode>
      <SitesList setCurrentSite={setCurrentSite} sites={sites} />
    </React.StrictMode>
  );
}

export default Home;