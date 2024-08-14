import { useState, useEffect } from "react";
import slider1 from "../../assets/images/image 2.png";

function AutoplaySlider() {
  const slides = [
    { image: slider1, duration: 15000 },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      duration: 5000,
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      duration: 4000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, slides[currentIndex].duration);
    }
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 30);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 30);
  };

  return (
    <div className="relative w-full h-[602px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className="absolute inset-0">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
          {index === 0 && (
        <div className={`absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 flex flex-col items-center justify-center text-white p-8 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}>
          <div className="text-center max-w-2xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              الوقت المتبقي لإغلاق التصويت
            </h2>
            <div className="bg-white/20 rounded-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-center gap-4 rtl:gap-reverse">
                <div className="text-center flex-shrink-0 min-w-[120px]">
                  <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">12</div>
                  <div className="text-sm md:text-xl">يوم</div>
                </div>
                
                <div className="text-center flex-shrink-0 min-w-[120px]">
                  <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">20</div>
                  <div className="text-sm md:text-xl">ساعة</div>
                </div>
                
                <div className="text-center flex-shrink-0 min-w-[120px]">
                  <div className="text-4xl md:text-6xl font-bold mb-2 font-mono">42</div>
                  <div className="text-sm md:text-xl">دقيقة</div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-lg md:text-xl mb-2">
                النسبة المئوية للإجمالي الكلي للناخبين
              </div>
              <div className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2">10%</div>
            </div>
            <div className="text-xs md:text-sm bg-white/10 rounded-full px-2 md:px-4 py-1 md:py-2 inline-block">
              يتم إجراء التحديثات بشكل دوري كل دقيقتين
            </div>
          </div>
        </div>
        
       

          )}
        </div>
      ))}
      <button
        onClick={goToPrevious}
        className="absolute text-[20px] left-2 top-1/2 w-[50px] h-[50px] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 text-[20px] top-1/2 w-[50px] h-[50px] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
      >
        &#10095;
      </button>
    </div>
  );
}

export default AutoplaySlider;
