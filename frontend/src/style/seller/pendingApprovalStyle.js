export const pendingApprovalStyles = {
  // Container
  container: "flex flex-col items-center justify-center min-h-[70vh] text-center p-8",

  // Icon circle
  iconCircle: "w-[100px] h-[100px] rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center mb-8 shadow-[0_8px_16px_rgba(217,119,6,0.1)] animate-pulse",

  // Heading and text
  heading: "text-[2rem] font-extrabold text-[#1e293b] mb-4",
  description: "max-w-[500px] text-[#64748b] text-[1.1rem] leading-relaxed mb-10",

  // Buttons container
  buttonGroup: "flex gap-4 flex-wrap justify-center",

  // Browse button
  browseButton: "py-3.5 px-6 rounded-xl bg-primary text-white font-bold no-underline flex items-center gap-2 shadow-[0_4px_12px_rgba(var(--primary-rgb),0.2)] transition-all duration-300",

  // Manual refresh button
  refreshButtonBase: "py-3.5 px-6 rounded-xl bg-[#eef2ff] border border-[#e0e7ff] text-primary font-bold flex items-center gap-2 transition-all duration-300",
  refreshButtonEnabled: "cursor-pointer",
  refreshButtonDisabled: "cursor-not-allowed",

  // Support section
  supportContainer: "mt-16 flex items-center  border border-[#e0e7ff] rounded-3xl px-6 py-4 shadow-[0_4px_12px_rgba(14,165,233,0.05)] justify-between hover:bg-[#f24899] gap-2 text-[#94a3b8] text-[0.9rem]",
  supportLink: "text-primary no-underline font-semibold",
};