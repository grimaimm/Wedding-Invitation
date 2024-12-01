import React from 'react'

const QuranVersesModules = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h2 className="font-sacramento py-4 text-[2rem] text-neutral-100">
            Allah Subhanahu Wa Ta'ala berfirman
          </h2>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="card bg-neutral-800 text-neutral-content w-full">
              <div className="card-body items-center text-center">
                <p className="text-neutral-400">
                  "Dan segala sesuatu Kami ciptakan berpasang-pasangan
                  agar kamu mengingat (kebesaran Allah)."
                </p>
                <h2 className="card-title !mb-0 mt-1 text-neutral-100">
                  QS. Az-Zariyat: Ayat 49
                </h2>
              </div>
            </div>
            <div data-aos="fade-up" className="card bg-neutral-800 text-neutral-content w-full">
              <div className="card-body items-center text-center">
                <p className="text-neutral-400">
                  "dan sesungguhnya Dialah yang menciptakan pasangan
                  laki-laki dan perempuan,"
                </p>
                <h2 className="card-title !mb-0 mt-1 text-neutral-100">
                  QS. An-Najm: Ayat 45
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuranVersesModules