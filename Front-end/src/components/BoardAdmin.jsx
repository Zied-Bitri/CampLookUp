import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import SitesList from "./SitesList.jsx";
import UserService from "../services/user.service";

const BoardAdmin = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setSites(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header>
      <Header/>
      </header>
      <SitesList sites={sites}/>
    </div>
  );
};

export default BoardAdmin;