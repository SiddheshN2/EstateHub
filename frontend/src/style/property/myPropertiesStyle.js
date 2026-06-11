export const myPropertiesStyles = {
  // Loader (reuse from other components, but define here for consistency)
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Layout
  fadeIn: "fade-in",

  // Header section
  header: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 flex-wrap gap-6 my-props-header text-left",
  heading: "text-[1.75rem] font-extrabold text-text-main mb-1",
  subheading: "text-text-muted text-[0.9375rem]",
  addButton: "btn btn-primary py-3 px-6 rounded-xl font-bold w-full md:w-auto text-center",

  // Content container (no special classes in original, but we keep as is)
  content: "mb-8",

  // Empty state
  emptyCard: "card-premium py-24 px-8 text-center",
  emptyIconWrapper: "bg-[#f8fafc] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-8",
  emptyTitle: "mb-4 text-2xl font-bold text-text-main",
  emptyText: "text-[#64748b] mb-8",
  emptyButton: "btn btn-primary",

  // Properties grid
  grid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-4",

  // Action buttons inside PropertyCard
  actionContainer: "flex-1 flex gap-2 items-center",
  selectWrapper: "flex-1 relative",
  select: "w-full py-2.5 pr-8 pl-3 text-[0.8125rem] font-semibold rounded-lg border border-[#e2e8f0] bg-white appearance-none cursor-pointer outline-none",
  selectAvailable: "text-[#10b981]",
  selectSold: "text-[#ef4444]",
  selectIcon: "absolute right-[0.8rem] top-1/2 -translate-y-1/2 pointer-events-none text-[#94a3b8]",
  editButton: "btn btn-outline p-2.5 text-[0.8125rem] flex items-center justify-center gap-1.5 border border-[#e2e8f0]",
  deleteButton: "btn p-2.5 text-[0.8125rem] bg-[#fff5f5] text-[#ef4444] border border-[#fee2e2] flex items-center justify-center gap-1.5 transition-colors hover:bg-[#fee2e2]",
};