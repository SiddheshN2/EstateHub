export const propertyCardStyles = {
  // Card container
  card: "fade-in group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[#e2e8f0] relative w-full hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] max-sm:max-w-[420px] max-sm:mx-auto",
  link: "no-underline text-inherit flex flex-col w-full",

  // Image section
  imageSection: "relative h-[220px] overflow-hidden shrink-0",
  image: "w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105",
  topBadges: "absolute top-4 left-4 right-4 flex justify-between items-center z-10",
  badgesLeft: "flex gap-2",
  badgeStatus: (status) => `text-white px-3 py-1 rounded-full text-xs font-extrabold uppercase backdrop-blur shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${status === 'sold' ? 'bg-[#64748b]' : 'bg-[#10b981]'}`,
  badgeNew: "bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-text-main backdrop-blur",
  badgeVerified: "bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 uppercase",
  wishlistButton: (isWishlisted) => `flex items-center justify-center w-8 h-8 rounded-full border-none cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200 z-[15] hover:text-red-500 hover:scale-110 hover:bg-white ${isWishlisted ? 'text-red-500 bg-white' : 'text-[#64748b] bg-white/90'}`,
  priceOverlay: "absolute bottom-0 left-0 right-0 pt-6 pb-3 px-4 bg-gradient-to-t from-black/70 to-transparent text-white",
  price: "text-[1.5rem] font-extrabold m-0",

  // Content section
  content: "p-5 flex flex-col flex-1",
  propertyType: "text-[0.75rem] font-bold text-primary uppercase tracking-[0.05em]",
  views: "flex items-center gap-[0.3rem] color-[#64748b] text-[0.8125rem] font-semibold",
  title: "text-[1.125rem] font-bold mt-1 mb-2 text-text-main whitespace-nowrap overflow-hidden text-ellipsis min-h-[1.5rem]",
  location: "flex items-center gap-[0.4rem] text-text-muted text-[0.875rem] mb-4",
  locationIcon: "text-[#94a3b8] shrink-0",
  specsGrid: "grid grid-cols-[1fr_1fr_1fr] py-4 border-t border-[#f1f5f9] gap-2 mt-auto",
  specItem: "text-center",
  specIcon: "text-[#64748b] mb-1 flex justify-center",
  specValue: "font-bold text-[0.9375rem] text-text-main",
  specLabel: "text-[0.625rem] text-[#94a3b8] uppercase font-bold",
  specDivider: "border-l border-r border-[#f1f5f9]",
  viewDetailsButton: "mt-5",
  viewDetailsBtn: "btn btn-primary w-full p-3 rounded-xl font-bold text-[0.9375rem]",

  // Custom actions container
  actionsContainer: "px-5 pb-5 flex gap-2 relative z-20",
};