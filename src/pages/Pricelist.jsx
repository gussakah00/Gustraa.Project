import React from "react";
import { FaCheck, FaPlus, FaInfoCircle } from "react-icons/fa";

const Pricelist = () => {
  const allProjects = [
    {
      category: "PREWEDDING.PROJECT",
      items: [
        {
          name: "Suite Package",
          price: "1.200K",
          sub: "(1 Location)",
          features: [
            "Unlimited shoot (4 hours max)",
            "All Photo edited",
            "Include location entrance ticket",
            "Include slide show photo",
            "Include online invitation card",
            "Free print photo 16R jumbo + frame + stand",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (1 Cinematic video)",
        },
        {
          name: "Luxury Package",
          price: "2.000K",
          sub: "(2 Locations)",
          features: [
            "Unlimited shoot (4 hours/location)",
            "All Photo edited",
            "Include location entrance ticket",
            "Include slide show photo",
            "Include online invitation card",
            "Free print photo 16R jumbo + frame + stand",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (1 Cinematic video)",
        },
      ],
    },
    {
      category: "WEDDING.PROJECT",
      items: [
        {
          name: "Same Day",
          price: "1.500K",
          sub: "(9 Hour max)",
          features: [
            "Unlimited shoot 1 day ceremony",
            "All photo edited",
            "Include 1 collage album (by request)",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (1 Full cinematic video)",
        },
        {
          name: "Different Day",
          price: "2.000K",
          sub: "(9 Hour/day max)",
          features: [
            "Unlimited shoot include 2 days ceremony",
            "All photo edited",
            "Include 1 collage album (by request)",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (1 Full cinematic video)",
        },
      ],
    },
    {
      category: "BALINESE.PROJECT",
      items: [
        {
          name: "Tigang Sasih",
          price: "750K",
          features: [
            "Unlimited shoot",
            "All photo edited",
            "Google drive storage (30 days)",
          ],
          addon: "+500k (Cinematic video)",
        },
        {
          name: "Mepandes",
          price: "1.000K",
          features: [
            "Unlimited shoot",
            "All photo edited",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (Full cinematic)",
        },
        {
          name: "Ngaben",
          price: "1.500K",
          features: [
            "Unlimited shoot",
            "All photo edited",
            "Google drive storage (30 days)",
            "Flashdisk exclusive",
          ],
          addon: "+1000k (Full cinematic)",
        },
        {
          name: "Other Ceremony",
          price: "Up to 800K",
          features: ["Price adjusted depends on type of ceremony"],
        },
      ],
    },
    {
      category: "GRADUATION.PROJECT",
      items: [
        {
          name: "Personal (1 Graduate)",
          price: "350K - 650K",
          note: "Extra graduate +100k/person",
          variants: [
            { label: "Photo Only (350k)", detail: "1 Hour, 35 file edit" },
            {
              label: "Full Package (650k)",
              detail: "2 Hour, Unlimited edit + Cinematic video",
            },
          ],
          features: [
            "Unlimited shoot",
            "Include family & friends",
            "Google drive storage (30 days)",
          ],
        },
        {
          name: "Group (5 Graduate)",
          price: "650K - 1.100K",
          note: "Extra graduate +50k/person",
          variants: [
            { label: "Photo Only (650k)", detail: "1 Hour, 70 file edit" },
            {
              label: "Full Package (1.100k)",
              detail: "2 Hour, Unlimited edit + Cinematic video",
            },
          ],
          features: ["Unlimited shoot", "Google drive storage (30 days)"],
        },
      ],
    },
    {
      category: "HIGH SCHOOL.PROJECT",
      items: [
        {
          name: "Suite (Max 7 Person)",
          price: "500K - 900K",
          note: "Extra +50k/person",
          variants: [
            { label: "Photo Only (500k)", detail: "3 Hour, 50 file edit" },
            {
              label: "Full Package (900k)",
              detail: "5 Hour, Unlimited edit + Cinematic video",
            },
          ],
          features: ["Unlimited shoot", "Google drive storage (30 days)"],
        },
        {
          name: "Class Mate (Max 30 Person)",
          price: "950K - 1.450K",
          note: "Extra +50k/person",
          variants: [
            {
              label: "Photo Only (950k)",
              detail: "3 Hour, 130 file photo edited",
            },
            {
              label: "Full Package (1.450k)",
              detail: "5 Hour, All file edited + Cinematic video",
            },
          ],
          features: ["Unlimited shoot", "Google drive storage (30 days)"],
        },
      ],
    },
    {
      category: "PRODUCT.PROJECT",
      items: [
        {
          name: "Suite Package",
          price: "400K - 650K",
          note: "1 Product (Add +50k/product). Product sent by client first.",
          variants: [
            { label: "Photo Only (400k)", detail: "20 file edit/product" },
            {
              label: "Full Package (650k)",
              detail: "All file edit + Cinematic video",
            },
          ],
          features: [
            "Unlimited shoot",
            "Menu book concept (by request)",
            "Google drive storage (30 days)",
          ],
        },
      ],
    },
  ];

  return (
    <div className="pricelist-container">
      <section className="pricelist-header">
        <h1 className="brand-font">Our Pricelist</h1>
        <p>Premium Documentation for Your Special Moments</p>
      </section>

      <div className="container">
        {allProjects.map((section, idx) => (
          <div key={idx} className="project-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="cards-grid">
              {section.items.map((item, i) => (
                <div key={i} className="premium-card">
                  <div className="card-header">
                    <h3>{item.name}</h3>
                    {item.sub && <span className="sub-text">{item.sub}</span>}
                    <div className="main-price">{item.price}</div>
                  </div>

                  <div className="card-body">
                    {item.variants && (
                      <div className="variants-box">
                        {item.variants.map((v, vi) => (
                          <div key={vi} className="variant-item">
                            <strong>{v.label}</strong>
                            <p>{v.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="feat-list">
                      {item.features.map((f, fi) => (
                        <li key={fi}>
                          <FaCheck className="gold-check" /> {f}
                        </li>
                      ))}
                    </ul>

                    {item.addon && (
                      <div className="addon-tag">
                        <FaPlus className="plus-icon" /> {item.addon}
                      </div>
                    )}

                    {item.note && (
                      <div className="note-tag">
                        <FaInfoCircle /> {item.note}
                      </div>
                    )}
                  </div>
                  <button className="btn-gold-solid">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pricelist-container {
          padding-top: 120px;
          background-color: #f9f9f9;
          padding-bottom: 80px;
        }
        .pricelist-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .pricelist-header h1 {
          fontsize: 3.5rem;
          color: #1a1a1a;
        }
        .project-section {
          margin-bottom: 100px;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          border-bottom: 3px solid var(--primary-gold);
          display: inline-block;
          left: 50%;
          position: relative;
          transform: translateX(-50%);
          padding-bottom: 10px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .premium-card {
          background: #fff;
          border: 1px solid #ddd;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          transition: 0.3s;
          position: relative;
        }

        .premium-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .card-header h3 {
          font-size: 1.6rem;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        .sub-text {
          font-size: 0.9rem;
          color: #888;
          font-style: italic;
        }
        .main-price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-gold);
          margin-top: 15px;
        }

        .feat-list {
          list-style: none;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .feat-list li {
          margin-bottom: 12px;
          font-size: 0.95rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .gold-check {
          color: var(--primary-gold);
          margin-top: 5px;
        }

        .variants-box {
          background: #f4f4f4;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .variant-item {
          margin-bottom: 10px;
        }
        .variant-item strong {
          color: var(--primary-gold);
          font-size: 1rem;
        }
        .variant-item p {
          font-size: 0.85rem;
          color: #666;
        }

        .addon-tag {
          background: #1a1a1a;
          color: white;
          padding: 10px;
          font-size: 0.85rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .plus-icon {
          color: var(--primary-gold);
        }

        .note-tag {
          font-size: 0.8rem;
          color: #d63031;
          font-style: italic;
          margin-bottom: 20px;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .btn-gold-solid {
          background: var(--primary-gold);
          color: white;
          border: none;
          padding: 15px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-gold-solid:hover {
          background: #b8962e;
        }

        @media (max-width: 768px) {
          .pricelist-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricelist;
