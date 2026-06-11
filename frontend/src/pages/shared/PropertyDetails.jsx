import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config";
import { capitalize, titleCase } from "../../style/Styles";
import {
  HiLocationMarker,
  HiOutlineHome,
  HiArrowsExpand,
  HiChatAlt,
  HiHeart,
  HiOutlineLogout,
  HiShare,
  HiFlag,
  HiBadgeCheck,
  HiChevronRight,
  HiOutlineUserGroup,
  HiOutlineViewGrid,
  HiCalendar,
  HiX,
  HiChevronLeft,
  HiCollection,
  HiOutlineHeart,
} from "react-icons/hi";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Navbar from "../../components/common/Navbar";
import PropertyCard from "../../components/common/PropertyCard";
import { useAuth } from "../../context/AuthContext";
import { propertyDetailsStyles as s } from "../../style/property/propertDetailStyle";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [existingInquiry, setExistingInquiry] = useState(null);
  const [property, setProperty] = useState(null);
  const [chatBlockedMsg, setChatBlockedMsg] = useState("");
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [inquiryStatus, setInquiryStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/property/${id}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        setProperty(res.data.property);
        if (
          user &&
          user.role === "buyer"
        ) {

          try {

            const inquiryRes =
              await axios.get(

                `${API_URL}/api/inquiry/my`,

                {
                  headers: {
                    Authorization:
                      `Bearer ${token}`
                  }
                }

              );

            const found =
              inquiryRes.data.inquiries.find(

                (i) =>

                  i.property?._id === id

              );

            if (found) {

              setExistingInquiry(found);

            }

          }

          catch (err) {

            console.log(err);

          }

        }
        setSimilarProperties(res.data.similarProperties || []);

        if (user && user.role === "buyer") {
          const wishRes = await axios.get(`${API_URL}/api/wishlist`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const found = wishRes.data.some((item) => item.property?._id === id);
          setIsInWishlist(found);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load property details.");
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id, user, token]);

  const handleWishlistToggle = async () => {
    if (!user) return navigate("/login");
    try {
      if (isInWishlist) {
        await axios.delete(`${API_URL}/api/wishlist/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsInWishlist(false);
      } else {
        await axios.post(
          `${API_URL}/api/wishlist/${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setIsInWishlist(true);
      }
    } catch (err) {
      alert("Failed to update wishlist.");
    }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!user) return navigate("/login");

    if (user.role !== "buyer") return alert("Only buyers can send inquiries");

    setInquiryStatus({ ...inquiryStatus, loading: true });
    try {
      await axios.post(
        `${API_URL}/api/inquiry`,
        {
          propertyId: id,
          message: inquiry.message,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      // setInquiryStatus({ loading: false, success: true, error: null });
      setExistingInquiry({ status: "pending", message: inquiry.message });
      setInquiryStatus({ loading: false, success: true, error: null });
      setInquiry({ ...inquiry, message: "" });
    } catch (err) {
      setInquiryStatus({
        loading: false,
        success: false,
        error: "Failed to send inquiry.",
      });
    }
  };



  const handleChatStart = async (inq) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/chat/start`,
        {
          propertyId: id,
          sellerId: property.seller._id
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/chat-messages", { state: { chat: res.data } });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to open chat.");
    }
  };

  const [lightboxIndex, setLightboxIndex] = useState(null);
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden"); // ← add this
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden"); // ← add this
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden"); // ← add this
    };
  }, [lightboxIndex]);

  if (loading)
    return (
      <div className="loader-full-page">
        <div className="loader"></div>
      </div>
    );
  if (error || !property)
    return (
      <div
        className="container"
        style={{ padding: "4rem", textAlign: "center" }}
      >
        {error || "Property not found"}
      </div>
    );

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % property.images.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length,
    );

  return (
    <div className={s.pageContainer}>
      <Navbar />

      <main className={s.mainContainer}>
        {/* Breadcrumbs */}
        <nav className={s.breadcrumbs}>
          <Link to="/" className={s.breadcrumbLink}>
            Home
          </Link>
          <HiChevronRight />
          <Link to="/properties" className={s.breadcrumbLink}>
            Listings
          </Link>
          <HiChevronRight />
          <span className={s.breadcrumbCurrent}>{titleCase(property.title)}</span>
        </nav>

        <div className={s.galleryContainer}>

          {property.images.length === 1 ? (
            <div
              className="hidden md:block w-full bg-[#f1f5f9]  rounded-3xl overflow-hidden cursor-pointer"
              style={{ height: "420px" }}
              onClick={() => openLightbox(0)}
            >
              <img
                src={property.images[0]}
                alt="Main Property"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div
              className={s.galleryGrid}
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(2, 180px)",
              }}
            >
              {/* Main Large Image */}
              <div
                className={s.galleryMainItem(true)}
                onClick={() => openLightbox(0)}
              >
                <img
                  src={property.images[0]}
                  alt="Main Property"
                  className={s.galleryImage}
                />
              </div>

              {/* Side Images */}
              {property.images.slice(1, 5).map((img, idx) => (
                <div
                  key={idx}
                  className={s.gallerySideItem}
                  onClick={() => openLightbox(idx + 1)}
                >
                  <img
                    src={img}
                    alt={`Property Interior ${idx + 1}`}
                    className={s.galleryImage}
                  />
                  {idx === 3 && property.images.length > 5 && (
                    <div className={s.galleryMoreOverlay}>
                      +{property.images.length - 5}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Mobile Only Slider */}
          <div className={s.mobileSliderContainer}>
            <div className={s.mobileSliderTrack}>
              {property.images.map((img, idx) => (
                <div
                  key={idx}
                  className={s.mobileSlide}
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className={s.mobileSlideImage}
                  />
                  <div className={s.mobileSlideCounter}>
                    {idx + 1} / {property.images.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className={s.lightboxOverlay} onClick={closeLightbox}>
            <button onClick={closeLightbox} className={s.lightboxCloseBtn}>
              <HiX size={24} className={s.lightboxCloseIcon} />
            </button>

            <div
              className={s.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={property.images[lightboxIndex]}
                alt={`Property Full ${lightboxIndex + 1}`}
                className={s.lightboxImage}
              />

              {property.images.length > 1 && (
                <>
                  <button onClick={prevImage} className={s.lightboxPrevBtn}>
                    <HiChevronLeft size={30} />
                  </button>
                  <button onClick={nextImage} className={s.lightboxNextBtn}>
                    <HiChevronRight size={30} />
                  </button>
                </>
              )}

              <div className={s.lightboxCounter}>
                {lightboxIndex + 1} / {property.images.length}
              </div>
            </div>
          </div>
        )}

        {/* Main Content & Sidebar Grid */}
        <div className={s.detailsLayout}>
          {/* Left Column: Property Info */}
          <div className={s.infoColumn}>
            <div className={s.infoHeader}>
              <div className={s.titleWrapper}>
                <div className={s.badgeWrapper}>
                  <span className={s.premiumBadge}>Premium Listing</span>
                </div>
                <h1 className={s.propertyTitle}>{titleCase(property.title)}</h1>
                <p className={s.propertyLocation}>
                  <HiLocationMarker className={s.locationIcon} />
                  <span className={s.locationText}>
                    {titleCase(property.area)}, {titleCase(property.city)}, India
                  </span>
                </p>
              </div>
              <div className={s.actionButtons}>
                {(!user || user.role === "buyer") && (
                  <button
                    onClick={handleWishlistToggle}
                    className={s.wishlistButton(isInWishlist)}
                  >
                    {isInWishlist ? (
                      <HiHeart size={26} fill="#ef4444" />
                    ) : (
                      <HiOutlineHeart size={26} />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Quick Stats Boxes */}
            <div className={s.statsGrid}>
              {[
                {
                  label: "Bedrooms",
                  value: property.bhk || 0,
                  icon: HiOutlineHome,
                },
                {
                  label: "Bathrooms",
                  value:
                    property.bathrooms ||
                    Math.max(1, (parseInt(property.bhk) || 1) - 1),
                  icon: HiOutlineUserGroup,
                },
                {
                  label: "Furnishing",
                  value: property.furnishing || "N/A",
                  icon: HiCollection,
                },
                {
                  label: "Living Area",
                  value: `${property.areaSize} sqft`,
                  icon: HiOutlineViewGrid,
                },
                {
                  label: "Type",
                  value: property.propertyType,
                  icon: HiCalendar,
                },
              ].map((stat, i) => (
                <div key={i} className={s.statCard}>
                  {stat.icon && <stat.icon size={18} className={s.statIcon} />}
                  <div className={s.statValue}>{stat.value}</div>
                  <div className={s.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Description Section */}
            <div className={s.descriptionSection}>
              <h3 className={s.sectionTitle}>Description</h3>
              <p className={s.descriptionText}>
                {property.description ||
                  "No description available for this property."}
              </p>
            </div>

            {/* Amenities List */}
            <div className={s.amenitiesSection}>
              <h3 className={s.sectionTitle}>Amenities</h3>
              <div className={s.amenitiesGrid}>
                {(property.amenities?.length
                  ? property.amenities
                  : ["Parking", "Security", "Water Supply", "Power Backup"]
                ).map((amn, i) => (
                  <div key={i} className={s.amenityItem}>
                    <HiBadgeCheck size={18} className={s.amenityIcon} />
                    <span className={s.amenityText}>{amn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className={s.sidebarColumn}>
            {/* Price Card */}
            <div
              className={s.priceCard}
            // style={{ background: "var(--primary)" }}
            >
              <div className={s.priceCardLabel}>
                {property.status?.toLowerCase() === "rent"
                  ? "Rental Details"
                  : "Listing Price"}
              </div>
              <div className={s.priceCardValue}>
                {property.status?.toLowerCase() === "rent"
                  ? `₹${Number(property.price).toLocaleString("en-IN")}`
                  : formattedPrice}
                {property.status?.toLowerCase() === "rent" && (
                  <span className={s.priceCardPeriod}> /month</span>
                )}
              </div>
              {property.status?.toLowerCase() === "rent" && (
                <div className={s.rentDetails}>
                  <div className={s.rentDetailRow}>
                    <span className={s.rentDetailLabel}>Security Deposit</span>
                    <span className={s.rentDetailValue}>
                      ₹
                      {Number(property.securityDeposit || 0).toLocaleString(
                        "en-IN",
                      )}
                    </span>
                  </div>
                  <div className={s.rentDetailRow}>
                    <span className={s.rentDetailLabel}>Maintenance</span>
                    <span className={s.rentDetailValue}>
                      ₹
                      {Number(property.maintenance || 0).toLocaleString(
                        "en-IN",
                      )}
                      /mo
                    </span>
                  </div>
                </div>
              )}
              <div className={s.priceCardAvailability}>
                Available for{" "}
                {property.status?.toLowerCase() === "rent" ? "Rent" : "Sale"}
              </div>
            </div>

            {/* Seller & Contact */}
            <div className={s.sellerCard}>
              <div className={s.sellerInfo}>
                <div className={s.sellerAvatar}>
                  <img
                    src={
                      property.seller?.profilePic ||
                      `https://ui-avatars.com/api/?name=${property.seller?.name || "Seller"}&background=0d6e59&color=fff`
                    }
                    alt="Agent"
                    className={s.sellerAvatarImage}
                  />
                </div>
                <div className={s.sellerDetails}>
                  <div className={s.sellerNameLink}>
                    <h4 className={s.sellerName}>
                      {property.seller?.name || "Seller"}
                    </h4>
                  </div>
                  <div className={s.sellerVerifiedBadge}>
                    <HiBadgeCheck className={s.verifiedIcon} /> Verified Seller
                  </div>
                </div>
              </div>
               <div className={s.chatButtonWrapper}>
                {user?.role === "buyer" && (
                  <>
                    <button
                      className={s.chatButton}
                      onClick={() => {
                        if (existingInquiry?.status !== "accepted") {
                          setChatBlockedMsg(
                            !existingInquiry
                              ? "Send an inquiry first to unlock chat."
                              : existingInquiry.status === "pending"
                                ? "Chat will unlock once seller accepts your inquiry."
                                : "Seller declined your inquiry. Chat is unavailable."
                          );
                          return;
                        }
                        setChatBlockedMsg("");
                        handleChatStart();
                      }}
                    >
                      <HiChatAlt />
                      {existingInquiry?.status === "accepted" ? "Chat" : ""}
                    </button>

                    {chatBlockedMsg && (
                      <p style={{
                        color: "#ef4444",
                        fontSize: "0.8rem",
                        marginTop: "6px",
                        textAlign: "center"
                      }}>
                        {chatBlockedMsg}
                      </p>
                    )}
                  </>
                )}
              </div>
              {/* Inquiry Form */}
              <h4 className={s.inquiryFormTitle}>Inquire</h4>

              <form
                onSubmit={handleInquirySubmit}
                className={s.inquiryForm}
              >
                {user?.role === "buyer" ? (
                  existingInquiry ? (
                    <div className={s.inquiryStatusBox}>
                      <h4 className={s.inquiryStatusTitle}>
                        Inquiry Status:{" "}
                        <strong>{existingInquiry.status}</strong>
                      </h4>

                      {existingInquiry.status === "pending" && (
                        <p className={s.inquiryStatusText}>
                          Waiting for seller response
                        </p>
                      )}

                      {existingInquiry.status === "accepted" && (
                        <p className={s.inquiryStatusText}>
                          Seller accepted. You can now chat.
                        </p>
                      )}

                      {existingInquiry.status === "rejected" && (
                        <p className={s.inquiryStatusText}>
                          Seller declined inquiry.
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className={s.inquiryInputGroup}>
                      <textarea
                        className={s.inquiryTextarea}
                        placeholder="Write your message..."
                        value={inquiry.message}
                        onChange={(e) =>
                          setInquiry({
                            ...inquiry,
                            message: e.target.value,
                          })
                        }
                        required
                      />

                      <button
                        className={s.inquirySubmitButton}
                        type="submit"
                        disabled={inquiryStatus.loading}
                      >
                        {inquiryStatus.loading
                          ? "Sending..."
                          : "Send Inquiry"}
                      </button>
                    </div>
                  )
                ) : (
                  <div className={s.inquiryDisabledMessage}>
                    <p className={s.inquiryDisabledText}>
                      {user
                        ? "Only buyers can send inquiries."
                        : "Please login as a buyer to send inquiries."}
                    </p>
                    {!user && (
                      <Link to="/login" className={s.inquiryLoginButton}>
                        Login
                      </Link>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Additional Details Box */}
        <div className={s.additionalDetails}>
          <h3 className={s.detailsTitle}>Property Details</h3>
          <div className={s.detailsGrid}>
            {[
              {
                label: "Property ID",
                value: property._id.slice(-8).toUpperCase(),
              },
              {
                label: "Added On",
                value: new Date(property.createdAt).toLocaleDateString(),
              },
              { label: "Property Type", value: property.propertyType },
              { label: "Status", value: `For ${property.status}` },
            ].map((detail, i) => (
              <div key={i} className={s.detailRow}>
                <span className={s.detailLabel}>{detail.label}</span>
                <span className={s.detailValue}>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Properties */}
        <section className={s.similarSection}>
          <div className={s.similarHeader}>
            <div>
              <h2 className={s.similarTitle}>Similar Properties</h2>
              <p className={s.similarSubtitle}>
                Listings you might like in {titleCase(property.city)}.
              </p>
            </div>
            <Link to="/properties" className={s.similarAllLink}>
              All Listings <HiChevronRight />
            </Link>
          </div>
          <div className={s.similarGrid}>
            {similarProperties.length > 0 ? (
              similarProperties
                .slice(0, 3)
                .map((p) => <PropertyCard key={p._id} property={p} />)
            ) : (
              <div className={s.similarEmptyState}>
                No similar properties found in this location.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropertyDetails;
