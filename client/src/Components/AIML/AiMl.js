import React, { useState, useEffect } from "react";
import Header from "../HeaderAndFooter/Header";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Rocket,
  Users,
  Building2,
  CheckCircle2,
  Phone,
} from "lucide-react";

const AiMl = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSolution, setCurrentSolution] = useState(0);

  const statsData = [
    {
      value: "56%",
      label: "surge in client service requests and product demand",
    },
    { value: "70%", label: "faster product to market for our clients" },
    { value: "3X", label: "boost in operational efficiency" },
    { value: "48%", label: "operational cost savings while maximizing ROI" },
    { value: "80%", label: "improvement in customer engagement" },
    { value: "50+", label: "proven success stories across industries" },
  ];

  const slidesData = [
    {
      title: "Transform Business Efficiency with",
      highlight: "AI/ML",
      subtitle:
        "Streamline your workflows with our best AI expertise & engineers' support designed to boost productivity, cut costs, and scale intelligently.",
      buttonText: "Let's Automate",
      imageUrl:
        "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ai_Ml_Banner1_dba36a82d2.webp",
    },
    {
      title: "Want to Integrate AI into an Existing Business App?",
      highlight: "AI",
      subtitle:
        "We help modernize your existing systems by embedding AI that enhances decision-making, personalizes user experience, and drives efficiency.",
      buttonText: "Upgrade With AI Now",
      imageUrl:
        "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ai_Ml_Banner2_4a4fe526e1.webp",
    },
    {
      title: "Don't know how to start with AI? We've got your back!",
      highlight: "AI",
      subtitle:
        "From ideation to release, we craft AI strategies tailored to your goals, helping you start smart and scale faster.",
      buttonText: "Build My AI Strategy",
      imageUrl:
        "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/aiml_Slider_Banner3_d839f909e9.webp",
    },
  ];

  const useCasesData = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startups",
      description:
        "Fast-track your MVP and product-market fit with AI-powered efficiency.",
      features: [
        "Data-driven market insights to take your business to success",
        "Mitigate technical debt - Solid foundation for products with scalable architecture, avoiding costly reworks",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Businesses",
      description:
        "Automate repetitive processes and scale customer engagement effortlessly.",
      features: [
        "Attract Investment with a Strong Proof-of-Concept",
        "Business Process Audit & AI Roadmap",
      ],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Enterprises",
      description:
        "Scale with smart business intelligence to drive enterprise-wide transformation.",
      features: [
        "Seamless Integration with Legacy Systems",
        "Optimize and Automate Complex Business Processes",
      ],
    },
  ];

  const coreSolutionsData = [
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/AI_Development_icon_2a27cedd76.svg",
      title: "AI Development",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ML_Development_icon_33f7a23045.svg",
      title: "ML Development",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Generative_AI_97c987689f.svg",
      title: "Generative AI",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Computer_vision_Icon_bc9a9e60d5.svg",
      title: "Computer Vision",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/AI_chatbot_icon_48ad3655af.svg",
      title: "AI Chatbot Services",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/NLP_Solutions_Icon_64a5db322a.svg",
      title: "NLP Solutions",
    },
    {
      icon: "https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Big_Data_Icon_7e8edf5f7a.svg",
      title: "Big Data",
    },
  ];
  const DevelopmentNeedsData = [
    {
      description: "How We Start Transforming Your AI/ML Development Needs?",
      subdescription:
        "Our process is designed to turn complex data challenges into scalable AI-powered solutions with measurable impact.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  const nextSolution = () =>
    setCurrentSolution((prev) => (prev + 1) % coreSolutionsData.length);
  const prevSolution = () =>
    setCurrentSolution(
      (prev) => (prev - 1 + coreSolutionsData.length) % coreSolutionsData.length
    );

  const getSolutionsToShow = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(
        coreSolutionsData[(currentSolution + i) % coreSolutionsData.length]
      );
    }
    return items;
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Header />
      {/* Hero Slider */}
      <div
        style={{
          backgroundImage:
            'url("https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/ai_Ml_Bg_Web_d228f09bf9.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          padding: "80px 0",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            style={{
              position: index === currentSlide ? "relative" : "absolute",
              top: 0,
              left: 0,
              right: 0,
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              pointerEvents: currentSlide === index ? "auto" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "0 40px",
                minHeight: "500px",
              }}
            >
              <div style={{ flex: 1, maxWidth: "50%" }}>
                <h2
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    marginBottom: "20px",
                    color: "#000",
                  }}
                >
                  {slide.title}{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(269.86deg, #2c52be 11.04%, #ff822b 75.82%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {slide.highlight}
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    marginBottom: "30px",
                    color: "rgb(84, 90, 106)",
                  }}
                >
                  {slide.subtitle}
                </p>
                <button
                  style={{
                    backgroundColor: "rgb(30, 58, 138)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 28px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "translateY(-3px)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  {slide.buttonText}
                </button>
              </div>
              <div style={{ flex: 1, maxWidth: "45%" }}>
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Stats Section */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#f8f9fa",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "-150px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "400px",
              background:
                "radial-gradient(ellipse at top, rgba(100, 120, 220, 0.1), transparent 70%)",
              zIndex: 1,
            }}
          ></div>

          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "#212529",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.4,
              }}
            >
              Year-on-Year Impact in Driving Customer Success in the{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3a7bd5, #00d2ff)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI/ML Industry
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            {statsData.map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUp
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "#0056b3",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 700,
                        color: "#0056b3",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#6c757d",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section
          style={{
            padding: "80px 20px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto 50px auto" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "#212529",
                lineHeight: 1.3,
              }}
            >
              No Matter The Use Case, We've AI Solutions For Every{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff822b, #ff4500)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Ecosystem
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#6c757d",
                marginTop: "15px",
                lineHeight: 1.6,
              }}
            >
              With a vision to transform existing and new businesses through our
              AI-driven capabilities, we aim to build an ecosystem that evolves
              and scales alongside your growth.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {useCasesData.map((card, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f0f4ff",
                  borderRadius: "16px",
                  padding: "40px 30px",
                  textAlign: "left",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.07)",
                    color: "#2c52be",
                  }}
                >
                  {card.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "#212529",
                    marginBottom: "15px",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    color: "#6c757d",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {card.description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        fontSize: "1rem",
                        color: "#495057",
                      }}
                    >
                      <CheckCircle2
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#2c52be",
                          marginRight: "10px",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
              maxWidth: "1100px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #fef5e7, #f3e5f5)",
              borderRadius: "20px",
              padding: "50px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1.2", minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: 1.4,
                  marginBottom: "20px",
                }}
              >
                Want to See What Our{" "}
                <span style={{ color: "#ff822b" }}>AI/ML</span> Capabilities Can
                Do For Your Business?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6c757d",
                  lineHeight: 1.6,
                  marginBottom: "30px",
                }}
              >
                From idea extraction to commercialization, we plan to transform
                business with complete AI development services. Want to know
                how?
              </p>
              <button
                style={{
                  backgroundColor: "#2c52be",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 35px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.backgroundColor = "#1e3a8a";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.backgroundColor = "#2c52be";
                }}
              >
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>

            <div style={{ flex: 1, minWidth: "300px" }}>
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Processor"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Core Solutions */}
        <section
          style={{
            padding: "80px 20px",
            background: "linear-gradient(180deg, #fdf6ec, #f0f4ff)",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "40px",
                marginBottom: "50px",
                flexWrap: "wrap",
              }}
            >
              <h2
                style={{
                  flex: 1,
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "#212529",
                  lineHeight: 1.3,
                  minWidth: "300px",
                }}
              >
                Our Core AI/ML Development Solutions to Scale Smarter & Faster
              </h2>
              <p
                style={{
                  flex: 1,
                  fontSize: "1rem",
                  color: "#6c757d",
                  lineHeight: 1.6,
                  maxWidth: "500px",
                  minWidth: "300px",
                }}
              >
                While the world is still understanding AI, we are preparing a
                space that is built with AI. At DianApps, we integrate AI/ML
                solutions into our core functionality, not as a feature but as
                the foundation. Here's what we offer!
              </p>
            </div>

            <div style={{ position: "relative", padding: "0 60px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {getSolutionsToShow().map((solution, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "0 0 200px",
                      transition: "all 0.5s ease",
                      transform: index === 2 ? "scale(1.1)" : "scale(0.9)",
                      opacity: index === 2 ? 1 : 0.6,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "25px",
                        textAlign: "center",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.05)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        height: "180px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 35px rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(0, 0, 0, 0.05)";
                      }}
                    >
                      <div
                        style={{
                          marginBottom: "15px",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={solution.icon}
                          alt={solution.title}
                          style={{ maxHeight: "50px", maxWidth: "50px" }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 500,
                          color: "#495057",
                          margin: 0,
                        }}
                      >
                        {solution.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSolution}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 2,
                }}
              >
                <ChevronLeft style={{ width: "20px", height: "20px" }} />
              </button>

              <button
                onClick={nextSolution}
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 2,
                }}
              >
                <ChevronRight style={{ width: "20px", height: "20px" }} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiMl;
