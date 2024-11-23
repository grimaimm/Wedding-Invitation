import React from "react";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";
import Image from "@/common/components/elements/Image";

const HomeModules = () => {
  const namaMempelaiPria = process.env.NEXT_PUBLIC_NAMA_PANGGILAN_MEMPELAI_PRIA || 'Mempelai Pria';
  const namaMempelaiWanita = process.env.NEXT_PUBLIC_NAMA_PANGGILAN_MEMPELAI_WANITA || 'Mempelai Wanita';
  const hari = process.env.NEXT_PUBLIC_HARI || 'Hari';
  const tanggal = process.env.NEXT_PUBLIC_TANGGAL || 'Tanggal';
  const bulan = process.env.NEXT_PUBLIC_BULAN || 'Bulan';
  const tahun = process.env.NEXT_PUBLIC_TAHUN || 'Tahun';
  const saveDate = process.env.NEXT_PUBLIC_SAVE_THE_DATE || '';

  return (
    <div
      id="home"
      className="hero min-h-dvh"
      style={{
        backgroundImage: "url(/images/bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 bg-gradient-to-b from-neutral-900/80 to-neutral-900"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <div data-aos="fade-in" data-aos-duration="2500">
            <h1 className="font-sacramento font-medium text-[2.5rem] text-neutral-100">
              Undangan Pernikahan
            </h1>
            <div className="rounded-full border-[3px] my-10 mx-auto w-fit">
              <Image
                src="/images/bg.png"
                alt="background"
                width={220}
                height={220}
                rounded="rounded-full"
                className="mx-auto"
              />
            </div>
            <h2 className="font-sacramento text-5xl my-6 text-neutral-100">
              {namaMempelaiPria} &amp; {namaMempelaiWanita}
            </h2>
            <p className="text-[1.25rem] my-2 text-neutral-100">
              {hari}, {tanggal} {bulan} {tahun}
            </p>
            <Link
              className="btn btn-outline btn-sm shadow rounded-full px-3 py-1 text-sm"
              target="_blank"
              href={saveDate}
            >
              <FaCalendarCheck />
              <span className="mt-0.5">Save The Date</span>
            </Link>
            <div className="flex justify-center items-center mt-6 mb-2">
              <div className="mouse-animation border-2 border-neutral-600 rounded-full px-2 py-1">
                <div className="scroll-animation rounded bg-neutral-500 h-2 w-2 mx-auto" />
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-8 animate-pulse">
              Scroll Down
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModules;
