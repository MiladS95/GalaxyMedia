/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <>
      <DarkTheme>
        <ContactHeader />
        <div className="main-content">
          <ContactForm />
        </div>
      </DarkTheme>
    </>
  );
};

export default Contact;
