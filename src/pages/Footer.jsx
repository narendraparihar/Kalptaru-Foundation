import  "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 w-100">
      <p className="mb-0">© {new Date().getFullYear()} Kalptaru Foundation | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
