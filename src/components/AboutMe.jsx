import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="profile-picture flex flex-col items-center text-center">
        <img src="https://i.ibb.co/f9xnZbY/me.jpg" alt="Profile Picture" />
        <h2 className="text-yellow-500">Eric Wagner</h2><br />
        <h3 className="text-yellow-500">Full Stack Web Developer</h3>
      </div>
      <p className="p-5">
        Aeronautical and heavy diesel equipment technician, now venturing into the exciting world of Web Development.
        Skilled problem-solver with a track record of delivering high-quality standards.<br /><br />
        Currently seeking opportunities to gain hands-on coding experience and excel as a Web Developer.<br /><br />
        Let's connect and launch into new horizons! 🚀
      </p>
      <br /><br />
      <div className="flex justify-center items-center text-yellow-500">
        <ul className="flex items-center">
          <li><a href="mailto:wagnd4e@gmail.com"><i className="fa fa-envelope fa-5x p-6 hover:text-gray-700 transition duration-300" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/SparkkyJD"><i className="fa fa-github-square fa-5x p-6 hover:text-gray-700 transition duration-300" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i className="fa fa-linkedin-square fa-5x p-6 hover:text-gray-700 transition duration-300" aria-hidden="true"></i></a></li>
        </ul>
      </div>


    </section>
  );
};

export default AboutMe;
