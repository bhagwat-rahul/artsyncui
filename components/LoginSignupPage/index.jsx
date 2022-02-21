import React from "react";
import "./LoginSignupPage.css";

function LoginSignupPage(props) {
  const {
    loginSignupPage,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    line1,
    spanText6,
    spanText7,
    spanText8,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="loginsignup-page screen">
        <img className="login-signup-page" src={loginSignupPage} />
        <div className="group-34214-4">
          <div className="mac-book-pro-1-4">
            <div className="artsync abel-normal-tundora-35-6px">
              <span className="abel-normal-tundora-35-6px">{spanText1}</span>
            </div>
            <div className="flex-row">
              <div className="flex-col-4 abel-normal-black-20px">
                <div className="email">
                  <span className="abel-normal-black-20px">{spanText2}</span>
                </div>
                <div className="password">
                  <span className="abel-normal-black-20px">{spanText3}</span>
                </div>
                <div className="re-enter-password">
                  <span className="abel-normal-black-20px">{spanText4}</span>
                </div>
                <div className="ellipse-50 border-1px-black"></div>
              </div>
              <div className="flex-col-5">
                <div className="overlap-group1-4 abel-normal-black-35-6px border-1px-black">
                  <div className="login">
                    <span className="abel-normal-black-35-6px">{spanText5}</span>
                  </div>
                  <img className="line-1" src={line1} />
                  <div className="signup">
                    <span className="abel-normal-black-35-6px">{spanText6}</span>
                  </div>
                </div>
                <div className="rectangle-555 border-1px-black"></div>
                <div className="rectangle-55 border-1px-black"></div>
                <div className="rectangle-55 border-1px-black"></div>
                <p className="accept-privacy-polic abel-normal-black-12px">
                  <span className="abel-normal-black-12px">{spanText7}</span>
                </p>
                <div className="signup-1 abel-normal-moon-raker-35-6px">
                  <span className="abel-normal-moon-raker-35-6px">{spanText8}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupPage;
