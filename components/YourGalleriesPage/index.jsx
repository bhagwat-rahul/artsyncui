import React from "react";
import Group34211 from "../Group34211";
import Frame34206 from "../Frame34206";
import "./YourGalleriesPage.css";

function YourGalleriesPage(props) {
  const {
    yourGalleriesPage,
    image9,
    dashboard,
    collections1,
    overlapGroup,
    properties,
    group13,
    group11,
    collections2,
    spanText,
    akarIconsCirclePlus,
    group34211Props,
    frame342061Props,
    frame342062Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="your-galleries-page screen">
        <img className="your-galleries-page-1" src={yourGalleriesPage} />
        <div className="group-34214-2">
          <div className="overlap-group3-1">
            <div className="mac-book-pro-1-2">
              <div className="overlap-group1-2">
                <img className="image-9-2" src={image9} />
                <div className="overlap-group2-1">
                  <div className="rectangle-547-2"></div>
                  <div className="frame-34204-8">
                    <img className="dashboard-3" src={dashboard} />
                    <img className="collections-6" src={collections1} />
                    <div className="overlap-group-7" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <img className="properties-3" src={properties} />
                    </div>
                    <img className="group-13-3" src={group13} />
                    <img className="group-11-3" src={group11} />
                    <img className="collections-6" src={collections2} />
                  </div>
                </div>
                <Group34211 className={group34211Props.className} />
              </div>
              <div className="your-galleries abel-normal-tundora-35-6px">
                <span className="abel-normal-tundora-35-6px">{spanText}</span>
              </div>
              <Frame34206 />
              <div className="flex-col-2">
                <Frame34206 className={frame342061Props.className} />
                <img className="akar-iconscircle-plus" src={akarIconsCirclePlus} />
              </div>
            </div>
            <Frame34206 className={frame342062Props.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourGalleriesPage;
