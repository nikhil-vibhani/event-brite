import Components from "views/Components/Components.jsx";
// import LandingPage from "views/LandingPage/LandingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
// import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegistrationInfo from "views/RegistrationInfo";

var indexRoutes = [
  // { path: "/landing-page", name: "LandingPage", component: LandingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  // { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/registration-page", name: "Registration", component: RegistrationInfo },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
