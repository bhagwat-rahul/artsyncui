import React from "react";
import Frame34145 from "../Frame34145";
import Group34211 from "../Group34211";
import "./SampleGalleryPage.css";

function SampleGalleryPage(props) {
  const {
    sampleGalleryPage,
    image9,
    dashboard,
    overlapGroup,
    properties,
    group13,
    group11,
    frame,
    spanText1,
    overlapGroup1,
    overlapGroup4,
    spanText2,
    spanText3,
    ellipse49,
    spanText4,
    spanText5,
    spanText6,
    group34211Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sample-gallery-page screen">
        <img className="sample-gallery-page-1" src={sampleGalleryPage} />
        <div className="group-34214-3">
          <div className="mac-book-pro-1-3">
            <div className="overlap-group2-2">
              <img className="image-9-3" src={image9} />
              <div className="overlap-group3-2">
                <div className="rectangle-547-3"></div>
                <div className="frame-34204-9">
                  <img className="dashboard-4" src={dashboard} />
                  <Frame34145 />
                  <div className="overlap-group-8" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <img className="properties-4" src={properties} />
                  </div>
                  <img className="group-13-4" src={group13} />
                  <img className="group-11-4" src={group11} />
                </div>
              </div>
              <Group34211 className={group34211Props.className} />
            </div>
            <div className="flex-col-3">
              <div className="frame-34210">
                <img className="frame" src={frame} />
                <div className="sample-gallery abel-normal-tundora-35-6px">
                  <span className="abel-normal-tundora-35-6px">{spanText1}</span>
                </div>
              </div>
              <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                  <h1 className="place valign-text-middle comfortaa-bold-black-48px">
                    <span>
                      <span className="comfortaa-bold-black-48px">{spanText2}</span>
                    </span>
                  </h1>
                </div>
                <div className="creator-name comfortaa-bold-black-16px">
                  <span className="comfortaa-bold-black-16px">{spanText3}</span>
                </div>
                <img className="ellipse-49" src={ellipse49} />
              </div>
              <div className="frame-container-2">
                <div className="frame-34206-2">
                  <div className="creator-profile comfortaa-bold-black-19-6px">
                    <span className="comfortaa-bold-black-19-6px">{spanText4}</span>
                  </div>
                </div>
                <div className="frame-34205">
                  <div className="other-galleries-by-this-creator comfortaa-bold-black-19-6px">
                    <span className="comfortaa-bold-black-19-6px">{spanText5}</span>
                  </div>
                  <div className="frame-34206-3 border-1px-black">
                    <div className="gallery-xyz comfortaa-bold-black-19-6px">
                      <span className="comfortaa-bold-black-19-6px">{spanText6}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleGalleryPage;
