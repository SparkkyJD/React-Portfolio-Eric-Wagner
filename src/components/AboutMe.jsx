const AboutMe = () => {
  return (
    <section id="about-me" className="bg-light-gray py-5">
      <div className="container">
        <div className="profile-picture">
           <h2>Eric Wagner</h2>
          <img src="\src\assets/me.jpg" alt="Profile Picture" />
          <h3>Full Stack Web Developer</h3>
        </div>
        <br></br><br></br>
        <p className="lead">
        Aeronautical and heavy diesel equipment technician, now venturing into the exciting world of software engineering. 
        Skilled problem-solver with a track record of delivering high quality standards.<br></br><br></br>
        Currently Seeking opportunities to gain hands-on coding experience and excel as a software engineer. 
        <br></br><br></br>Let's connect and launch into new horizons! 🚀
        </p>
        <br></br><br></br>
        <h3>Links</h3>
          <ul>
            <li><a href="mailto:wagnd4e@gmail.com"><i className="far fa-envelope"></i> wagnd4e@gmail.com</a></li>
            <li><a href="https://github.com/SparkkyJD" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
            <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
      </div>
    </section>
  );
};

export default AboutMe;
