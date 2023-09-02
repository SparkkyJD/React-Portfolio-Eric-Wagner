import React from 'react';

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-section">
      <div className="container">
        <h2 className="display-4 mb-5">Projects</h2>
        <div className="row row-cols-1 g-4">
        <div className="col-md-4">
            <a href="https://squad-sync-5e36d690cf8e.herokuapp.com/" className="work-link">
              <div className="card">
                <img src="https://i.ibb.co/RpCLb30/screenshot1.png" className="card-img-top" alt="Note Taker App" />
                <div className="card-body">
                  <h5 className="card-title">SquadSyncccc</h5>
                  <p className="card-text">React/GraphQL/Appolo/flowbite</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://challenge-fitness-9cf387429034.herokuapp.com/login" className="work-link">
              <div className="card">
                <img src="https://i.ibb.co/6HrKGmx/screenshot2.png" className="card-img-top" alt="Challenge Fitness App" />
                <div className="card-body">
                  <h5 className="card-title">Challenge Fitness App</h5>
                  <p className="card-text">Mern Stack</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://sparkkyjd.github.io/Marvel-comic-search/" className="work-link">
              <div className="card">
                <img src="https://i.ibb.co/f9NVPWH/screenshot3.png" className="card-img-top" alt="Marvel Longbox App" />
                <div className="card-body">
                  <h5 className="card-title">Marvel Longbox App</h5>
                  <p className="card-text">JS/CSS/HTML/API</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
         
          
          <div className="col-md-4">
            <a href="https://sparkkyjd.github.io/weather-dashboard/" className="work-link">
              <div className="card">
                <img src="https://fox59.com/wp-content/uploads/sites/21/2022/10/GettyImages-1147913430.jpg?w=2560&h=1440&crop=1" className="card-img-top" alt="Weather Dashboard App" />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard App</h5>
                  <p className="card-text">JS/HTML</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://github.com/SparkkyJD/E-Commerce-Back-End" className="work-link">
              <div className="card">
                <img src="https://previews.123rf.com/images/9george/9george1807/9george180700110/115003155-two-running-men-cartoon-jogging-buddy-vector-illustration.jpg" className="card-img-top" alt="E-Commerce ORM" />
                <div className="card-body">
                  <h5 className="card-title">E-Commerce ORM</h5>
                  <p className="card-text">dotenv/express/mysql/sequelize</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://github.com/SparkkyJD/Note-Taker" className="work-link">
              <div className="card">
                <img src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" className="card-img-top" alt="E-Commerce ORM" />
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">express/mysql/schema/inquirer</p>
                  <div className="card-overlay"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="github">
        <a href="https://github.com/SparkkyJD" className="btn btn-primary"><i className="fab fa-github"></i>
          See my other projects
        </a>  
      </div>
    </section>
  );
};

export default Portfolio;
