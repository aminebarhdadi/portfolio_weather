import React from 'react';


export default function CarouselComponent() {
    return (
      <div
        id="carousel-2"
        data-carousel='{"loadingClasses": "opacity-0"}'
        className="relative w-full"
      >
        <div className="carousel">
          <div className="carousel-body opacity-0">
            {/* Slide 1 */}
            <div className="carousel-slide">
              <div className="bg-base-300/60 flex h-full justify-center p-6">
                <span className="self-center text-2xl sm:text-4xl">First slide</span>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-slide">
              <div className="bg-base-300/80 flex h-full justify-center p-6">
                <span className="self-center text-2xl sm:text-4xl">Second slide</span>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-slide">
              <div className="bg-base-300 flex h-full justify-center p-6">
                <span className="self-center text-2xl sm:text-4xl">Third slide</span>
              </div>
            </div>
          </div>
          <div className="carousel-pagination">
            <span className="carousel-dot carousel-active:bg-primary carousel-active:border-primary"></span>
            <span className="carousel-dot carousel-active:bg-primary carousel-active:border-primary"></span>
            <span className="carousel-dot carousel-active:bg-primary carousel-active:border-primary"></span>
          </div>
        </div>
        {/* Previous Slide */}
        <button type="button" className="carousel-prev">
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        {/* Next Slide */}
        <button type="button" className="carousel-next">
          <span className="sr-only">Next</span>
          <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
            <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
          </span>
        </button>
      </div>
    );
  };
  


