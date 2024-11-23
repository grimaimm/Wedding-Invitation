import React from "react";
import { TiHome } from "react-icons/ti";
import { FaUserFriends, FaGift } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";

const BottomNavigation = ({ isPlaying, playMusic, pauseMusic }) => {
  return (
    <div className="btm-nav bg-neutral-900 btm-nav-md py-1 z-20 rounded-t-2xl border border-neutral-700">
      <button
        onClick={() => {
          document.getElementById("home").scrollIntoView({
            behavior: "smooth", // Smooth scroll behavior
          });
        }}
      >
        <TiHome size={20} />
        <span className="btm-nav-label !text-xs">Home</span>
      </button>
      <button
        onClick={() => {
          document.getElementById("mempelai").scrollIntoView({
            behavior: "smooth", // Smooth scroll behavior
          });
        }}
      >
        <FaUserFriends size={20} />
        <span className="btm-nav-label !text-xs">Bride</span>
      </button>
      <button
        onClick={() => {
          document.getElementById("tanggal").scrollIntoView({
            behavior: "smooth", // Smooth scroll behavior
          });
        }}
      >
        <IoCalendar size={20} />
        <span className="btm-nav-label !text-xs">Date</span>
      </button>

      <button
        onClick={() => {
          document.getElementById("gift").scrollIntoView({
            behavior: "smooth", // Smooth scroll behavior
          });
        }}
      >
        <FaGift size={20} />
        <span className="btm-nav-label !text-xs">Gift</span>
      </button>

      {/* Button Pause Music */}
      <div className="flex flex-col gap-2 absolute right-4 bottom-16">
        <button
          className="btn btn-circle btn-outline bg-neutral-900 border-neutral-700 btn-sm"
          onClick={isPlaying ? pauseMusic : playMusic}
        >
          {isPlaying ? (
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
          ) : (
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
