import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Modal from "./Modal";
import style from "./HamburgerMenu.module.css";
import image from "./ModalLogo.svg";
import arrow from "./down-arrow.svg";
import LoginModal from "../UserComponent/Login/LoginModal";
import { ProfileModal } from "../../pages/User/Profile/ProfileModal";

function HamburgerMenu({isAuth}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {        
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className={style.hamburgerbutton}></button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div id={style.Modallogo}>
          <img src={image} alt="logoimage" className={style.ModalImg} />
        </div>
        <nav className={style.menu}>
          <section className={style.menu}>
            <div className={style.dropdown}>
              <Link to="/" className={style.menulink}>
                Home
              </Link>
            </div>

            <div className={style.dropdown}>
              <div>
                <button
                  className={style.dropdownbutton}
                  onClick={() => toggleDropdown(1)}
                >
                  FITNESS
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${style.arrow} ${
                    activeDropdown === 1 ? style.rotate1 : ""
                  }`}
                />
              </div>
              <div
                className={`${style.dropdowncontent} ${
                  activeDropdown === 1 ? style.show : ""
                }`}
              >
                <Link className={style.alink} to="/fitness">cultpass</Link>
                <Link className={style.alink} to="/fitness">cultpass ELITE</Link>
                <Link className={style.alink} to="/fitness">cultpass Home</Link>
                <Link className={style.alink} to="/fitness">cult Transform</Link>
                <Link className={style.alink} to="/fitness">Bootcamp</Link>
                <Link className={style.alink} to="/fitness">Transform Plus</Link>
              </div>
            </div>
            <div className={style.dropdown}>
              <div>
                <button
                  className={style.dropdownbutton}
                  onClick={() => toggleDropdown(2)}
                >
                  CARE
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${style.arrow} ${
                    activeDropdown === 2 ? style.rotate : ""
                  }`}
                />
              </div>
              <div
                className={`${style.dropdowncontent} ${
                  activeDropdown === 2 ? style.show : ""
                }`}
              >
                <Link className={style.alink} to="/care/diagnostic-tests">Lab Tests</Link>
              </div>
            </div>
            <div className={style.dropdown}>
              <div>
                <button
                  className={style.dropdownbutton}
                  onClick={() => toggleDropdown(3)}
                >
                  MIND
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${style.arrow} ${
                    activeDropdown === 3 ? style.rotate : ""
                  }`}
                />
              </div>
              <div
                className={`${style.dropdowncontent} ${
                  activeDropdown === 3 ? style.show : ""
                }`}
              >
                <Link className={style.alink} to="/mind/home">Mindfulness</Link>
              </div>
            </div>
            <div className={style.dropdown}>
              <div>
                <button
                  className={style.dropdownbutton}
                  onClick={() => toggleDropdown(4)}
                >
                  STORE
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${style.arrow} ${
                    activeDropdown === 4 ? style.rotate : ""
                  }`}
                />
              </div>
              <div
                className={`${style.dropdowncontent} ${
                  activeDropdown === 4 ? style.show : ""
                }`}
              >
                <Link to="/store" className={style.alink}>cultsport</Link>
              </div>
            </div>
          </section>
          <section className={style.menu2}>
            <div className={style.dropdown} >
              <div className={style.overLogin}>Sign In</div>
              <div className = {style.OverLogin2} >{isAuth ? (
              <ProfileModal />
              
            ) : (
              <LoginModal />
            )}</div>
            </div>
            <div className={style.dropdown}>
              <Link  to="/cart" className={style.Extralink}>
                Cart
              </Link>
            </div>
            <div className={style.dropdown}>
              <Link to="/blog" className={style.Extralink}>
                Blog
              </Link>
            </div>
          </section>
        </nav>
      </Modal>
    </div>
  );
}

export default HamburgerMenu;
