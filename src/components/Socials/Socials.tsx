import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import "./style.css";

export default function Socials() {
  return (
    <div className="container-socials">
      <a className="social-link">
        <AiFillGithub />
      </a>
      <a className="social-link">
        <FaXTwitter />
      </a>
      <a className="social-link">
        <AiFillLinkedin />
      </a>
    </div>
  );
}
