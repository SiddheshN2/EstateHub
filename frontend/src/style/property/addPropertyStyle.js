export const addPropertyStyles = {
  // Container
  outerContainer: "fade-in px-4 py-8 md:py-12 w-full mx-auto dashboard-content",
  innerContainer: "max-w-[900px] w-full mx-auto",
  header: "mb-12 text-center",
  heading: "text-[clamp(1.75rem,5vw,2.5rem)] mb-4 text-text-main font-extrabold",
  subheading: "text-text-muted text-base",
  form: "card-premium p-6 md:p-10",
  error: "p-4 bg-red-50 text-red-600 rounded-xl mb-8",

  // Sections
  section: "mb-12",
  sectionHeader: "flex items-center gap-4",
  sectionHeaderLargeMargin: "mb-8",
  sectionHeaderSmallMargin: "mb-6",
  sectionBar: "w-1 h-6 bg-primary rounded-sm",
  sectionTitle: "text-xl font-extrabold text-text-main",

  // Content groups
  contentGroupLarge: "flex flex-col gap-6",
  contentGroupMedium: "flex flex-col gap-5",
  contentGroupSmall: "flex flex-col gap-5", // same as medium

  // Labels
  label: "block mb-2.5 text-sm font-bold text-text-main",
  labelSmallMargin: "block mb-2 text-sm font-bold text-text-main",

  // Inputs
  input: "w-full py-3.5 px-4 rounded-xl border border-[#e2e8f0] outline-none bg-white text-[0.9375rem] focus:border-primary transition-colors",
  textarea: "h-[120px] resize-none leading-relaxed",
  select: "cursor-pointer",

  // Grid layouts
  twoColumnGrid: "grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-12",
  gridThreeCol: "grid grid-cols-1 sm:grid-cols-3 gap-4",
  gridTwoCol: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  amenitiesGrid: "grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4",

  // Amenities label styles
  amenityLabelBase: "flex items-center gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-200",
  amenityLabelActive: "bg-primary-light border-primary",
  amenityLabelInactive: "bg-[#f8fafc] border-[#e2e8f0]",
  amenityCheckbox: "accent-primary w-4 h-4",
  amenityTextBase: "text-sm font-semibold",
  amenityTextActive: "text-primary",
  amenityTextInactive: "text-text-main",

  // Image upload
  uploadArea: "border-2 border-dashed border-[#cbd5e1] p-12 rounded-xl text-center cursor-pointer relative bg-[#f8fafc] transition-colors hover:border-primary",
  uploadIconWrapper: "flex justify-center mb-4",
  uploadTitle: "mb-2 text-text-main font-bold",
  uploadSubtext: "text-sm text-text-muted",

  // Previews
  previewsGrid: "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 mt-8",
  previewItem: "relative aspect-square rounded-xl overflow-hidden border border-[#f1f5f9] shadow-sm",
  removeButton: "absolute top-1 right-1 bg-[#dc2626] text-white border-none rounded-full w-5 h-5 flex items-center justify-center cursor-pointer z-10 shadow-md",
  addMoreBox: "aspect-square border-2 border-dashed border-[#cbd5e1] rounded-xl flex flex-col items-center justify-center cursor-pointer relative bg-[#f8fafc] transition-colors hover:border-primary",
  addMoreText: "text-xs font-bold text-[#64748b] mt-1.5",

  // Footer buttons
  footerButtons: "mt-12 flex justify-center flex-wrap gap-5 border-t border-[#f1f5f9] pt-10",
  cancelButton: "btn btn-outline py-3.5 px-10 font-bold min-w-[140px]",
  submitButton: "btn btn-primary py-3.5 px-12 font-bold min-w-[180px]",
};