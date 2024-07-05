import React from 'react';
import image from './welcome.jpeg';
import services from './services.jpeg';

const HomePage = () => {
  return (
    <section id="homepage" className='content'>
      <img src={image} className="img-fluid" alt="" />
      <p>
      &nbsp; &nbsp; &nbsp; &nbsp;Welcome to Azayd IT Consulting
              Services, your trusted partner in IT consultancy services. With
              years of experience and a team of experts, we provide innovative
              solutions to help businesses like yours succeed in the digital
              age. Our mission is to deliver top-notch services that meet the
              unique needs of our clients, exceeding their expectations and
              building long-lasting relationships
      </p>
      <h2>Services Overview</h2>
      <img src={services} className="img-services" alt="" />
      <ul>
        <li>
          <b>Data Analytics:</b> Our team helps businesses make data-driven decisions by providing actionable insights and analytics solutions, unlocking new opportunities for growth.
        </li>
        <li>
          <b>Cloud Services:</b> We offer cloud consulting, migration, and management services to help businesses leverage the benefits of cloud computing, increasing flexibility and reducing costs.
        </li>
        <li>
          <b>IT Strategy Consulting:</b> We help businesses develop a tailored IT strategy that aligns with their goals and objectives, ensuring a competitive edge in the market.
        </li>
      </ul>
      <h2>Key Differentiators</h2>
      <ul>
        <li>
          <b>Cost-Effective:</b> We offer competitive pricing without compromising on quality, ensuring that our clients receive the best value for their investment.
        </li>
        <li>
          <b>Personalized Approach:</b> We take the time to understand our clients' unique needs and goals, tailoring our services to meet their specific requirements.
        </li>
        <li>
          <b>Expertise:</b> Our team of experts has extensive experience in IT consultancy, ensuring that our clients receive the best possible guidance and support.
        </li>
      </ul>
      <h2>Testimonials</h2>
      <ul>
        <li>
        - Azayd IT Consulting Service's helped us develop a comprehensive IT strategy that aligned with our business goals. Their expertise and guidance were invaluable - Thrupthi r shekar
        </li>

<li>Azayd IT Consulting Services's cybersecurity services gave us peace of mind, knowing that our data and systems are protected from threats. Their team is responsive and knowledgeable. - Thrisha r shekar
</li>
<li>Azayd IT Consulting Services's cloud services helped us reduce costs and increase flexibility. Their team is professional and reliable. - Geetha v g
</li>
</ul>

</section>

);

};

export default HomePage;

