import { motion } from "framer-motion";
import { QrReader } from "react-qr-reader";

const QR = () => {
  return (
    <div className="flex w-full flex-col items-center text-white">
      <section>
        <QrReader
          className="h-56 w-56 rounded-2xl bg-indigo-950"
          constraints={{ facingMode: "environment" }}
        />
        <motion.div
          className="h-full w-full"
          animate={{ opacity: [0.25, 0.5, 1, 0.5, 0.25] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </section>
      <div className="my-6 flex flex-col items-center">
        <p className="text-xl font-bold">แสกน QR Code เพื่อเช็คอิน</p>
        <p className="font-medium">Scan QR Code to check-in</p>
      </div>
      <div className="mt-6 w-4/5">
        <div className="text-sm">เลข ID / ID Number</div>
        <textarea className="h-12 w-full rounded-2xl p-3 align-middle text-black"></textarea>
      </div>
      <button className="mt-8 rounded-2xl border-2 border-white px-3 py-2 text-xl font-bold shadow-inner shadow-white backdrop-blur-2xl">
        เช็คอิน / Check-in
      </button>
    </div>
  );
};

export default QR;
