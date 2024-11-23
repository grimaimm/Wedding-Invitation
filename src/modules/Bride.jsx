import React from 'react'
import { LoveAnimationFour, LoveAnimationOne, LoveAnimationThree, LoveAnimationTwo } from "@/common/components/elements/LoveAnimation";

const BrideModules = () => {
  const namaMempelaiPria = process.env.NEXT_PUBLIC_NAMA_LENGKAP_MEMPELAI_PRIA || 'Mempelai Pria';
  const namaMempelaiWanita = process.env.NEXT_PUBLIC_NAMA_LENGKAP_MEMPELAI_WANITA || 'Mempelai Wanita';
  const putraKeberapa = process.env.NEXT_PUBLIC_PUTRA_KEBERAPA || 'Keberapa';
  const putriKeberapa = process.env.NEXT_PUBLIC_PUTRI_KEBERAPA || 'Keberapa';
  const namaAyahPria = process.env.NEXT_PUBLIC_NAMA_ORTU_BAPAK_PRIA || 'Ayah Putra';
  const namaIbuPria = process.env.NEXT_PUBLIC_NAMA_ORTU_IBU_PRIA || 'Ibu Putra';
  const namaAyahWanita = process.env.NEXT_PUBLIC_NAMA_ORTU_BAPAK_WANITA || 'Ayah Putra';
  const namaIbuWanita = process.env.NEXT_PUBLIC_NAMA_ORTU_IBU_WANITA || 'Ibu Putra';

  return (
    <div id="mempelai" className="hero bg-black">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 className="font-notoNaskhArabic mb-4 text-[2rem] text-neutral-100">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h2>
          <h2 className="font-sacramento py-4 mb-2 text-[2rem] text-neutral-100">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="text-neutral-400">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan
            menghadiri acara pernikahan kami:
          </p>
          <LoveAnimationOne />
          <div className="overflow-x-hidden pt-20 pb-10">
            <div data-aos="fade-right" data-aos-duration={2000}>
              <h2 className="font-sacramento text-5xl text-neutral-100 font-semibold tracking-wide">
                {namaMempelaiPria}
              </h2>
              <p className="mt-3 mb-1 text-xl text-neutral-400">Putra ke-{putraKeberapa}</p>
              <p className="text-neutral-400">Bapak {namaAyahPria} dan Ibu {namaIbuPria}</p>
            </div>
            <LoveAnimationTwo />
            <h2 className="font-sacramento py-6 text-6xl font-semibold">
              &amp;
            </h2>
            <LoveAnimationThree />
            <div data-aos="fade-left" data-aos-duration={2000}>
              <h2 className="font-sacramento text-5xl text-neutral-100 font-semibold tracking-wide">
                {namaMempelaiWanita}
              </h2>
              <p className="mt-3 mb-1 text-xl text-neutral-400">Putri ke-{putriKeberapa}</p>
              <p className="text-neutral-400">Bapak {namaAyahWanita} dan Ibu {namaIbuWanita}</p>
            </div>
          </div>
          <LoveAnimationFour />
        </div>
      </div>
    </div>
  );
};

export default BrideModules;