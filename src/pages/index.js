import React, { useState, useRef } from "react";

// import CoverPage from "@/modules/CoverPage";
import { useRouter } from "next/router";
import Image from "@/common/components/elements/Image";
// import ButtonOpenInvitation from "@/modules/CoverPage/components/ButtonOpenInvitation";
import {
  FaEnvelopeOpen,
  FaGift,
  FaHeart,
  FaLocationDot,
} from "react-icons/fa6";
import { FaCalendarCheck, FaUserFriends } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoCalendar } from "react-icons/io5";
import Link from "next/link";
import {
  WaveSeparatorFive,
  WaveSeparatorFour,
  WaveSeparatorOne,
  WaveSeparatorThree,
  WaveSeparatorTwo,
} from "@/common/components/elements/WaveSeparator";
import {
  LoveAnimationFive,
  LoveAnimationFour,
  LoveAnimationOne,
  LoveAnimationThree,
  LoveAnimationTwo,
} from "@/common/components/elements/LoveAnimation";
import Countdown from "@/common/components/elements/Countdown";
import GiftCard from "@/common/components/elements/GitfCard";
import confetti from "canvas-confetti";
import BottomNavigation from "@/common/components/elements/BottomNavigation";
import HomeModules from "@/modules/Home";
import BrideModules from "@/modules/Bride";
import QuranVersesModules from "@/modules/QuranVerses";
import WeddingDateModules from "@/modules/WeddingDate";
import GiftModules from "@/modules/Gift";
import ClosingModules from "@/modules/Closing";
import Copyright from "@/common/components/elements/Copyright";
import CoverModules from "@/modules/Cover";

export default function Home() {
  const router = useRouter();
  const { to } = router.query;
  const [showDetails, setShowDetails] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Fungsi untuk membuka undangan
  const openInvitation = () => {
    setShowDetails(true);
    playMusic();
    confetti({
      origin: { y: 1 },
      zIndex: 1057,
    });
    setTimeout(animationStart, 1500);
  };

  const animationStart = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const colors = ["#FFC0CB", "#FF1493", "#C71585"];

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    });

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      colors.forEach((color) => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: Math.max(50, 75 * (timeLeft / duration)),
          origin: {
            x: Math.random(),
            y: Math.abs(Math.random() - timeLeft / duration),
          },
          zIndex: 1057,
          colors: [color],
          shapes: [heart],
          drift: randomInRange(-0.5, 0.5),
          gravity: randomInRange(0.5, 1),
          scalar: randomInRange(0.5, 1),
        });
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);

      audioRef.current.onended = () => {
        audioRef.current.play();
      };
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const musicSRC = process.env.NEXT_PUBLIC_MUSIC || "/music/sound.mp3";

  return (
    <>
      <audio ref={audioRef} src={musicSRC} />
      {!showDetails ? (
        // Halaman pertama
        <>
          <CoverModules to={to} openInvitation={openInvitation} />
        </>
      ) : (
        // Detail undangan
        <>
          {/* Bottom Navigation */}
          <BottomNavigation
            isPlaying={isPlaying}
            playMusic={playMusic}
            pauseMusic={pauseMusic}
          />

          {/* Home */}
          <HomeModules />

          <WaveSeparatorOne />

          {/* Mempelai */}
          <BrideModules />

          <WaveSeparatorTwo />

          {/* Quran */}
          <QuranVersesModules />

          <WaveSeparatorThree />

          {/* Wedding Date */}
          <WeddingDateModules />

          <WaveSeparatorFour />

          {/* Love Gift */}
          <GiftModules />

          <WaveSeparatorFive />

          {/* Salam Penutup */}
          <ClosingModules />

          {/* Footer */}
          <Copyright />
        </>
      )}
    </>
  );
}
