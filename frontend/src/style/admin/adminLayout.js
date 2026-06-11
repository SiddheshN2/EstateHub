export const adminLayoutStyles = {
  layout: "flex h-screen bg-bg-alt overflow-hidden",
  mainWrapper: "flex-1 flex flex-col min-w-0 h-full overflow-hidden transition-all duration-300 md:ml-[260px]",
  mainContent: "flex-1 overflow-y-auto p-5 md:p-8 relative scroll-smooth fade-in",
};

export const adminSidebarStyles = {
  backdrop: (isOpen) => `fixed inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-[950] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible hidden md:block'
    }`,
  sidebar: (isOpen) => `fixed left-0 top-0 w-[260px] h-screen bg-white border-r border-[#f1f5f9] py-8 px-5 flex flex-col z-[1000] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    }`,
  logoContainer: "px-3 mb-10 flex justify-between items-center",
  navContainer: "flex flex-col gap-1.5 flex-1",
  navLink: (isActive) => `flex items-center gap-4 py-3.5 px-4 rounded-xl no-underline text-[0.9375rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
    ? 'font-bold text-primary bg-primary-light'
    : 'font-medium text-[#64748b] hover:bg-gray-50'
    }`,
  logoutContainer: "border-t border-[#f1f5f9] pt-6 mt-auto",
  logoutButton: "w-full flex items-center gap-4 py-3.5 px-4 rounded-xl border-none bg-transparent text-[0.9375rem] font-semibold text-[#dc2626] cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-red-50",
};

export const dashboardNavbarStyles = {
  header: "h-[64px] bg-white/70 backdrop-blur-[12px] border-b border-white/20 flex items-center px-4 sticky top-0 z-[900] w-full gap-4 md:hidden",
  menuButton: "bg-primary/5 border-none text-primary cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl shrink-0",
  logoContainer: "flex items-center overflow-hidden",
};