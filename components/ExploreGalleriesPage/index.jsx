import React from "react";
import Frame34204 from "../Frame34204";
import Group34211 from "../Group34211";
import Frame342042 from "../Frame342042";
import "./ExploreGalleriesPage.css";

function ExploreGalleriesPage(props) {
  const {
    exploreGalleriesPage,
    image9,
    spanText1,
    spanText2,
    frame34204Props,
    frame3420421Props,
    frame3420422Props,
    frame3420423Props,
    frame3420424Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explore-galleries-page screen">
        <img className="explore-galleries-page-1" src={exploreGalleriesPage} />
        <div className="group-34214">
          <div className="overlap-group2">
            <div className="mac-book-pro-1">
              <div className="overlap-group1">
                <div className="rectangle-546"></div>
                <img className="image-9" src={image9} />
                <div className="rectangle-547"></div>
                <Frame34204 dashboard={frame34204Props.dashboard} group11={frame34204Props.group11} />
                <Group34211 />
              </div>
              <div className="flex-col">
                <div className="explore-galleries abel-normal-tundora-35-6px">
                  <span className="abel-normal-tundora-35-6px">{spanText1}</span>
                </div>
                <Frame342042 />
              </div>
              <div className="frame-container">
                <Frame342042 className={frame3420421Props.className} />
                <Frame342042 className={frame3420422Props.className} />
              </div>
              <div className="frame-container-1">
                <Frame342042 className={frame3420423Props.className} />
                <Frame342042 className={frame3420424Props.className} />
              </div>
            </div>
            <div className="frame-34204">
              <div className="gallery-name-1 comfortaa-bold-black-19-6px">
                <span className="comfortaa-bold-black-19-6px">{spanText2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreGalleriesPage;
