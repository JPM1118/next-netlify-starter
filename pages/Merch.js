import React from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

import { useEmblaCarousel } from "embla-carousel/react";
import tshirtImg from "../public/tshirt.jpg";

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide relative flex-slide">
            <Image src={tshirtImg} alt="merch placeholder" />
          </div>
          <div className="embla__slide relative flex-slide">
            <Image src={tshirtImg} alt="merch placeholder" />
          </div>
          <div className="embla__slide relative flex-slide mr-6">
            <Image src={tshirtImg} alt="merch placeholder" />
          </div>
        </div>
      </div>
      <button className="embla__prev mr-6" onClick={scrollPrev}>
        <ChevronLeftIcon className="block h-6 w-6" />
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <ChevronRightIcon className="block h-6 w-6" />
      </button>
    </div>
  );
}

function Merch() {
  return (
    <div className=" w-full text-gray-900 my-36" id="merch">
      <hr className="border-2 border-gray-900 mx-24" />
      <div className="mt-6 text-5xl uppercase text-center font-semibold text-shadow">
        merch
      </div>
      <div className="text-center">
        <button className="uppercase bg-white text-gray-900 my-16 py-2 px-4 border-2 border-gray-900 font-semibold text-2xl">
          shop now
        </button>
        <EmblaCarousel />
      </div>
    </div>
  );
}

export default Merch;
