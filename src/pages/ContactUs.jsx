import React from "react";

import LayoutWraper from "../layout/LayoutWraper";
import Contactmain from "../components/contactComp/Contactmain";
import contact from "../assets/contact.jpg";

const ContactUs = () => {
  return (
    <div>
      <LayoutWraper>
        <Contactmain />
      </LayoutWraper>
    </div>
  );
};

export default ContactUs;
