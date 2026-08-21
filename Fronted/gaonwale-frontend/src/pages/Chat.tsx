import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { classNames } from "../utils/helpers";
import { mockChatContacts } from "../data/messages";
import {
  Search,
  Plus,
  Phone,
  Video,
  MoreVertical,
  Edit,
  CheckCheck,
} from "lucide-react";

export const Chat: React.FC = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-[calc(100vh-60px-60px)] md:h-[calc(100vh-60px)] w-full">
      {/* Conversations List */}
      <div
        className={classNames(
          "w-full md:w-80 lg:w-96 flex flex-col border-r h-full",
          theme === "dark" ? "border-[#252952]" : "border-gray-200",
        )}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-[#252952]">
          <h2 className="font-bold text-xl flex items-center gap-2">
            Chat
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              2
            </span>
          </h2>
          <div className="flex gap-2">
            <button
              className={classNames(
                "p-2 rounded-full",
                theme === "dark"
                  ? "bg-[#151835] text-gray-300"
                  : "bg-gray-100 text-gray-600",
              )}
            >
              <Search size={20} />
            </button>
            <button
              className={classNames(
                "p-2 rounded-full",
                theme === "dark"
                  ? "bg-[#151835] text-gray-300"
                  : "bg-gray-100 text-gray-600",
              )}
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Search Input (Mobile only, Desktop relies on header icon) */}
        <div className="p-4 md:hidden">
          <div
            className={classNames(
              "flex items-center px-4 py-2.5 rounded-xl border",
              theme === "dark"
                ? "bg-[#151835] border-[#252952]"
                : "bg-gray-50 border-gray-200",
            )}
          >
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-sm placeholder-gray-500 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {mockChatContacts.map((contact, idx) => (
            <div
              key={contact.id}
              onClick={() => {}} // In a real app, this would select the chat or navigate
              className={classNames(
                "flex items-center gap-3 p-4 cursor-pointer transition-colors border-b",
                theme === "dark"
                  ? "border-[#252952]/50 hover:bg-[#151835]"
                  : "border-gray-100 hover:bg-gray-50",
                idx === 0
                  ? theme === "dark"
                    ? "bg-[#151835]/50"
                    : "bg-gray-50/50"
                  : "", // Highlight first item for demo
              )}
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-[#050711] rounded-full"></div>
                )}
              </div>

              {/* Message Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4
                    className={classNames(
                      "font-bold text-sm truncate",
                      theme === "dark" ? "text-gray-200" : "text-gray-900",
                    )}
                  >
                    {contact.name}
                  </h4>
                  <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">
                    {contact.lastMessageTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className={classNames(
                      "text-sm truncate pr-2 flex-1",
                      contact.unreadCount > 0
                        ? theme === "dark"
                          ? "text-white font-semibold"
                          : "text-gray-900 font-semibold"
                        : "text-gray-500",
                    )}
                  >
                    {contact.lastMessage}
                  </p>

                  {contact.unreadCount > 0 ? (
                    <span className="bg-[#7C3AED] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0">
                      {contact.unreadCount}
                    </span>
                  ) : (
                    <CheckCheck
                      size={14}
                      className="text-blue-500 flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area (Desktop Only, hidden on mobile in this demo) */}
      <div className="hidden md:flex flex-col flex-1 h-full bg-[#FAFAFE] dark:bg-[#050711]">
        {/* Selected Chat Header */}
        <div
          className={classNames(
            "px-6 py-4 flex items-center justify-between border-b",
            theme === "dark"
              ? "bg-[#050711] border-[#252952]"
              : "bg-white border-gray-200",
          )}
        >
          <div className="flex items-center gap-3">
            <img
              src={mockChatContacts[0].avatar}
              alt="Rajesh"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold">{mockChatContacts[0].name}</h3>
              <p className="text-xs text-emerald-500 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[#3B82F6] hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors">
              <Phone size={20} />
            </button>
            <button className="text-[#3B82F6] hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors">
              <Video size={20} />
            </button>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="self-center">
              <span className="text-xs text-gray-500 bg-gray-100 dark:bg-[#151835] px-3 py-1 rounded-full">
                Today, 10:30 AM
              </span>
            </div>

            <div className="flex items-end gap-2 max-w-[75%] self-start">
              <img
                src={mockChatContacts[0].avatar}
                className="w-8 h-8 rounded-full object-cover"
                alt="User"
              />
              <div
                className={classNames(
                  "p-3 rounded-2xl rounded-bl-none text-sm shadow-sm",
                  theme === "dark"
                    ? "bg-[#151835] text-gray-200 border border-[#252952]"
                    : "bg-white text-gray-800 border border-gray-100",
                )}
              >
                Arre bhai, kahan ho? 😅
              </div>
            </div>

            <div className="flex items-end gap-2 max-w-[75%] self-start">
              <div className="w-8 h-8 flex-shrink-0" /> {/* Spacer */}
              <div
                className={classNames(
                  "p-3 rounded-2xl rounded-bl-none text-sm shadow-sm",
                  theme === "dark"
                    ? "bg-[#151835] text-gray-200 border border-[#252952]"
                    : "bg-white text-gray-800 border border-gray-100",
                )}
              >
                Mela ghoomne chalna hai ki nahi?
                <div className="text-[10px] text-gray-400 text-right mt-1">
                  10:31 AM
                </div>
              </div>
            </div>

            <div className="flex items-end gap-2 max-w-[75%] self-end flex-row-reverse">
              <div
                className={classNames(
                  "p-3 rounded-2xl rounded-br-none text-sm text-white shadow-sm",
                  "bg-gradient-to-r from-[#7C3AED] to-[#F97316]",
                )}
              >
                Haan bhai, bas 10 minute mein nikal raha hu. Tu wahi rukk.
                <div className="flex justify-end items-center gap-1 mt-1">
                  <span className="text-[10px] text-white/70">10:35 AM</span>
                  <CheckCheck size={12} className="text-white" />
                </div>
              </div>
            </div>

            <div className="flex items-end gap-2 max-w-[75%] self-start">
              <img
                src={mockChatContacts[0].avatar}
                className="w-8 h-8 rounded-full object-cover"
                alt="User"
              />
              <div
                className={classNames(
                  "p-3 rounded-2xl rounded-bl-none text-sm shadow-sm",
                  theme === "dark"
                    ? "bg-[#151835] text-gray-200 border border-[#252952]"
                    : "bg-white text-gray-800 border border-gray-100",
                )}
              >
                {mockChatContacts[0].lastMessage}
                <div className="text-[10px] text-gray-400 text-right mt-1">
                  {mockChatContacts[0].lastMessageTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div
          className={classNames(
            "p-4 border-t",
            theme === "dark"
              ? "bg-[#050711] border-[#252952]"
              : "bg-white border-gray-200",
          )}
        >
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-gray-400 hover:text-[#7C3AED] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-[#151835]">
              <Plus size={22} />
            </button>
            <div
              className={classNames(
                "flex-1 flex items-center px-4 py-2.5 rounded-full border",
                theme === "dark"
                  ? "bg-[#151835] border-[#252952]"
                  : "bg-gray-50 border-gray-200",
              )}
            >
              <input
                type="text"
                placeholder="Type a message..."
                className="bg-transparent w-full outline-none text-sm"
              />
            </div>
            <button className="p-2.5 bg-gradient-to-r from-[#7C3AED] to-[#F97316] text-white rounded-full hover:opacity-90 transition-opacity shadow-md">
              <Edit size={20} className="ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
