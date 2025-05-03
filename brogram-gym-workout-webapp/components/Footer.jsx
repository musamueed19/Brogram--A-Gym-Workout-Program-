import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Built by{" "}
        <Link target="_blank" href={"https://musamueed.vercel.app/"}>
          Muhammad Musa Mueed
        </Link>{" "}
        Styled with <strong>FantaCSS</strong>
      </p>
    </footer>
  );
};

export default Footer;
