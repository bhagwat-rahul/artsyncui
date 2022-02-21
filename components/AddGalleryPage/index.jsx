import React from "react";
import Group34211 from "../Group34211";
import "./AddGalleryPage.css";

function AddGalleryPage(props) {
  const {
    addGalleryPage,
    image9,
    dashboard,
    collections1,
    overlapGroup,
    properties,
    group13,
    group11,
    collections2,
    spanText1,
    akarIconsCloudUpload,
    spanText2,
    spanText3,
    group34211Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="add-gallery-page screen">
        <img className="add-gallery-page-1" src={addGalleryPage} />
        <div className="group-34214-1">
          <div className="mac-book-pro-1-1">
            <div className="overlap-group1-1">
              <img className="image-9-1" src={image9} />
              <div className="overlap-group3">
                <div className="rectangle-547-1"></div>
                <div className="frame-34204-7">
                  <img className="dashboard-2" src={dashboard} />
                  <img className="collections-5" src={collections1} />
                  <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <img className="properties-2" src={properties} />
                  </div>
                  <div className="frame-34145-3">
                    <img className="group-13-2" src={group13} />
                  </div>
                  <img className="group-11-2" src={group11} />
                  <img className="collections-5" src={collections2} />
                </div>
              </div>
              <Group34211 className={group34211Props.className} />
            </div>
            <div className="flex-col-1">
              <div className="new-gallery abel-normal-tundora-35-6px">
                <span className="abel-normal-tundora-35-6px">{spanText1}</span>
              </div>
              <div className="upload-container">
                <img className="akar-iconscloud-upload" src={akarIconsCloudUpload} />
                <div className="upload-art-obj-jpeg-etc abel-normal-black-35-6px">
                  <span className="abel-normal-black-35-6px">{spanText2}</span>
                  <span className="span1">{spanText3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGalleryPage;
