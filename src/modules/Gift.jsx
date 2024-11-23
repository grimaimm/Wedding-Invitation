import GiftCard from '@/common/components/elements/GitfCard'
import React from 'react'

const GiftModules = () => {
  return (
    <div id="gift" className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 className="font-sacramento mb-4 text-[2.5rem] text-neutral-100">
            Love Gift
          </h2>
          <p className="text-neutral-400">
            Dengan hormat, bagi Anda yang ingin memberikan tanda kasih
            kepada kami, dapat melalui:
          </p>
          <GiftCard />
        </div>
      </div>
    </div>
  )
}

export default GiftModules