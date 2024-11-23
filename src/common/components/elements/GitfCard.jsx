import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const GiftCard = () => {
  const [copySuccessBCA, setCopySuccessBCA] = useState(false);
  const [copySuccessBNI, setCopySuccessBNI] = useState(false);

  // Fungsi untuk menyalin ke clipboard
  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (bank === "BCA") {
          setCopySuccessBCA(true); // Menandakan salin berhasil untuk BCA
          setTimeout(() => setCopySuccessBCA(false), 2000); // Menghilangkan ikon dan teks setelah 2 detik
        } else if (bank === "BNI") {
          setCopySuccessBNI(true); // Menandakan salin berhasil untuk BNI
          setTimeout(() => setCopySuccessBNI(false), 2000); // Menghilangkan ikon dan teks setelah 2 detik
        }
      },
      (err) => {
        console.error("Gagal menyalin: ", err);
      }
    );
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Bank Central Asia */}
      <div className="card bg-neutral-800 w-full shadow-xl" data-aos="fade-up">
        <figure className="px-8 pt-10 flex me-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1598px-Bank_Central_Asia.svg.png"
            className="max-w-[9vh]"
            alt="bca"
          />
        </figure>
        <div className="card-body !pt-4 !flex !justify-between flex-row">
          <div className="flex flex-col justify-start items-start">
            <p> ---- ---- ---- 4567 </p>
            <h2 className="card-title !mb-0 mt-1 text-neutral-100">Aan bin Malik</h2>
          </div>
          <div className="flex flex-col justify-end items-end">
            <button
              className="btn btn-outline btn-sm rounded-full"
              onClick={() => copyToClipboard("1234567891234567", "BCA")}
            >
              {copySuccessBCA ? <FaCheck /> : <FaCopy />}
              <span className="mt-0.5">{copySuccessBCA ? "Tersalin" : "Salin"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bank Negara Indonesia */}
      <div className="card bg-neutral-800 w-full shadow-xl" data-aos="fade-up">
        <figure className="px-8 pt-10 flex me-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1024px-BNI_logo.svg.png"
            className="max-w-[9vh]"
            alt="bni"
          />
        </figure>
        <div className="card-body !pt-4 !flex !justify-between flex-row">
          <div className="flex flex-col justify-start items-start">
            <p> ---- ---- ---- 4567 </p>
            <h2 className="card-title !mb-0 mt-1 text-neutral-100">Indriani</h2>
          </div>
          <div className="flex flex-col justify-end items-end">
            <button
              className="btn btn-outline btn-sm rounded-full"
              onClick={() => copyToClipboard("1234567891234567", "BNI")}
            >
              {copySuccessBNI ? <FaCheck /> : <FaCopy />}
              <span className="mt-0.5">{copySuccessBNI ? "Tersalin" : "Salin"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
