import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  Hero,
  Navbar,
  About,
  Skills,
  Projects,
  Journey,
  AstroPic,
  Parallax,
  Contact,
  Footer,
} from "./components";

const App = () => {

  
  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };
  
  const [githubIsHovered, setGithubIsHovered] = useState(false);
  const [linkedinIsHovered, setLinkedinIsHovered] = useState(false);
  const [resumeIsHovered, setResumeIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);

  const handleGithubMouseEnter = () => {
    setGithubIsHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setGithubIsHovered(false);
  };

  const handleLinkedinMouseEnter = () => {
    setLinkedinIsHovered(true);
  };

  const handleLinkedinMouseLeave = () => {
    setLinkedinIsHovered(false);
  };

  const handleResumeMouseEnter = () => {
    setResumeIsHovered(true);
  };

  const handleResumeMouseLeave = () => {
    setResumeIsHovered(false);
  };

  const handleEmailMouseEnter = () => {
    setEmailIsHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailIsHovered(false);
  };

  return (
    <BrowserRouter>
      {/* <div className='relative z-0 bg-background1'> */}
      <div className="bg-cover bg-n-repeat bg-center overflow-x-hidden">
        <Navbar />
        <Hero
          githubIsHovered={githubIsHovered}
          handleGithubMouseEnter={handleGithubMouseEnter}
          handleGithubMouseLeave={handleGithubMouseLeave}
          linkedinIsHovered={linkedinIsHovered}
          handleLinkedinMouseEnter={handleLinkedinMouseEnter}
          handleLinkedinMouseLeave={handleLinkedinMouseLeave}
          resumeIsHovered={resumeIsHovered}
          handleResumeMouseEnter={handleResumeMouseEnter}
          handleResumeMouseLeave={handleResumeMouseLeave}
        />
      </div>
      <About />
      <Skills />
      <Projects />
      <Journey />
      <AstroPic />
      <Parallax />
      <Contact
        githubIsHovered={githubIsHovered}
        handleGithubMouseEnter={handleGithubMouseEnter}
        handleGithubMouseLeave={handleGithubMouseLeave}
        linkedinIsHovered={linkedinIsHovered}
        handleLinkedinMouseEnter={handleLinkedinMouseEnter}
        handleLinkedinMouseLeave={handleLinkedinMouseLeave}
        emailIsHovered={emailIsHovered}
        handleEmailMouseEnter={handleEmailMouseEnter}
        handleEmailMouseLeave={handleEmailMouseLeave}
      />
      <Footer 
        modalState={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
      />
    </BrowserRouter>
  );
};

export default App;
