

export const adminDashboardStyles = {
  // Loader
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Header section
  headerContainer: "flex justify-between items-start mb-8 flex-wrap gap-6",
  pageTitle: "text-[1.75rem] font-extrabold text-text-main mb-1",
  pageSubtitle: "text-text-muted text-[0.9375rem]",
  refreshButton: "btn btn-outline py-[0.6rem] px-5 text-[0.875rem] bg-white",

  // Stats grid & cards
  statsGrid: "grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mb-12",
  statCard: "card-premium p-6 flex flex-col gap-4",
  statIconContainer: "w-11 h-11 rounded-[0.875rem] flex items-center justify-center",
  statTitle: "text-[0.8125rem] font-semibold text-text-muted mb-1",
  statValue: "text-[1.75rem] font-extrabold text-text-main",

  // Second grid (System Health & Admin Tools)
  secondGrid: "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-8",

  // System Health card
  systemHealthCard: "card-premium p-6",
  systemHealthTitle: "mb-5 text-[1.125rem] font-bold",
  servicesContainer: "flex flex-col gap-5",
  serviceItem: "flex justify-between items-center",
  serviceName: "text-[0.875rem] font-semibold",
  statusContainer: "flex items-center gap-2",
  statusDot: "w-2 h-2 rounded-full bg-[#10b981]",
  statusText: "text-[0.8125rem] text-[#10b981] font-bold",

  // Admin Tools card
  adminToolsCard: "card-premium p-6 bg-primary text-white",
  adminToolsTitle: "mb-3 text-[1.125rem] font-bold",
  adminToolsDesc: "text-[0.8125rem] mb-6 opacity-90",
  adminToolsButtonsContainer: "flex flex-col gap-3",
  adminToolButton: "btn bg-white/20 text-white w-full justify-start text-[0.875rem]",
};