import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import background from "../../assets/background.png";
import { textAlign } from "@mui/system";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("usergunjan");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/home");
        }
      }
    }
  };

  return (
    <>
      <div
        className="container mt-3 d-flex justify-content-between align-items-center"
        style={{  height: "90vh",width:"100%" }}
      >
        <div className="background">
          <img
            src={background}
            style={{ width: "350px", height: "350px"}}
          />
        </div>
        <section className="d-flex justify-content-center align-items-center">
          <div
            className="left_data mt-3 p-3"
            style={{
              width: "100%",
              height: "70%",
              border: "2px solid black",
              color: "white",
              background: "#480d2f",
              borderRadius: "20px",
              boxShadow: "10px 10px 10px black",
              
            }}
          >
            <h3 className="text-center col-lg-6">Log In</h3>
            <Form style={{ padding: "20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6 text-center"
                onClick={addData}
                style={{
                  background: "rgb(67, 185, 127)",
                  margin:"2px auto",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't Have an Account{" "}
              <span>
                <NavLink to="/register">Register</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
