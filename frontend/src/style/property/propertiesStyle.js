export const propertiesStyles = {
  // Page container
  pageContainer: "bg-[#f8fafc] min-h-screen pb-16 pt-32 max-lg:pt-28",
  container: "container",

  // Mobile filter button
  mobileFilterButtonWrapper: "mobile-filter-btn hidden mb-6 max-[1024px]:block",
  mobileFilterButton: "btn btn-outline w-full flex justify-center gap-3 bg-white py-4",

  // Layout grid
  layout: "properties-layout grid grid-cols-[minmax(280px,300px)_1fr] gap-8 max-[1024px]:grid-cols-1",

  // Sidebar
  sidebar: "filters-sidebar scrollbar-hide bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-h-[calc(100vh-120px)] overflow-y-auto sticky top-[100px] border border-[#f1f5f9] z-[90] max-[1024px]:fixed max-[1024px]:max-h-screen max-[1024px]:top-0 max-[1024px]:bottom-0 max-[1024px]:w-full max-[1024px]:max-w-[350px] max-[1024px]:rounded-none max-[1024px]:transition-[left] max-[1024px]:duration-300 max-[1024px]:ease max-[1024px]:z-[2005]",
  sidebarVisible: "max-[1024px]:left-0",
  sidebarHidden: "max-[1024px]:-left-full",
  sidebarHeader: "flex justify-between items-center mb-8",
  sidebarTitleWrapper: "flex items-center gap-2",
  sidebarTitleIcon: "text-primary",
  sidebarTitle: "text-xl font-bold m-0",
  sidebarHeaderActions: "flex gap-4 items-center",
  resetButton: "bg-transparent border-none text-primary text-sm font-semibold cursor-pointer",
  closeMobileFilters: "mobile-close-filters hidden max-[1024px]:flex items-center justify-center bg-[#f1f5f9] border-none p-2 rounded-full cursor-pointer",
  filtersScrollArea: "filters-scroll-area",

  // Filter sections
  filterSection: "mb-8",
  filterLabel: "block font-bold mb-3 text-[0.9375rem]",
  searchInputWrapper: "relative",
  searchIcon: "absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]",
  searchInput: "w-full py-3 pr-4 pl-10 rounded-xl border border-[#e2e8f0] outline-none text-sm",
  priceHeader: "flex justify-between items-center mb-4",
  priceValue: "text-primary font-bold text-[0.875rem]",
  priceSlider: "w-full accent-primary cursor-pointer",
  priceLabels: "flex justify-between mt-2 text-[#94a3b8] text-[0.75rem]",
  checkboxGroup: "flex flex-col gap-3",
  checkboxLabel: "flex items-center gap-3 cursor-pointer text-sm text-[#64748b]",
  checkbox: "w-[18px] h-[18px] cursor-pointer accent-primary",
  bhkGroup: "flex flex-wrap gap-2",
  bhkButton: "flex-1 min-w-[50px] p-2 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 border border-[#e2e8f0] bg-white text-[#64748b]",
  bhkButtonActive: "border border-primary bg-primary-light text-primary-dark",
  bhkButtonInactive: "border border-[#e2e8f0] bg-white text-[#64748b]",

  // Main content
  mainContent: "", // no extra classes
  contentHeader: "content-header bg-white py-5 px-8 rounded-[1.25rem] mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex justify-between items-center border border-[#f1f5f9] max-[1024px]:p-4 max-[1024px]:flex-col max-[1024px]:gap-4 max-[1024px]:items-start",
  resultCount: "text-[#64748b] text-[0.9375rem]",
  resultCountStrong: "text-text-main",
  headerControls: "view-controls flex items-center gap-6 max-[1024px]:w-full max-[1024px]:justify-between",
  viewModeToggle: "view-mode-toggle flex gap-2 p-1 bg-[#f1f5f9] rounded-xl max-sm:hidden",
  viewModeButton: "p-2 rounded-lg border-none cursor-pointer",
  viewModeActive: "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-primary",
  viewModeInactive: "bg-transparent text-[#94a3b8]",
  sortControl: "sort-control flex items-center gap-2",
  sortLabel: "text-sm text-[#64748b]",
  sortSelect: "py-2 px-4 bg-white border border-[#e2e8f0] rounded-xl text-sm font-semibold cursor-pointer outline-none text-text-main appearance-auto",

  // Skeleton loading
  skeletonGrid: "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6",
  skeletonCard: "skeleton h-[400px] rounded-[1.25rem]",

  // Error state
  errorContainer: "p-16 text-center bg-white rounded-[1.5rem]",
  errorIcon: "text-red-500 mb-4 mx-auto",
  errorTitle: "text-text-main mb-2",
  errorButton: "btn btn-outline",

  // Empty state
  emptyContainer: "py-24 px-8 text-center bg-white rounded-[1.5rem] border border-[#f1f5f9]",
  emptyIconWrapper: "w-[80px] h-[80px] bg-[#f1f5f9] rounded-full flex items-center justify-center mx-auto mb-6",
  emptyIcon: "text-[#94a3b8]",
  emptyTitle: "text-2xl font-bold text-text-main mb-2",
  emptyText: "text-[#64748b] max-w-[400px] mx-auto mb-8",
  emptyButton: "btn btn-primary px-8 py-3",

  // Property list
  propertyList: "property-list grid gap-6",
  propertyListGrid: "grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-sm:grid-cols-1 max-sm:justify-items-center",
  propertyListList: "grid-cols-1",
  // Mobile overlay
  mobileOverlay: "fixed inset-0 bg-black/50 z-[2004]",
};