import React from "react";
import Frame34204 from "../Frame34204";
import Group34211 from "../Group34211";
import "./ProfilePage.css";

function ProfilePage(props) {
  const {
    profilePage,
    image9,
    frame,
    spanText1,
    ellipse49,
    spanText2,
    spanText3,
    frame34204Props,
    group34211Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="profile-page screen">
        <img className="profile-page-1" src={profilePage} />
        <div className="group-34214-5">
          <div className="overlap-group3-3">
            <div className="mac-book-pro-1-5">
              <div className="overlap-group1-5">
                <img className="image-9-4" src={image9} />
                <Frame34204
                  dashboard={frame34204Props.dashboard}
                  group11={frame34204Props.group11}
                  className={frame34204Props.className}
                />
                <div className="overlap-group2-3">
                  <Group34211 className={group34211Props.className} />
                </div>
              </div>
              <div className="flex-col-6">
                <div className="frame-34210-1">
                  <img className="frame-1" src={frame} />
                  <div className="profile abel-normal-tundora-35-6px">
                    <span className="abel-normal-tundora-35-6px">{spanText1}</span>
                  </div>
                </div>
                <div className="flex-row-1">
                  <img className="ellipse-49-1" src={ellipse49} />
                  <div className="sample-name abel-normal-tundora-35-6px">
                    <span className="abel-normal-tundora-35-6px">{spanText2}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-34206-4">
              <div className="edit-profile comfortaa-bold-black-19-6px">
                <span className="comfortaa-bold-black-19-6px">{spanText3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
