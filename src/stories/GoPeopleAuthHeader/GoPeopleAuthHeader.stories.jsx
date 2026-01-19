import { GoPeopleAuthHeader } from "./index";

export default {
  title: "GoPeople/GoPeopleAuthHeader",
  component: GoPeopleAuthHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // decorators: [
  //   (Story) => (
  //     <div style={{ padding: "3em" }}>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export const DefaultGoPeopleAuthHeader = () => (
  <GoPeopleAuthHeader
    apiBaseUrl={"http://localhost:8080"}
    lng={"fr"}
    onSuccess={(tokenData) => {
      console.log("Authentication successful:", tokenData);
      alert(`Authentication successful! User ID: ${tokenData.userInfo.userId}`);
    }}
    onError={(error) => {
      console.error("Authentication error:", error);
    }}
    onClose={() => {
      console.log("Modal closed");
    }}
  />
);

export const GoPeopleAuthHeaderEnglish = () => (
  <GoPeopleAuthHeader
    apiBaseUrl="http://localhost:8080"
    lng="en"
    onSuccess={(tokenData) => {
      console.log("Authentication successful:", tokenData);
      alert(
        `Authentication successful! Token: ${tokenData.token.substring(
          0,
          20
        )}...`
      );
    }}
    onError={(error) => {
      console.error("Authentication error:", error);
    }}
  />
);

export const GoPeopleAuthHeaderDutch = () => (
  <GoPeopleAuthHeader
    apiBaseUrl="http://localhost:8080"
    lng="nl"
    onSuccess={(tokenData) => {
      console.log("Authentication successful:", tokenData);
      alert(
        `Authentication successful! Token: ${tokenData.token.substring(
          0,
          20
        )}...`
      );
    }}
    onError={(error) => {
      console.error("Authentication error:", error);
    }}
  />
);

export const GoPeopleAuthHeaderWithCustomAPI = () => (
  <GoPeopleAuthHeader
    apiBaseUrl="https://api.gopeople.com"
    lng="fr"
    onSuccess={(tokenData) => {
      // Custom success handler - could store token in localStorage
      localStorage.setItem("authToken", tokenData.token);
      console.log("Token stored in localStorage");
      alert("Authentication successful! Token stored.");
    }}
    onError={(error) => {
      console.error("Authentication error:", error);
      alert(`Authentication failed: ${error.message}`);
    }}
  />
);

export const GoPeopleAuthHeaderInHeaderContext = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #dee2e6",
    }}
  >
    <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>My Application</div>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span>Navigation</span>
      <GoPeopleAuthHeader
        apiBaseUrl="http://localhost:8080"
        lng="fr"
        onSuccess={(tokenData) => {
          console.log("User authenticated in header:", tokenData);
          alert("Welcome! You are now logged in.");
        }}
        onError={(error) => {
          console.error("Authentication error:", error);
        }}
      />
    </div>
  </div>
);
