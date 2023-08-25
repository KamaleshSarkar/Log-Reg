import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Navbar = () => {
    const [image, setImage] = useState()
    useEffect(() => {
        axios
          .get('http://localhost:2015/api/fetchData')
          .then((res) => setImage(res.data.data[0].image))
          
          .catch((err) => console.log(err))
      }, [])

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <p
            style={{
              marginLeft: "50%",
              fontWeight: "bold",
              color: "whitesmoke",
              fontFamily: "Josefin Sans'",
              fontSize: "18px",
            }}
          >
            Kamalesh Sarkar
          </p>
          <img
            style={{
              height: "60px",
              width: "62px",
              borderRadius: "50%",
              marginLeft: "5%",
            }}
            src={`http://localhost:2015/uploads/image%201690644432014myimg.jpg`}
                     
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
