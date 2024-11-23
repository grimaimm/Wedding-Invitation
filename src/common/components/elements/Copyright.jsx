import React from 'react'
import { FaHeart } from 'react-icons/fa6'

const Copyright = () => {
  return (
    <footer className="footer footer-center text-base-content px-4 pb-16">
      <div className="border-t border-neutral-800 w-full p-4">
        <p className="flex gap-2 text-neutral-500">
          Build with <FaHeart className="animate-pulse" />
          <a href="https://aimdev.xyz" target="_blank">
            Aimdev.xyz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Copyright