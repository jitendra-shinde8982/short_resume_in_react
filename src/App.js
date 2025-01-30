import "./App.css";

function App() {
  return (
    <div className="MainContiner">
      <ProfileDetails />
      <ProfileSummary />
      <KeySkills />
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="profile_info">
      <div>
        <img src="profile_bitmoji.png" alt="profile" />
      </div>
      <div className="nameHeading">
        <h4>Jitendra Shinde</h4>
        <div className="location">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
            >
              <path
                d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                fill="#CC0E04"
              ></path>
            </svg>
          </span>
          <span className="loctionTxt">Pune, 411038</span>
        </div>
        <p className="workStatus">
          Working as Front-end Developer at{" "}
          <span className="coltxt">Vritti Solution Ltd.</span>
        </p>
      </div>
    </div>
  );
}

function ProfileSummary() {
  return (
    <>
      <hr />
      <h4>Profile Summary</h4>
      <p className="profile_sum">
        Front-end Developer with 2 years of experience creating responsive and
        user-friendly interfaces for ERP and CRM software. Skilled in HTML, CSS,
        JavaScript, Angular, and React, with a focus on building modern,
        scalable designs. Experienced in team collaboration and proficient with
        tools like Git to deliver high-quality w applications.
      </p>
    </>
  );
}

function KeySkills() {
  const frontendTechnologies = [
    "HTML",
    ", CSS",
    ", JavaScript",
    ", Angular",
    ", React",
  ];
  const frameworksLibraries = [
    "Bootstrap ",
    ", Angular Material ",
    ", jQuery ",
    ", Tailwind CSS ",
    ", SASS ",
    ", LESS ",
  ];
  const designCollaborationTools = ["Figma", ", Git, ", ", GitHub"];
  return (
    <>
      <hr />
      <div>
        <h4>SKills </h4>
        <div className="skillBox">
          <div className="d-flex">
            <div className="w-20">Frontend Technologies:</div>
            <ui className="col-skillsDIv">
              {frontendTechnologies.map((techSKill) => (
                <li>{techSKill}</li>
              ))}
            </ui>
          </div>
          <div className="d-flex">
            <div className="w-20">Frameworks &amp; Libraries: </div>
            <ui className="col-skillsDIv">
              {frameworksLibraries.map((framework) => (
                <li>{framework}</li>
              ))}
            </ui>
          </div>
          <div className="d-flex">
            <div className="w-20">Design &amp; Collaboration Tools:</div>
            <ui className="col-skillsDIv">
              {designCollaborationTools.map((Tools) => (
                <li>{Tools}</li>
              ))}
            </ui>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
