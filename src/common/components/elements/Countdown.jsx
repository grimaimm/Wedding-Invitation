import { useState, useEffect } from "react";

const Countdown = () => {
  // Tentukan tanggal tujuan (9 Desember 2024) di waktu setempat
  const targetDate = new Date(process.env.NEXT_PUBLIC_TARGET_DATE); // Bulan di JavaScript dimulai dari 0 (Januari = 0, Desember = 11)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Fungsi untuk menghitung waktu tersisa
  const calculateTimeLeft = () => {
    const now = new Date(); // Waktu lokal saat ini
    const difference = targetDate - now; // Selisih waktu

    if (difference > 0) {
      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" }); // Waktu telah habis
    }
  };

  // Update countdown setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Pembersihan interval saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl text-neutral-100">{timeLeft.days}</span>
          <span className="text-neutral-400">Hari</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl text-neutral-100">{timeLeft.hours}</span>
          <span className="text-neutral-400">Jam</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl text-neutral-100">{timeLeft.minutes}</span>
          <span className="text-neutral-400">Menit</span>
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl text-neutral-100">{timeLeft.seconds}</span>
          <span className="text-neutral-400">Detik</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
