import Image from "next/image";
import localFont from "next/font/local";

const selaris = localFont({
  src: "../../public/fonts/selaris/Selaris.otf",
  display: "swap",
});

const SplashScreen = ({ handleClick }) => {
  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src="/images/splashscreen.webp"
          alt="sipsafari"
          fill
          objectFit="cover"
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 z-20 px-5 w-full grid text-white">
        <p
          className={`${selaris.className} text-4xl font-medium   text-yellow-600 leading-none`}
        >
          Experience exquisite liquor
        </p>

        <p className=" mt-4 font-light text-gray-300">
          Get fresh drinks delivered right to your doorstep with sipsafari.
        </p>
      </div>
      <div
        onClick={handleClick}
        className="absolute bottom-[90px] z-20 px-5 w-full grid justify-items-end cursor-pointer"
      >
        <svg
          className="animate-pulse"
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 41L23.544 41L17.688 32.12L17.688 41L16.232 41L16.232 29.832L17.688 29.832L23.544 38.696L23.544 29.832L25 29.832L25 41ZM28.938 31.032L28.938 34.76L33.002 34.76L33.002 35.96L28.938 35.96L28.938 39.8L33.482 39.8L33.482 41L27.482 41L27.482 29.832L33.482 29.832L33.482 31.032L28.938 31.032ZM40.2451 35.432L43.6691 41L42.0211 41L39.3491 36.648L36.8051 41L35.1891 41L38.5971 35.432L35.1731 29.848L36.8051 29.848L39.4931 34.216L42.0531 29.848L43.6851 29.848L40.2451 35.432ZM52.4866 29.848L52.4866 31.032L49.4466 31.032L49.4466 41L47.9906 41L47.9906 31.032L44.9346 31.032L44.9346 29.848L52.4866 29.848Z"
            fill="white"
          />
          <line
            x1="40.7013"
            y1="4.14855"
            x2="67.2334"
            y2="31.6233"
            stroke="#FDE50B"
          />
          <line
            x1="4.7343"
            y1="38.8815"
            x2="31.2664"
            y2="66.3562"
            stroke="#FDE50B"
          />
          <line
            x1="66.6535"
            y1="40.6015"
            x2="39.54"
            y2="66.7848"
            stroke="#FDE50B"
          />
          <line
            x1="31.9206"
            y1="4.63448"
            x2="4.80706"
            y2="30.8178"
            stroke="#FDE50B"
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
