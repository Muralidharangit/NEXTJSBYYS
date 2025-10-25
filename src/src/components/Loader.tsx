"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      {/* Loader wrapper */}
      <div className="relative w-[130px] h-1 rounded-full bg-black/20 overflow-hidden">
        {/* Animated bar */}
        <div
          className="absolute top-0 left-0 h-full bg-[#067afe] rounded-full"
          style={{
            animation: "loader 1s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Inline style for keyframes */}
      <style jsx>{`
        @keyframes loader {
          0% {
            width: 0%;
            left: 0;
            right: unset;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
            left: unset;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
}
