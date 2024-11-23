import React from 'react'
import Image from '@/common/components/elements/Image'
import { FaEnvelopeOpen } from 'react-icons/fa6'

const CoverModules = ({ to, openInvitation }) => {
  const namaMempelaiPria = process.env.NEXT_PUBLIC_NAMA_PANGGILAN_MEMPELAI_PRIA || 'Mempelai Pria';
  const namaMempelaiWanita = process.env.NEXT_PUBLIC_NAMA_PANGGILAN_MEMPELAI_WANITA || 'Mempelai Wanita';

  return (
    <div className="bg-base-200 min-h-dvh flex items-center justify-center">
      <div className="text-center max-w-lg text-neutral-100">
        <div data-aos="fade-in">
          <h2 className="font-sacramento text-4xl mb-6">
            The Wedding Of
          </h2>
          <div className="rounded-full w-fit border-[3px] mb-8 mx-auto">
            <Image
              src="/images/bg.png"
              alt="background"
              width={200}
              height={200}
              rounded="rounded-full"
              className="mx-auto"
            />
          </div>
          <h2 className="font-sacramento text-5xl mb-8">
            {namaMempelaiPria} &amp; {namaMempelaiWanita}
          </h2>
          {to && (
            <div className="mb-4">
              <span className="text-sm">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </span>
              <br />
              <h2 className="font-semibold mt-1 text-2xl">
                {decodeURIComponent(to)}
              </h2>
            </div>
          )}
          <button
            type="button"
            className="flex justify-center items-center mx-auto gap-2 btn-sm px-4 py-5 bg-white text-black hover:bg-white/90 shadow rounded-xl mt-10 text-[16px]"
            onClick={openInvitation}
          >
            <FaEnvelopeOpen size={20} className="mr-1" />
            <span className="mt-0.5">Open Invitation</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoverModules