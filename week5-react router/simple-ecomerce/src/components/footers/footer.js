import React from "react";
import { useAuth } from "../../context/useAuth";

const Footer = () => {
  const {token} = useAuth()
  return (
    <footer className="text-center mt-5">
      {token && (
        <p className="text-center p-4 fw-bold">
        Copyright {new Date().getFullYear()} © Naufal Yukafi Ridlo. All Right
        Reserved.
        </p>
      )}
     
    </footer>
  );
};

export default Footer;
