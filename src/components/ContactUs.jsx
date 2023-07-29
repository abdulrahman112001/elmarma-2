import { t } from "i18next";
import React from "react";
import { Row } from "react-bootstrap";
import { CgFileDocument } from "react-icons/cg";
import { useMutation } from "react-query";
import SideBar from "./SideBar";

export default function ContactUs() {
  const createUser = async (userData) => {
    const response = await fetch(
      "https://admin.elmarma.com/api/v1/contact-us",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      // console.log(response);
    }
    return response.json();
  };
  const createUserMutation = useMutation(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);

    // Call the createUser mutation with the user data
    createUserMutation.mutate(userData);
  };

  return (
    <div>
      <Row className=" p-4">
        <div className="col-xl-8 col-md-6  col-xs-12  main p-4 ">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-5">
            <div className="d-flex align-items-center gap-1 ">
              <CgFileDocument
                style={{ width: "24px", height: "24px", color: "#0573F6" }}
              />
              <h4 className="fs-4 my-3"> {t("contact us")}</h4>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column  gap-2 m-auto  contact_us">
              <input
                type="text"
                className="p-2 rounded-2 border"
                name="first_name"
                placeholder="first name"
              />
              <input
                type="text"
                className="p-2 rounded-2 border"
                name="last_name"
                placeholder="الاسم الاخير"
              />
              <input
                type="text"
                className="p-2 rounded-2 border"
                name="phone"
                placeholder="رقم الهاتف"
              />
              <input
                type="email"
                style={{ direction: "rtl" }}
                className="p-2 rounded-2 border"
                name="email"
                placeholder="البريد الالكتروني"
              />
              <textarea
                id=""
                className="p-2 rounded-2 border"
                cols="30"
                name="message"
                placeholder="رساله"
                rows="10"
              ></textarea>
              <button
                className="border p-2 w-25 m-auto rounded-3 bg-primary text-white "
                type="submit"
                disabled={createUserMutation.isLoading}
              >
                {createUserMutation.isLoading
                  ? `${t("Sending")}...`
                  : `${t("Sending")}`}
              </button>
            </div>
          </form>
        </div>
        <SideBar />
      </Row>
    </div>
  );
}
