import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.css";
import Form from "react-bootstrap/Form";

function Profile({ logindata }) {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  //handle img
  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (readerE) {
        document.getElementById("image").src = readerE.target.result;
      };
    });
  };
  return (
    <>
      <Header />
      <h3 className="text-center col-lg-6 my-2">Profile Details</h3>
      <div className="profile d-flex justify-content-evenly mx-auto">
        < div className="col-md-4" style={{ background: "#480d2f",color:"white",padding:"20px",borderRadius:"20px",boxShadow: "10px 10px 10px black",height:"350px"  }}>
          <div className="profile_section">
            <img
              src={profilePIcDefault}
              alt="profile_pic"
              name="file"
              className="img-thumbnail"
              height={200}
              width={200}
              id="image"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Select Profile Picture:
            </label>
            <input
              className="form-control"
              type="file"
              onChange={handleImg}
              name="file"
              id="formFile"
            />
          </div>
        </div>

        <div>
          <section className="d-flex justify-content-between">
            <div
              className="left_data p-3"
              style={{
                width: "100%",
                height:"350px", 
                borderRadius: "20px",
                background: "#480d2f",
                color: "white",
                boxShadow: "10px 10px 10px black",
              }}
            >
             
              <Form style={{ padding: "5px" }}>
                <h4>Full Name:</h4>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    value={logindata.length > 0 && logindata[0].name}
                    placeholder="Enter Your Full Name"
                  />
                </Form.Group>

                <h4>Email:</h4>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    value={logindata.length > 0 && logindata[0].email}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <h4>Mobile Number:</h4>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="phone"
                    name="mobile"
                    value={logindata.length > 0 && logindata[0].mobile}
                    placeholder="Enter Your Mobile Number"
                  />
                </Form.Group>
              </Form>
            </div>
          </section>
        </div>

        
      </div>
      <Footer />
    </>
  );
}

export default Profile;
