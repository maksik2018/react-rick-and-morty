import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

import { NavLink } from "react-router-dom";
import "./LinkedIn.css";

function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      setCode(code);
      setErrorMessage("");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });
  const [code, setCode] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");

  const saved = localStorage.getItem("linkedin_oauth2_state");
  return (
    <Wrapper>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />
      {!code && !saved && <div> no authorized by Linkedin yet</div>}
      {saved && (
        <div>
          <nav className="navigation">
            <NavLink to="/characters">Characters</NavLink>
          </nav>

          <div> you successfully authorized by Linkedin</div>
        </div>
      )}

      {errorMessage && <div>{errorMessage}</div>}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 260px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
`;

export default LinkedInPage;
