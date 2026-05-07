import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 bg-black py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Krzysztof Maciej Pastuszak. Wszystkie prawa
      zastrzeżone.
    </footer>
  );
};

export default Footer;
