import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- TYPES ---
interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: string;
  images: { src: string; alt: string; }[];
  onMediaClick?: (src: string) => void;
}

// --- HERO SECTION COMPONENT ---
export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, images, className, onMediaClick, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    React.useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full flex flex-col items-center justify-center p-4',
          className
        )}
        {...props}
      >
        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-4 md:space-y-8">
          {/* Header Section */}
          {(title || subtitle) && (
            <div className="space-y-4 relative z-20">
              {title && (
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-4xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Main Showcase Section */}
          <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-56 h-[400px] md:w-72 md:h-[500px] transition-all duration-500 ease-in-out',
                      'flex items-center justify-center rounded-[2.5rem] border-[6px] md:border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl overflow-hidden'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 45}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -10}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    {/* iPhone Notch */}
                    <div className="absolute top-0 inset-x-0 h-6 md:h-7 w-[40%] mx-auto bg-[#1a1a1a] rounded-b-3xl z-20 flex justify-center items-center">
                      <div className="w-12 h-1.5 bg-white/10 rounded-full mt-1"></div>
                    </div>
                    {/* Screen Content */}
                    {image.src.includes('youtube.com') || image.src.includes('youtu.be') ? (
                      <div 
                        className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black"
                        onClick={() => onMediaClick && onMediaClick(image.src)}
                        style={{ cursor: onMediaClick ? 'pointer' : 'default' }}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${image.src.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${image.src.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1]}&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          allow="autoplay; encrypted-media"
                          style={{ border: 'none', transform: 'scale(1.35)' }}
                        />
                      </div>
                    ) : image.src.match(/\.(mp4|webm|ogg)$/i) || image.src.includes('drive.google.com') ? (
                      <video
                        src={image.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover w-full h-full rounded-[2rem] bg-black"
                      />
                    ) : (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full rounded-[2rem] bg-black"
                      />
                    )}

                    {/* Bottom Home Indicator */}
                    <div className="absolute bottom-2 inset-x-0 h-1 w-1/3 mx-auto bg-white/50 rounded-full z-20"></div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white pointer-events-auto"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-black/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white pointer-events-auto"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
