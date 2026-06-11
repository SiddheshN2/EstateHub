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