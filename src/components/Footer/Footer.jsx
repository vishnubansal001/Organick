import React from "react";
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <div>
                <h1>Contact Us</h1>
              </div>
              <div>
                <div>
                  <p>Email</p>
                  <p>needhelp@Organia.com</p>
                </div>
                <div>
                  <p>Phone</p>
                  <p>6223876523</p>
                </div>
                <div>
                  <p>Address</p>
                  <p>Chitkara University,Punjab,India.</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={logo} alt="" />
                </div>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing{" "}
                </p>
              </div>
              <div>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1>Utility Pages</h1>
              </div>
              <div>
                <div>
                  <p>404 Not Found</p>
                </div>
                <div>
                  <p>Password Protected </p>
                </div>
                <div>
                  <p>Licences</p>
                </div>
                <div>
                  <p>Changelog</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                Copyright &copy; <span>Organick</span> | Designed by{" "}
                <span>VB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
