export const propertyDetailsStyles = {
  pageContainer: "bg-[#f8fafc] min-h-screen pb-24 pt-32 max-lg:pt-18",
  mainContainer: "container fade-in pt-4",
  breadcrumbs: "flex items-center flex-wrap gap-2 text-sm text-[#64748b] mb-6",
  breadcrumbLink: "text-inherit no-underline",
  breadcrumbCurrent: "text-text-main font-semibold break-words max-w-full",
  galleryContainer: "property-gallery-container mb-8",
  galleryGrid:
    "property-gallery hidden md:grid gap-3 rounded-3xl overflow-hidden " +
    "[&:has(>div:only-child)]:rounded-3xl " + 
    "[&:has(>div:nth-child(2):last-child)]:!grid-cols-2 " +
    "[&:has(>div:nth-child(2):last-child)>div]:!col-span-1 " +
    "[&:has(>div:nth-child(2):last-child)>div]:!row-span-2 " +
    "[&:has(>div:nth-child(3):last-child)]:!grid-cols-2 " +
    "[&:has(>div:nth-child(3):last-child)>.main-image]:!col-span-1 " +
    "[&:has(>div:nth-child(3):last-child)>.main-image]:!row-span-2 " +
    "[&:has(>div:nth-child(4):last-child)>div:nth-child(2)]:!col-span-2",
  galleryMainItem: (hasMultiple) =>
  `gallery-item main-image relative overflow-hidden bg-[#f1f5f9] cursor-pointer ${
    hasMultiple ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
  }`,
  gallerySideItem:
    "gallery-item relative overflow-hidden bg-[#f1f5f9] cursor-pointer",
  
  galleryImage:
  "w-full h-full object-cover object-center transition-transform duration-400 ease",
  galleryMoreOverlay:
    "absolute inset-0 bg-black/50 text-white flex items-center justify-center text-2xl font-bold pointer-events-none",
  mobileSliderContainer: "mobile-gallery-wrapper block md:hidden -mx-4 mb-6",
  mobileSliderTrack:
    "mobile-slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth  [&::-webkit-scrollbar]:hidden",
  mobileSlide:
    "mobile-slide flex-[0_0_100%] snap-start relative "+"h-[280px]",
  mobileSlideImage: "w-full h-full object-contain px-2 " ,
  mobileSlideCounter:
    "slide-counter absolute bottom-4 right-4 bg-black/60 text-white py-1 px-3 rounded-2xl text-xs font-semibold",
  lightboxOverlay:
    "fixed inset-0 bg-black/35 z-[2000] flex flex-col items-center justify-start pt-24 backdrop-blur-[10px]",
  lightboxCloseBtn:
    "absolute top-8 right-8 bg-white border-none rounded-full w-11 h-11 cursor-pointer flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] z-[2001] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxCloseIcon: "text-primary",
  lightboxContent:
    "w-[85%] max-w-[900px] bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative",

  lightboxImage: "w-full h-[65vh] object-contain rounded-2xl",
  lightboxPrevBtn:
    "absolute -left-[22px] top-1/2 -translate-y-1/2 bg-white border-none text-primary w-11 h-11 flex items-center justify-center cursor-pointer rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxNextBtn:"absolute -right-[22px] top-1/2 -translate-y-1/2 bg-white border-none text-primary w-11 h-11 flex items-center justify-center cursor-pointer rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxCounter:"absolute -bottom-[45px] left-1/2 -translate-x-1/2 text-white text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
  detailsLayout:"details-layout grid grid-cols-[1fr_380px] gap-10 items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-8",
  infoColumn: "info-column min-w-0",
  infoHeader: "mb-8",
  titleWrapper: "min-w-0 flex-1",
  badgeWrapper: "flex gap-2 flex-wrap",
  premiumBadge:"py-1.5 px-4 rounded-lg border border-primary text-primary text-xs font-bold uppercase inline-block mb-3",
  propertyTitle:"property-title text-[2.5rem] font-extrabold text-text-main mb-2 tracking-tight max-[768px]:text-[2rem] max-[480px]:text-[1.75rem] break-words whitespace-normal leading-tight",
  propertyLocation:"flex items-center gap-2 text-[#64748b] text-base break-words whitespace-normal max-w-full",
  locationIcon: "text-primary text-lg shrink-0",
  locationText: "break-words whitespace-normal",
  actionButtons: "flex gap-2 shrink-0",
  wishlistButton: (isInWishlist) =>`wishlist-action-btn w-12 h-12 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:border-[#cbd5e1] ${isInWishlist ? "text-red-500" : "text-[#64748b]"}`,
  statsGrid:  "stats-grid grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 mb-10 max-[768px]:grid-cols-2 max-[480px]:gap-2",

  statCard:"bg-white border border-[#e5e7eb] rounded-3xl py-6 px-4 text-center transition-all duration-200",

  statIcon: "text-primary mb-3 mx-auto text-xl",
  statValue: "font-bold text-lg text-[#0f172a]",
  statLabel: "text-xs text-[#64748b] uppercase tracking-wide mt-1",

  descriptionSection: "bg-white border border-[#e5e7eb] rounded-3xl p-8 mb-8",
  sectionTitle: "text-xl font-bold mb-4",
  descriptionText:  "text-[#475569] text-base leading-relaxed break-words whitespace-pre-wrap",
  amenitiesSection: "bg-white border border-[#e5e7eb] rounded-3xl p-8 mb-8",
  amenitiesGrid: "grid grid-cols-2 md:grid-cols-4 gap-4",
  amenityItem:  "bg-white border border-[#e5e7eb] rounded-2xl px-4 py-4 flex items-center gap-3",
  amenityIcon: "text-primary",
  amenityText: "break-words whitespace-normal",
  sidebarColumn: "sidebar-column min-w-0",
  priceCard: "bg-white border border-[#e5e7eb] rounded-3xl p-6 mb-6",
  priceCardLabel: "text-sm text-[#64748b] font-medium",
  priceCardValue: "text-4xl font-bold text-[#0f172a]",
  priceCardPeriod: "text-base font-normal opacity-80",
  rentDetails: "mt-4 border-t border-white/20 pt-4 flex flex-col gap-2",
  rentDetailRow: "flex justify-between text-[0.9rem] gap-4",
  rentDetailLabel: "opacity-80 min-w-0 break-words",
  rentDetailValue: "font-bold text-right break-words whitespace-normal",

  priceCardAvailability: "text-sm text-[#16a34a]",
  sellerCard: "bg-white p-6 rounded-[1.5rem] border border-[#f1f5f9]  min-w-0",
  sellerInfo: "flex items-center gap-4 mb-6 min-w-0",
  sellerAvatar:
    "w-[50px] h-[50px] rounded-full overflow-hidden bg-[#f1f5f9] shrink-0",
  sellerAvatarImage: "w-full h-full object-cover",
  sellerDetails: "min-w-0",
  sellerNameLink: "no-underline",
  sellerName:
    "text-base font-extrabold m-0 text-text-main transition-colors duration-200 hover:text-primary break-words whitespace-normal leading-snug",
  sellerVerifiedBadge:
    "flex items-center gap-1 text-[0.75rem] text-primary font-bold mt-2",
  verifiedIcon: "shrink-0",
  chatButtonWrapper: "flex gap-3 mb-6",
  chatButton:
    "btn btn-outline flex-1 hover:bg-[#f1f5f9] p-2.5 text-[0.875rem] flex items-center justify-center gap-2",
  additionalDetails: "bg-white p-8 rounded-3xl border border-[#e5e7eb] mt-10",
  detailsTitle: "text-xl font-bold mb-6 border-b border-[#f1f5f9] pb-3",
  detailsGrid:
    "details-grid-row grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-0",
  detailRow:
    "flex justify-between gap-4 py-2 border-b border-dashed border-[#f1f5f9] min-w-0",
  detailLabel:
    "text-[#64748b] text-[0.875rem] min-w-0 break-words whitespace-normal",
  detailValue:
    "text-text-main font-semibold capitalize text-right max-w-[60%] break-words whitespace-normal",
  similarSection: "mt-16",
  similarHeader: "flex justify-between items-end mb-8 flex-wrap gap-4",
  similarTitle: "text-[1.75rem] font-extrabold mb-1",
  similarSubtitle: "text-[#64748b] text-[0.9375rem]",
  similarAllLink:"btn btn-outline flex items-center gap-2 py-2.5 px-5 text-[0.875rem]",
  similarGrid:"similar-grid grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6",
  similarEmptyState:"col-span-full p-12 bg-[#f8fafc] rounded-[1.5rem] text-center border border-dashed border-[#e2e8f0] text-[#64748b] break-words whitespace-normal",
  inquiryForm: "mt-3",
  inquiryFormTitle: "text-[0.95rem] font-bold text-text-main mb-3",
  inquiryInputGroup: "flex flex-col gap-3",
  inquiryTextarea:"w-full min-h-[95px] p-3 rounded-xl border border-[#e2e8f0] bg-[#fafafa] text-[0.875rem] outline-none resize-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-black/5 placeholder:text-[#94a3b8]",
  inquirySubmitButton:"w-full py-3 px-4 rounded-xl bg-primary text-white font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed",
  inquiryStatusBox:"bg-[#f8fafc] border border-[#e5e7eb] rounded-2xl p-4 text-center",
  inquiryStatusTitle: "font-semibold text-[#0f172a]",
inquiryStatusText: "text-sm opacity-90 mt-1",
};
