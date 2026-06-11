export const sellerSidebarStyles = {
  // Backdrop
  backdrop: "fixed inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-[950] transition-all duration-300",
  backdropVisible: "opacity-100 visible",
  backdropHidden: "opacity-0 invisible hidden md:block",

  // Sidebar container
  sidebar: "fixed left-0 top-0 w-[260px] h-screen bg-white border-r border-[#f1f5f9] py-8 px-5 flex flex-col z-[1000] transition-transform duration-300",
  sidebarOpen: "translate-x-0",
  sidebarClosed: "-translate-x-full md:translate-x-0",

  // Logo section
  logoContainer: "px-3 mb-10 flex justify-between items-center",

  // Navigation
  nav: "flex flex-col gap-1.5 flex-1",
  navLink: "flex items-center gap-4 py-3.5 px-4 rounded-xl no-underline text-[0.9375rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
  navLinkActive: "font-bold text-primary bg-primary-light",
  navLinkInactive: "font-medium text-[#64748b] hover:bg-gray-50",

  // Logout
  logoutContainer: "border-t border-[#f1f5f9] pt-6 mt-auto ",
  logoutButton: "w-full flex items-center gap-4 py-3.5 px-4 rounded-xl border-none bg-transparent text-[0.9375rem] font-semibold text-[#dc2626] cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]  hover:bg-red-100",
};

