import React from "react";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to "RK Restaurant" , where culinary excellence meets warm hospitality. Our menu showcases the richness of local ingredients and global flavors, crafted with passion by our talented chefs. With a commitment to sustainability and community, we strive to make a positive impact while creating unforgettable dining experiences. Join us for a journey of taste and hospitality, where every dish tells a story and every guest is treated like family.
            </p>
            
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
