import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
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

    const { name, email, username, password, mobile } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email  is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Please enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password  is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else if (mobile === "") {
      toast.error("Mobile number  is requred", {
        position: "top-center",
      });
    } else if (mobile.length < 10) {
      toast.error("Please enter valid Mobile Number", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/");
      localStorage.setItem("usergunjan", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div
            className="left_data mt-3 p-3"
            style={{
              width: "50%",
              border: "2px solid black",
              borderRadius: "20px",
              justifyContent: "center",
              margin: "auto",
              background: "#480d2f",
              color: "white",
              boxShadow: "10px 10px 10px black",
            }}
          >
            <h3 className="text-center col-lg-6">Register</h3>
            <Form style={{ padding: "5px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Full Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="phone"
                  name="mobile"
                  onChange={getdata}
                  placeholder="Enter Mobile Number"
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
                  placeholder="Enter Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{
                  background: "rgb(67, 185, 127)",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Already Have an Account{" "}
              <span>
                <NavLink to="/">Login</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
