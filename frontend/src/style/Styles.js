
export const wishlistStyles = {
  loaderFullPage: "loader-full-page",
  loader: "loader",
  pageContainer: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  mainContainer: "container fade-in py-3 px-4 md:px-8",
  headingWrapper: "mb-12",
  heading: "text-[2.5rem] mb-2",
  subheading: "text-text-muted",
  emptyCard: "card-premium py-24 px-8 text-center",
  emptyIconWrapper: "bg-bg-alt w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-text-muted",
  emptyTitle: "mb-4",
  emptyText: "text-text-muted mb-8",
  browseButton: "btn btn-primary",
  gridContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:justify-items-center",
  removeButton: "btn w-full p-3 rounded-xl bg-[#fff5f5] text-[#ef4444] border border-[#fee2e2] flex items-center justify-center gap-2 font-bold",
};



export const dashboardNavbarStyles = {
  header: "h-[64px] bg-white/70 backdrop-blur-[12px] border-b border-white/20 flex items-center px-4 sticky top-0 z-[900] w-full gap-4 md:hidden",
  menuButton: "bg-primary/5 border-none text-primary cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl shrink-0",
  logoContainer: "flex items-center overflow-hidden",
};



export const logoStyles = {
  link: "font-bold text-primary flex items-center gap-3 no-underline whitespace-nowrap",
  iconWrapper: "bg-primary text-white p-2 rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(59,138,246,0.22)]",
  text: "tracking-[-0.02em] text-[#3b82f6] font-extrabold",
};

export const navbarStyles = {
  nav: "glass fixed top-0 w-full left-0 z-[1000] py-2 lg:py-4",
  container: "container px-6 max-w-[1400px] mx-auto",
  grid: "grid grid-cols-[auto_1fr_auto] items-center gap-4",
  desktopMenu: "hidden lg:flex justify-self-center items-center bg-white/50 px-3 py-1.5 rounded-full border border-white/20 gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.07)]",
  navLink: "nav-link text-text-main font-semibold text-[15px] px-4 py-2 rounded-3xl transition-all duration-300 no-underline hover:text-primary hover:bg-primary/10",
  rightSection: "justify-self-end flex items-center gap-5",
  userSection: "flex items-center gap-5",
  avatar: "w-10 h-10 rounded-full border-2 border-primary-light object-cover",
  logoutButton: "btn btn-outline hidden lg:flex py-1.5 px-4 rounded-xl font-semibold text-sm",
  mobileToggle: "lg:hidden cursor-pointer text-text-main flex",
  backdrop: (isOpen) => `fixed inset-0 w-full h-full bg-black/40 backdrop-blur-sm z-[2001] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
  drawer: (isOpen) => `fixed top-0 -left-[300px] w-[300px] h-full bg-white z-[2002] transition-transform duration-300 shadow-[10px_0_30px_rgba(0,0,0,0.1)] border-r border-border flex flex-col p-6 ${isOpen ? 'translate-x-[300px]' : ''}`,
  drawerHeader: "flex justify-between items-center mb-10",
  drawerCloseIcon: "cursor-pointer text-text-main",
  drawerNavLinks: "flex flex-col gap-6 flex-1 text-lg",
  drawerUserSection: "mt-auto pt-6 border-t border-border",
  drawerUserInfo: "flex items-center gap-4 mb-6",
  drawerAvatar: "w-10 h-10 rounded-full object-cover",
  drawerUserName: "font-semibold text-[15px]",
  drawerUserEmail: "text-xs text-text-muted",
  drawerLogoutButton: "btn btn-primary w-full",
};

export const demoStyles = {
  card: "mt-6 p-[18px] border border-[#e5e7eb] rounded-2xl bg-[#f8fafc]",
  title: "font-bold mb-[14px]",
  section: "flex flex-col gap-1",
  divider: "h-px bg-[#e5e7eb] my-[14px]",
  badge: "inline-block w-fit px-[10px] py-1 rounded-full text-[13px] font-semibold mb-2",
  buyerBadge: "bg-[#dbeafe] text-[#1d4ed8]",
  sellerBadge: "bg-[#dcfce7] text-[#166534]",
};

export const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

export const titleCase = (str) =>
  str ? str.replace(/\b\w/g, (c) => c.toUpperCase()) : "";


