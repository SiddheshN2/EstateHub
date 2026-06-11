export const chatMessagesStyles = {
  // Loader (reuse existing)
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Main container
  chatContainer: "flex flex-col overflow-hidden",
  chatContainerSeller: "h-[calc(100vh-120px)]",
  chatContainerNonSeller: "h-screen md:h-screen pt-32 max-lg:pt-28",

  // Chat wrapper
  chatWrapper: "flex flex-1 bg-[#f8fafc] font-sans relative overflow-hidden mt-0 md:mt-0",

  // Sidebar
  sidebar: "w-full absolute inset-0 z-10 transition-transform duration-300 lg:relative lg:w-[350px] shrink-0 bg-white border-r border-[#e2e8f0] flex flex-col lg:translate-x-0",
  sidebarHidden: "-translate-x-full lg:-translate-x-0 hidden lg:flex",
  sidebarHeader: "p-5 border-b border-[#f1f5f9]",
  sidebarTitle: "m-0 text-xl font-bold text-[#1e293b]",
  sidebarContent: "flex-1 overflow-y-auto",
  emptyConversations: "flex-1 flex flex-col items-center justify-center text-[#94a3b8] text-center p-10",
  emptyIcon: "w-20 h-20 mb-5 opacity-50",
  conversationItem: "p-[15px_20px] flex items-center gap-3 cursor-pointer transition-colors duration-200 border-b border-[#f8fafc] hover:bg-[#f1f5f9] group",
  conversationItemActive: "bg-[#f0f9ff] border-r-[3px] border-r-[#00b4d8]",
  avatar: "w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#00b4d8] text-white flex items-center justify-center font-bold text-[0.9rem] md:text-base overflow-hidden",
  avatarImg: "w-full h-full object-cover",
  conversationInfo: "flex-1 min-w-0",
  conversationName: "font-semibold text-[#1e293b] mb-1 whitespace-nowrap overflow-hidden text-ellipsis",
  conversationPreview: "text-[0.85rem] text-[#64748b] whitespace-nowrap overflow-hidden text-ellipsis",
  deleteChatButton: "bg-transparent border-none text-[#94a3b8] p-2 rounded-lg cursor-pointer opacity-100 md:opacity-0 transition-all duration-200 flex items-center justify-center hover:text-red-500 hover:bg-red-100 md:group-hover:opacity-100",

  // Chat area
  chatArea: "absolute inset-0 z-[5] lg:relative lg:flex-1 lg:z-auto flex flex-col bg-white w-full",
  chatHeader: "p-[10px_15px] md:p-[15px_25px] bg-white sticky md:relative top-0 z-20 border-b border-[#e2e8f0] flex items-center justify-between",
  chatHeaderLeft: "flex items-center gap-3",
  backButtonChat: "flex lg:hidden mr-2.5 bg-[#f1f5f9] border-none p-1.5 rounded-full text-[#1e293b] cursor-pointer hover:bg-[#e2e8f0] transition-colors",
  backButton: "flex  mr-2.5 bg-[#f1f5f9] border-none p-1.5 rounded-full text-[#1e293b]",
  chatPartnerName: "font-bold text-[#1e293b]",
  messagesArea: "p-[15px] pb-[80px] md:p-[25px] md:pb-[25px] overflow-y-auto flex-1 flex flex-col gap-[15px] bg-[#f8fafc]",
  messageBubble: "max-w-[85%] md:max-w-[70%] p-[12px_18px] rounded-[20px] text-[0.95rem] leading-[1.5] relative",
  messageOwn: "self-end bg-[#00b4d8] text-white rounded-br-[4px] shadow-[0_4px_12px_rgba(0,180,216,0.2)]",
  messageOther: "self-start bg-white text-[#334155] rounded-bl-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
  messageContent: "flex items-start gap-2 break-all",
  messageImageWrapper: "mb-2 rounded-lg overflow-hidden",
  messageImage: "w-full max-h-[200px] object-cover block",
  messageText: "break-all",
  deleteMessageButton: "bg-transparent border-none text-white/60 cursor-pointer p-0.5 rounded transition-all duration-200 mt-0.5 hover:text-white hover:bg-white/20",
  messageTime: "text-[0.75rem] mt-1.5 opacity-70 block",
  messageForm: "p-[12px_15px] md:p-[20px_25px] bg-white sticky md:relative bottom-0 border-t border-[#e2e8f0] flex gap-[15px] items-center",
  messageInput: "flex-1 min-w-0 border border-[#e2e8f0] rounded-[30px] p-[12px_25px] outline-none text-[0.95rem] transition-colors duration-200 focus:border-[#00b4d8]",
  sendButton: "bg-[#00b4d8] text-white border-none w-[45px] h-[45px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 text-xl hover:bg-[#0077b6] hover:scale-105 active:scale-95 shrink-0",
  sendIcon: "rotate-90",
  noChatSelected: "flex-1 flex flex-col items-center justify-center text-[#94a3b8] text-center p-10",
  noChatIcon: "w-20 h-20 mb-5 opacity-50",
  noChatTitle: "font-bold",
};