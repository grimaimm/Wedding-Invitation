import Countdown from '@/common/components/elements/Countdown'
import { LoveAnimationFive, LoveAnimationFour } from '@/common/components/elements/LoveAnimation'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const WeddingDateModules = () => {
  const timeUTC = process.env.NEXT_PUBLIC_TIME_UTC || 'WIB';
  const jamAkad = process.env.NEXT_PUBLIC_AKAD || '12.00';
  const jamResepsi = process.env.NEXT_PUBLIC_RESEPSI || '19.00';
  const gMaps = process.env.NEXT_PUBLIC_LINK_GMAPS || '';

  return (
    <div id="tanggal" className="hero bg-black">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 class="font-sacramento mb-4 text-[2.5rem] text-neutral-100">
            Moment Bahagia
          </h2>
          <Countdown />
          <p className="text-neutral-400">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
            insyaAllah kami akan menyelenggarakan acara:
          </p>
          <LoveAnimationFive />
          <div className="overflow-hidden space-y-6 py-8">
            <div className="py-2 space-y-2" data-aos="fade-right" data-aos-duration="1500">
              <h2 className="font-sacramento text-4xl text-neutral-100">
                Akad
              </h2>
              <p className="text-neutral-400">
                Pukul {jamAkad} {timeUTC} - Selesai
              </p>
            </div>
            <div className="py-2 space-y-2" data-aos="fade-left" data-aos-duration="1500">
              <h2 className="font-sacramento text-4xl text-neutral-100">
                Resepsi
              </h2>
              <p className="text-neutral-400">
                Pukul {jamResepsi} {timeUTC} - Selesai
              </p>
            </div>
          </div>
          <LoveAnimationFour />
          <div className="flex flex-col justify-center items-center mt-4"  data-aos="fade-up" data-aos-duration="1500">
            <Link
              href={gMaps}
              target="_blank"
              className="btn"
            >
              <FaLocationDot size={20} className="" />
              <span className="mt-0.5">Lihat Google Maps</span>
            </Link>
            <p className="mt-4 text-neutral-100">
              Desa Balane, Kec. Kinovaro, Kab. Sigi,
              <br className="lg:hidden sm:block" /> Sulawesi Tengah 94362.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingDateModules