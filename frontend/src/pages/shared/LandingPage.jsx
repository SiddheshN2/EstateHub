import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config";
import banner from "../../assets/bannerimage1.jpg";
import {
  HiLocationMarker,
  HiSearch,
  HiHome,
  HiOfficeBuilding,
  HiOutlineMap,
  HiLightningBolt,
  HiShieldCheck,
  HiCurrencyDollar,
  HiVideoCamera,
  HiMail,
  HiPhone,
  HiChatAlt,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import PropertyCard from "../../components/common/PropertyCard";
import { useAuth } from "../../context/AuthContext";
//import { footerStyles, heroStyles } from "../../style/landingpage/index";
import { heroStyles,footerStyles,featureStyles } from "../../style/landingpage/index";
const LandingPage = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [TotalCounts, setTotalCounts] = useState({});
  const[TotalSeller,setTotalSeller]=useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("Select Type");
  const [propertyCounts, setPropertyCounts] = useState({
    flat: 0,
    villa: 0,
    penthouse: 0,
    commercial: 0,
  });
  const [wishlistedIds, setWishlistedIds] = useState([]);

  useEffect(() => {
    fetchProperties();
    fetchCounts();
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlistedIds(
        res.data
          .filter((item) => item.property)
          .map((item) => String(item.property._id)),
      );
    } catch (err) {
      console.error("Failed to fetch wishlist:", err);
    }
  };

  const handleToggleWishlist = async (propertyId) => {
    try {
      const isWishlisted = wishlistedIds.includes(propertyId);
      if (isWishlisted) {
        await axios.delete(`${API_URL}/api/wishlist/${propertyId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWishlistedIds((prev) => prev.filter((id) => id !== propertyId));
      } else {
        await axios.post(
          `${API_URL}/api/wishlist/${propertyId}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setWishlistedIds((prev) => [...prev, propertyId]);
      }
    } catch (err) {
      console.error("Failed to toggle wishlist:", err);
    }
  };

  const fetchCounts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/property/counts`);
      if (res.data.success) {
        setPropertyCounts(res.data.counts);
        setTotalCounts(res.data);
        setTotalSeller(res.data);
        console.log(res.data)
      }
    } catch (err) {
      console.error("Failed to fetch property counts:", err);
    }
  };

  const fetchProperties = async (search = "") => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/property?city=${search}`);
      setProperties(res.data.properties || res.data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) params.append("city", searchTerm);
    if (propertyType !== "Select Type") params.append("type", propertyType);
    navigate(`/properties?${params.toString()}`);
  };

  const categories = [
    {
      name: "Modern Flats",
      count: propertyCounts.flat||propertyCounts.apartment || 0,
      icon: <HiOfficeBuilding size={32} />,
      type: "flat",
    },
    {
      name: "Luxury Villas",
      count: propertyCounts.villa || 0,
      icon: <HiHome size={32} />,
      type: "villa",
    },
    {
      name: "Penthouse",
      count: propertyCounts.penthouse || 0,
      icon: <HiOfficeBuilding size={32} />,
      type: "penthouse",
    },
    {
      name: "Commercial",
      count: propertyCounts.commercial ||propertyCounts.office ||0,
      icon: <HiOfficeBuilding size={32} />,
      type: "commercial",
    },
  ];

  const features = [
    {
      title: "Verified Trust",
      desc: "Every listing is strictly audited for ownership, condition, and legality.",
      icon: <HiShieldCheck size={24} />,
    },
    {
      title: "Smart Search",
      desc: "Our AI-driven algorithms help you find the best matches based on preferences.",
      icon: <HiLightningBolt size={24} />,
    },
    {
      title: "Best Value",
      desc: "Direct-from-owner listings and zero-commission options to ensure competitive prices.",
      icon: <HiCurrencyDollar size={24} />,
    },
    {
      title: "Seamless Connection",
      desc: "Connect with top agents, brokers, and landlords for a hassle-free experience.",
      icon: <HiChatAlt size={24} />,
    },
  ];

  return (
    <div className={heroStyles.bgMain}>
      <Navbar />

      {/* Hero Section */}
      <section className={heroStyles.heroSection}>
        <div className={heroStyles.heroContent}>
          <span className={heroStyles.badge}>Trusted by 200+ homeowners</span>
          <h1 className={heroStyles.heroTitle}>
            Find Your <span className={heroStyles.textGradient}>Perfect</span> Next
            Chapter.
          </h1>
          <p className={heroStyles.heroSubtitle}>
            Experience the most advanced real estate search platform. Discover
            verified listings, connect with top agents, and find a place you'll
            love.
          </p>

          {/* Integrated Search */}
          <form onSubmit={handleSearch} className={heroStyles.searchForm}>
            <div className={heroStyles.searchField}>
              <div className={heroStyles.textPrimary}>
                <HiLocationMarker size={26} />
              </div>
              <div className={heroStyles.flexCol}>
                <label className={heroStyles.labelSmall}>Location</label>
                <input
                  type="text"
                  placeholder="Where are you looking?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={heroStyles.inputTransparent}
                />
              </div>
            </div>
            <div className={heroStyles.searchDivider}></div>
            <div className={heroStyles.searchField}>
              <div className={heroStyles.textPrimary}>
                <HiHome size={26} />
              </div>
              <div className={heroStyles.flexCol}>
                <label className={heroStyles.labelSmall}>Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className={`${heroStyles.inputTransparent} cursor-pointer`}
                >
                  <option value="Select Type">Select Type</option>
                  <option value="flat">Flat/Apartment</option>
                  <option value="villa">Villa/House</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>
            <button type="submit" className={heroStyles.searchButton}>
              <HiSearch size={22} /> Search
            </button>
          </form>

          {/* Stats */}
          <div className={heroStyles.statsContainer}>
            <div className={heroStyles.statItemFlex}>
              <h3 className={heroStyles.statNumber}>{TotalCounts.totalProperties}</h3>
              <p className={heroStyles.statLabel}>Ready Properties</p>
            </div>
            <div className={heroStyles.statItemBorder}>
              <h3 className={heroStyles.statNumber}>{TotalSeller.totalSellers}</h3>
              <p className={heroStyles.statLabel}>Agent Network</p>
            </div>
            <div className={heroStyles.statItemBorder}>
              <h3 className={heroStyles.statNumber}>4.9/5</h3>
              <p className={heroStyles.statLabel}>User Rating</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={heroStyles.heroImageContainer}>
          <div className={heroStyles.imageWrapper}>
            <img src={banner} alt="Luxury Home" className={heroStyles.heroImage} />
            {/* Verified Badge Overlay */}
            <div className={heroStyles.verifiedBadge}>
              <div className={heroStyles.badgeIconWrapper}>
                <HiShieldCheck size={24} className="text-primary" />
              </div>
              <div>
                <h4 className={heroStyles.badgeTitle}>Verified Listing</h4>
                <p className={heroStyles.badgeText}>
                  Inspected by our professional team
                </p>
              </div>
              <span className={heroStyles.preApproved}>Pre-Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className={heroStyles.categorySection}>
        <div className={heroStyles.container}>
          <div className={heroStyles.categoryHeader}>
            <div className={heroStyles.categoryHeaderText}>
              <h2 className={heroStyles.categoryTitle}>Browse by Category</h2>
              <p className={heroStyles.categoryDesc}>
                Explore curated collections of properties tailored to your
                specific lifestyle and needs.
              </p>
            </div>
          </div>
          <div className={heroStyles.categoryGrid}>
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={heroStyles.categoryCard}
                onClick={() => navigate(`/properties?type=${cat.type}`)}
              >
                <div className={heroStyles.categoryIconWrapper}>{cat.icon}</div>
                <h3 className={heroStyles.categoryName}>{cat.name}</h3>
                <p className={heroStyles.categoryCount}>
                  {cat.count.toLocaleString()} Properties
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={featureStyles.featuresSection}>
        <div className={featureStyles.featuresContainer}>
          <div className={featureStyles.featuresList}>
            {features.map((f, idx) => (
              <div
                key={idx}
                className={featureStyles.featureCard}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={featureStyles.featureIconWrapper}>{f.icon}</div>
                <h3 className={featureStyles.featureTitle}>{f.title}</h3>
                <p className={featureStyles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className={featureStyles.featuresContent}>
            <h2 className={featureStyles.featuresHeading}>
              Why EstateHub
              <br />
              is the <span className={featureStyles.textGradient}>Preferred Choice.</span>
            </h2>
            <p className={featureStyles.featuresSubtext}>
              We've reinvented the property search experience from the ground
              up. By focusing on transparency, technological precision, and
              user-centric design, we help you find not just a house, but a
              home.
            </p>
            <ul className={featureStyles.featuresListItems}>
              {[
                "Direct connection with certified agents",
                "Real-time market valuation data",
                "Secure document management system",
                "24/7 Premium customer support",
              ].map((item, idx) => (
                <li key={idx} className={featureStyles.listItem}>
                  <HiLightningBolt className="text-primary" /> {item}
                </li>
              ))}
            </ul>
            <a href="#process" className={featureStyles.learnMoreLink}>
              Learn more about our process &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className={featureStyles.processSection}>
        <div className={featureStyles.container}>
          <div className={featureStyles.processHeader}>
            <span className={featureStyles.processBadge}>How It Works</span>
            <h2 className={featureStyles.processTitle}>
              Our Seamless <span className={featureStyles.textGradient}>Process</span>
            </h2>
            <p className={featureStyles.processSubtitle}>
              We've simplified the journey of finding your dream home into three
              clear, stress-free steps.
            </p>
          </div>

          <div className={featureStyles.processGrid}>
            {[
              {
                step: "01",
                title: "Smart Search",
                desc: "Leverage our AI-driven Smart Search algorithms to find the best property matches tailored to your specific preferences.",
                icon: <HiLightningBolt size={32} />,
              },
              {
                step: "02",
                title: "Seamless Connection",
                desc: "Connect with top agents, brokers, and landlords for a hassle-free experience.",
                icon: <HiChatAlt size={32} />,
              },
              {
                step: "03",
                title: "Verified Trust",
                desc: "Every listing is strictly audited for ownership and condition, ensuring your peace of mind and a secure transaction.",
                icon: <HiShieldCheck size={32} />,
              },
            ].map((p, idx) => (
              <div key={idx} className={featureStyles.processCard}>
                <div className={featureStyles.stepNumber}>{p.step}</div>
                <div className={featureStyles.processIconWrapper}>{p.icon}</div>
                <h3 className={featureStyles.processCardTitle}>{p.title}</h3>
                <p className={featureStyles.processCardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className={featureStyles.featuredSection}>
        <div className={featureStyles.container}>
          <div className={featureStyles.featuredHeader}>
            <span className={featureStyles.featuredBadge}>Handpicked For You</span>
            <h2 className={featureStyles.featuredTitle}>Featured Collections</h2>
            <p className={featureStyles.featuredSubtitle}>
              Discover high-value properties curated by our experts for their
              exceptional design, location, and investment potential.
            </p>
          </div>

          {loading ? (
            <div className={featureStyles.loadingContainer}>
              <div className={featureStyles.loader}></div>
            </div>
          ) : error ? (
            <div className={featureStyles.errorContainer}>
              <p>{error}</p>
            </div>
          ) : (
            <div className={featureStyles.propertiesGrid}>
              {properties
                .filter((p) => p)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 6)
                .map((property) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                    isWishlisted={wishlistedIds.includes(String(property._id))}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
            </div>
          )}

          <div className={featureStyles.discoverButtonContainer}>
            <button
              onClick={() => navigate("/properties")}
              className={featureStyles.discoverButton}
            >
              Discover More Properties
            </button>
          </div>
        </div>
      </section>

      <footer className={footerStyles.footer}>
        <div className={footerStyles.container}>
          <div className={footerStyles.footerMainGrid}>
            {/* Column 1: Brand & About */}
            <div className={footerStyles.footerBrand}>
              <div className={footerStyles.brandLogo}>
                <div className={footerStyles.brandIcon}>RE</div>
                EstateHub
              </div>
              <p className={footerStyles.brandDesc}>
                The most trusted platform for buying, selling, and renting
                premium real estate globally. We make property hunting seamless.
              </p>
              <div className={footerStyles.socialIcons}>
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, idx) => (
                    <a key={idx} href="#" className={footerStyles.socialIcon}>
                      <Icon size={16} />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className={footerStyles.footerHeading}>Company</h4>
              <ul className={footerStyles.footerLinks}>
                <li>
                  <a href="/" className={footerStyles.footerLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/properties" className={footerStyles.footerLink}>
                    Property
                  </a>
                </li>
                <li>
                  <a href="/wishlist" className={footerStyles.footerLink}>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="/contact" className={footerStyles.footerLink}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className={footerStyles.footerHeading}>Support</h4>
              <ul className={footerStyles.footerLinks}>
                <li className={footerStyles.contactInfo}>
                  <HiMail className="text-primary text-xl" />{" "}
                  contact@reestate.com
                </li>
                <li className={footerStyles.contactInfo}>
                  <HiPhone className="text-primary text-xl" /> +91 1234567890
                </li>
                <li className={footerStyles.contactInfoStart}>
                  <HiLocationMarker
                    className={`text-primary ${footerStyles.contactIcon}`}
                  />
                  123 Business Hub, India
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className={footerStyles.footerHeading}>Newsletter</h4>
              <p className={footerStyles.newsletterDesc}>
                Subscribe to get the latest listings and market insights
                directly in your inbox.
              </p>
              <div className={footerStyles.newsletterInputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.newsletterInput}
                />
                <button className={footerStyles.newsletterButton}>Join</button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={footerStyles.bottomBar}>
            <div className={footerStyles.bottomBarFlex}>
              <p>
                © {new Date().getFullYear()} EstateHub. All rights reserved.
              </p>
              <div className={footerStyles.footerLegalLinks}>
                <a href="#" className={footerStyles.footerLink}>
                  Privacy Policy
                </a>
                <a href="#" className={footerStyles.footerLink}>
                  Terms of Service
                </a>
                <a href="#" className={footerStyles.footerLink}>
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};heroStyles
export default LandingPage;
