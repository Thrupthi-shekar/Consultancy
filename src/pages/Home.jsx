import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./welcome.jpeg";
import services from "./services.jpeg";
import { handleFormSubmit } from "server"

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = {
  //     name,
  //     email,
  //     phone,
  //     message
  //   };

  //   // Send form data to backend using fetch API
  //   fetch('/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };
  

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <br />
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br />
//         <label>Phone:</label>
//         <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         <br />
//         <label>Message:</label>
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// function HomePage() {
//   return (
//     <BrowserRouter>
//       <Route path="/" element={<h1>Home Page</h1>} />
//       <Route path="/home" element={<h1>Home Page</h1>} />
//     </BrowserRouter>
//   );
// }

const Footer = () => {
  return (
    <footer>
      <div className="company-info">
        <h2>Company Information</h2>
        <ul>
          <li>Address: Church street, Bangalore</li>
          <li>Phone: +91 9999999999</li>
          <li>
            Email:{" "}
            <a href="mailto:info@azayd.com" className="links">
              info@azayd.com
            </a>
          </li>
        </ul>
      </div>
      <div className="social-media-links">
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com" className="links">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com/home" className="links">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" className="links">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const Home = () => {
  const [currentSection, setCurrentSection] = useState("#homepage");
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    setCurrentSection(targetId);
  };
  useEffect(() => {
    setCurrentSection("#homepage");
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#homepage" onClick={handleNavClick}>
                {" "}
                Homepage{" "}
              </a>
            </li>
            <li>
              <a href="#about-us" onClick={handleNavClick}>
                {" "}
                About Us{" "}
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleNavClick}>
                {" "}
                Services{" "}
              </a>
            </li>
            <li>
              <a href="#contact-us" onClick={handleNavClick}>
                {" "}
                Contact Us{" "}
              </a>
            </li>
            <li>
              <a href="#blog-news" onClick={handleNavClick}>
                {" "}
                Blog{" "}
              </a>
            </li>
            <li>
              <a href="#careers" onClick={handleNavClick}>
                {" "}
                Careers{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="content">
        {currentSection === "#homepage" && (
          <section id="homepage">
            <img src={image} className="img-fluid" alt=""/>
            <p>
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp;Welcome to Azayd IT Consulting
              Services, your trusted partner in IT consultancy services. With
              years of experience and a team of experts, we provide innovative
              solutions to help businesses like yours succeed in the digital
              age. Our mission is to deliver top-notch services that meet the
              unique needs of our clients, exceeding their expectations and
              building long-lasting relationships.{" "}
            </p>
            <h2>Services Overview</h2>
            <img src={services} className="img-services" alt="" />
            <ul>
              <li>
                <b>Data Analytics:</b> Our team helps businesses make
                data-driven decisions by providing actionable insights and
                analytics solutions, unlocking new opportunities for growth.{" "}
              </li>
              <li>
                {" "}
                <b>Cloud Services:</b>We offer cloud consulting, migration, and
                management services to help businesses leverage the benefits of
                cloud computing, increasing flexibility and reducing costs.{" "}
              </li>
              <li>
                <b> IT Strategy Consulting:</b> We help businesses develop a
                tailored IT strategy that aligns with their goals and
                objectives, ensuring a competitive edge in the market.{" "}
              </li>
            </ul>
            <h2>Key Differentiators</h2>
            <ul>
              <li>
                {" "}
                <b>Cost-Effective:</b> We offer competitive pricing without
                compromising on quality, ensuring that our clients receive the
                best value for their investment.{" "}
              </li>
              <li>
                {" "}
                <b> Personalized Approach:</b> We take the time to understand
                our clients' unique needs and goals, tailoring our services to
                meet their specific requirements.{" "}
              </li>
              <li>
                {" "}
                <b>Expertise:</b> Our team of experts has extensive experience
                in IT consultancy, ensuring that our clients receive the best
                possible guidance and support.{" "}
              </li>
            </ul>
            <h2>Testimonials</h2>
            <ul>
              <li>
                {" "}
                Azayd IT Consulting Service's helped us develop a comprehensive
                IT strategy that aligned with our business goals. Their
                expertise and guidance were invaluable - Thrupthi r shekar{" "}
              </li>
              <li>
                {" "}
                Azayd IT Consulting Services's cybersecurity services gave us
                peace of mind, knowing that our data and systems are protected
                from threats. Their team is responsive and knowledgeable. -
                Thrisha r shekar{" "}
              </li>
              <li>
                {" "}
                Azayd IT Consulting Services's cloud services helped us reduce
                costs and increase flexibility. Their team is professional and
                reliable. - Geetha v g{" "}
              </li>
            </ul>
          </section>
        )}
        {currentSection === "#about-us" && (
          <section id="about-us">
            <h1>Company History</h1>
            <p>
              {" "}
              Azayd IT Consulting Services was founded in 2010 by a team of
              experienced IT professionals with a vision to provide innovative
              and reliable IT solutions to businesses. Over the years, we have
              grown into a trusted partner for many organizations, offering a
              range of services from IT strategy consulting to cybersecurity and
              cloud services.{" "}
            </p>
            <h2>Mission, Vision, Values</h2>
            <ul>
              <li>
                {" "}
                Mission: To deliver exceptional IT consulting services that meet
                the unique needs of our clients, exceeding their expectations
                and building long-lasting relationships.{" "}
              </li>
              <li>
                {" "}
                Vision: To be a leading IT consulting firm, renowned for our
                expertise, agility, and commitment to excellence.{" "}
              </li>
              <li>
                {" "}
                Values: - Expertise: We strive for excellence in our services,
                staying up-to-date with the latest technologies and trends. -
                Agility: We are adaptable and responsive,
              </li>
              <li>
                {" "}
                Agility: We are adaptable and responsive, quickly addressing
                client needs and market changes.{" "}
              </li>
              <li>
                {" "}
                Integrity: We operate with transparency, honesty, and ethical
                standards.{" "}
              </li>
              <li>
                {" "}
                Teamwork: We collaborate with clients and partners to achieve
                common goals.{" "}
              </li>
            </ul>
            <h2>Team Profiles</h2>
            <ul>
              <li>
                {" "}
                John Smith, CEO John has over 20 years of experience in IT
                consulting, leading teams and delivering successful projects. He
                is passionate about innovation and client satisfaction.{" "}
              </li>
              <li>
                {" "}
                Jane Doe, CTO Jane is a seasoned IT professional with expertise
                in cybersecurity and cloud services. She is dedicated to
                ensuring the highest quality of our services.{" "}
              </li>
              <li>
                {" "}
                Bob Johnson, Cybersecurity Specialist Bob has over 10 years of
                experience in cybersecurity, with a strong background in threat
                analysis and incident response. He is certified in CompTIA
                Security+ and CISSP, and has a Bachelor's degree in Computer
                Science. Bob is passionate about staying up-to-date with the
                latest cybersecurity threats and technologies, and enjoys
                sharing his knowledge with clients to help them stay safe
                online.{" "}
              </li>
            </ul>
          </section>
        )}
        {currentSection === "#services" && (
          <section id="services">
            <h1>Detailed Descriptions</h1>
            <ul>
              <li>
                {" "}
                IT Strategy Consulting: We help businesses develop a tailored IT
                strategy that aligns with their goals and objectives, ensuring a
                competitive edge in the market{" "}
              </li>
              <li>
                {" "}
                Cybersecurity Services: Our experts provide comprehensive
                cybersecurity solutions to protect your business from threats
                and vulnerabilities, ensuring the safety of your data and
                systems.{" "}
              </li>
              <li>
                {" "}
                Cloud Services: We offer cloud consulting, migration, and
                management services to help businesses leverage the benefits of
                cloud computing, increasing flexibility and reducing costs.{" "}
              </li>
            </ul>
            <h2>Benefits and Features</h2>
            <ul>
              <li>
                {" "}
                IT Strategy Consulting: - Aligns IT with business goals -
                Improves efficiency and productivity - Enhances competitiveness{" "}
              </li>
              <li>
                {" "}
                Cybersecurity Services: - Protects against cyber threats -
                Ensures data and system safety - Meets compliance requirements{" "}
              </li>
              <li>
                {" "}
                Cloud Services: - Increases flexibility and scalability -
                Reduces costs and improves efficiency - Enhances collaboration
                and productivity{" "}
              </li>
            </ul>
            <h2>Case Studies</h2>
            <ul>
              <li>
                {" "}
                We helped XYZ Corporation develop an IT strategy that aligned
                with their business goals, resulting in a 25% increase in
                efficiency and a 30% reduction in costs.{" "}
              </li>
              <li>
                {" "}
                We provided cybersecurity services to ABC Inc., protecting their
                data and systems from threats and vulnerabilities, and ensuring
                compliance with industry regulations.{" "}
              </li>
              <li>
                {" "}
                We helped DEF Enterprises migrate to the cloud, resulting in a
                40% reduction in costs and a 50% increase in productivity{" "}
              </li>
            </ul>
          </section>
        )}
        {currentSection === "#contact-us" && (
          <section id="contact-us">
            <h1>Contact Form</h1>
        
      <form onSubmit={handleFormSubmit}>
        <label for="name">Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <br/>
        <label for="email">Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br/>
        <label for="phone">Phone:</label>
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <br/>
        <label for="message">Message:</label>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        <br/>
        <input type="submit" value="Submit" />
      </form>
          </section>
        )}
        {currentSection === "#blog-news" && (
          <section id="blog-news">
            <h1>Blog</h1>
            <ul>
              <li>
                <h2>Regular Updates</h2>
                <p>
                  {" "}
                  We will post 1-2 blog articles per month, covering topics such
                  as IT trends, industry insights, and company news.{" "}
                </p>
              </li>
              <li>
                <h2>Categories and Tags</h2>
                <p>
                  {" "}
                  Categories: IT Strategy, Cybersecurity, Cloud Services,
                  Company News Tags: IT consulting, cybersecurity, cloud
                  computing, innovation, client satisfaction{" "}
                </p>
              </li>
              <li>
                <h2>Benefits of Cloud Computing</h2>
                <p>
                  {" "}
                  As a small business owner, you are constantly looking for ways
                  to improve efficiency, reduce costs, and increase
                  productivity. One way to achieve these goals is by adopting
                  cloud computing. In this blog post, we will explore the
                  benefits of cloud computing for small businesses and how it
                  can help you stay ahead of the competition.{" "}
                </p>
              </li>
            </ul>
          </section>
        )}
        {currentSection === "#careers" && (
          <section id="careers">
            <h1>Careers</h1>
            <ul>
              <li>
                <h2>IT Consultant</h2>
                <p>
                  {" "}
                  We are seeking an experienced IT consultant to join our team,
                  providing expertise in IT strategy and cybersecurity{" "}
                </p>
              </li>
              <li>
                <h2>Cloud Engineer</h2>
                <p>
                  {" "}
                  We are looking for a skilled cloud engineer to help our
                  clients migrate and manage their cloud infrastructure.{" "}
                </p>
              </li>
              <li>
                <h2>Web Developer</h2>
                <p>
                  {" "}
                  We are looking for a skilled web developer to help our clients
                  manage their website.{" "}
                </p>
              </li>
            </ul>
            <h2>Company Culture</h2>
            <p>
              {" "}
              At Azayd IT Consulting Services, we value our employees and strive
              to create a positive and supportive work environment. We offer
              competitive salaries, benefits, and opportunities for growth and
              development.{" "}
            </p>
            <h2>Application Instructions</h2>
            <p>
              {" "}
              To apply, please email your resume to{" "}
              <a href="mailto:careers@azayd.com">careers@azayd.com</a> with the
              job title in the subject line.{" "}
            </p>
          </section>
        )}
      </section>
      <Footer />
    </>
  );
};
}
export default Home;