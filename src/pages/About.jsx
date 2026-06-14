import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const About = () => {
  // Pastikan file-file ini ada di folder public/img/
  const teamMembers = [
    { name: "Gus Sakah", role: "Management", photo: "tim1.png" },
    { name: "Rahgents", role: "Tukang Pukul", photo: "tim2.png" },
    { name: "Arta", role: "Potographer", photo: "tim3.jpg" },
    { name: "Putri Rahayu", role: "Photographer", photo: "tim4.jpg" },
    { name: "Budi Artana", role: "Assistant", photo: "tim5.jpeg" },
    { name: "Dewi Sari", role: "Social Media", photo: "tim6.jpeg" },
    { name: "Agus Genta", role: "Editor", photo: "tim7.jpeg" },
    { name: "Genta Devi", role: "Photographer", photo: "tim8.jpeg" },
    { name: "Budi Genta", role: "Assistant", photo: "tim9.jpeg" },
    { name: "Dewi Genta", role: "Social Media", photo: "tim10.jpeg" },
  ];

  return (
    <div className="about-page container section-padding">
      {/* Header Section */}
      <div className="about-header text-center">
        <img src="/img/logo.png" alt="Logo" className="about-main-logo" />
        <p className="about-intro">
          Gusstraa.Project adalah penyedia jasa dokumentasi profesional yang
          berdedikasi tinggi dalam menangkap setiap detail berharga. Kami
          percaya bahwa setiap momen memiliki cerita unik yang patut diabadikan
          dengan cara yang paling elegan dan abadi.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="about-vision-mission">
        <div className="gold-big-card">
          <h3>Visi Kami</h3>
          <p>
            Menjadi partner dokumentasi utama yang dikenal karena kualitas hasil
            yang premium dan pelayanan yang personal.
          </p>
        </div>

        <div className="gold-big-card">
          <h3>Misi Kami</h3>
          <p>
            Memberikan hasil karya dokumentasi yang jujur, estetik, dan mampu
            membangkitkan kembali emosi di setiap momennya.
          </p>
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className="team-section-wrapper">
        <h3 className="text-center">Meet The Team</h3>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-img-container">
                <img
                  src={`/img/${member.photo}`}
                  alt={member.name}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                />
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
