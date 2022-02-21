import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ExploreGalleriesPage from "./components/ExploreGalleriesPage";
import AddGalleryPage from "./components/AddGalleryPage";
import YourGalleriesPage from "./components/YourGalleriesPage";
import SampleGalleryPage from "./components/SampleGalleryPage";
import LoginSignupPage from "./components/LoginSignupPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/explore-galleries-page">
          <ExploreGalleriesPage {...exploreGalleriesPageData} />
        </Route>
        <Route path="/:path(|add-gallery-page)">
          <AddGalleryPage {...addGalleryPageData} />
        </Route>
        <Route path="/your-galleries-page">
          <YourGalleriesPage {...yourGalleriesPageData} />
        </Route>
        <Route path="/sample-gallery-page">
          <SampleGalleryPage {...sampleGalleryPageData} />
        </Route>
        <Route path="/loginsignup-page">
          <LoginSignupPage {...loginSignupPageData} />
        </Route>
        <Route path="/profile-page">
          <ProfilePage {...profilePageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame342041Data = {
    dashboard: "/img/dashboard-3@2x.png",
    group11: "/img/group-11-4@2x.png",
};

const frame3420422Data = {
    className: "frame-34204-3",
};

const frame3420423Data = {
    className: "frame-34204-5",
};

const frame3420424Data = {
    className: "frame-34204-3",
};

const frame3420425Data = {
    className: "frame-34204-6",
};

const exploreGalleriesPageData = {
    exploreGalleriesPage: "/img/explore-galleries-page-1@3x.png",
    image9: "/img/image-9-5@2x.png",
    spanText1: "Explore Galleries",
    spanText2: "Gallery Name #1",
    frame34204Props: frame342041Data,
    frame3420421Props: frame3420422Data,
    frame3420422Props: frame3420423Data,
    frame3420423Props: frame3420424Data,
    frame3420424Props: frame3420425Data,
};

const group342112Data = {
    className: "group-34211-1",
};

const addGalleryPageData = {
    addGalleryPage: "/img/add-gallery-page-1@3x.png",
    image9: "/img/image-9-5@2x.png",
    dashboard: "/img/dashboard-3@2x.png",
    collections1: "/img/collections-9@2x.png",
    overlapGroup: "/img/vector-5@2x.png",
    properties: "/img/properties-5@2x.png",
    group13: "/img/group-13-5@2x.png",
    group11: "/img/group-11-4@2x.png",
    collections2: "/img/collections-8@2x.png",
    spanText1: "New Gallery",
    akarIconsCloudUpload: "/img/akar-icons-cloud-upload-1@2x.png",
    spanText2: <>UPLOAD ART<br /></>,
    spanText3: "(.obj, .jpeg, etc...)",
    group34211Props: group342112Data,
};

const group342113Data = {
    className: "group-34211-2",
};

const frame342062Data = {
    className: "frame-34211",
};

const frame342063Data = {
    className: "frame-34206-1",
};

const yourGalleriesPageData = {
    yourGalleriesPage: "/img/your-galleries-page-1@3x.png",
    image9: "/img/image-9-5@2x.png",
    dashboard: "/img/dashboard-3@2x.png",
    collections1: "/img/collections-9@2x.png",
    overlapGroup: "/img/vector-5@2x.png",
    properties: "/img/properties-5@2x.png",
    group13: "/img/group-13-5@2x.png",
    group11: "/img/group-11-4@2x.png",
    collections2: "/img/collections-8@2x.png",
    spanText: "Your Galleries",
    akarIconsCirclePlus: "/img/akar-icons-circle-plus-1@2x.png",
    group34211Props: group342113Data,
    frame342061Props: frame342062Data,
    frame342062Props: frame342063Data,
};

const group342114Data = {
    className: "group-34211-3",
};

const sampleGalleryPageData = {
    sampleGalleryPage: "/img/sample-gallery-page-1@3x.png",
    image9: "/img/image-9-5@2x.png",
    dashboard: "/img/dashboard-5@2x.png",
    overlapGroup: "/img/vector-5@2x.png",
    properties: "/img/properties-5@2x.png",
    group13: "/img/group-13-5@2x.png",
    group11: "/img/group-11-4@2x.png",
    frame: "/img/frame-2@2x.png",
    spanText1: "Sample Gallery",
    overlapGroup1: "/img/rectangle-551-1@2x.png",
    overlapGroup4: "/img/rectangle-552-1@2x.png",
    spanText2: "START",
    spanText3: "Creator Name",
    ellipse49: "/img/ellipse-49-1@2x.png",
    spanText4: "Creator Profile",
    spanText5: "Other Galleries by this creator",
    spanText6: "Gallery XYZ",
    group34211Props: group342114Data,
};

const frame342043Data = {
    dashboard: "/img/dashboard-5@2x.png",
    group11: "/img/group-11-5@2x.png",
    className: "frame-34204-2",
};

const group342115Data = {
    className: "group-34211-4",
};

const profilePageData = {
    profilePage: "/img/profile-page-1@3x.png",
    image9: "/img/image-9-5@2x.png",
    frame: "/img/frame-2@2x.png",
    spanText1: "Profile",
    ellipse49: "/img/ellipse-49-2@2x.png",
    spanText2: "Sample Name",
    spanText3: "Edit Profile",
    frame34204Props: frame342043Data,
    group34211Props: group342115Data,
};

const loginSignupPageData = {
    loginSignupPage: "/img/login-signup-page-1@3x.png",
    spanText1: "ARTSYNC",
    spanText2: "email",
    spanText3: "password",
    spanText4: "re-enter password",
    spanText5: "Login",
    line1: "/img/line-1-1@2x.png",
    spanText6: "Signup",
    spanText7: "Accept Privacy Policy/Terms and Conditions",
    spanText8: "Signup",
};

