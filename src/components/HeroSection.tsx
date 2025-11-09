import { Button } from "@/components/ui/button";
import { useTextScramble } from "@/hooks/use-text-scramble";

const ScrambleButton = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "",
  ...props 
}: { 
  children: string; 
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  [key: string]: any;
}) => {
  const { displayText, scramble, reset } = useTextScramble(children, {
    revealSpeed: 30,
  });

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      {...props}
    >
      {displayText}
    </Button>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm">
              On a Mission <span className="mx-2">•</span> Over 100k Users <span className="mx-2">•</span> 2bn
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building a marketplace that flips the rule - where users are owners
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Shop and earn in a decentralized way — powered by Web3 and owned by its users.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <ScrambleButton variant="default" size="lg">
                Coming Soon
              </ScrambleButton>
              <ScrambleButton variant="link" className="text-foreground">
                Explore Marketplace
              </ScrambleButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-muted/50 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <img 
                src="/mockup.png" 
                alt="Mobile App Mockup" 
                className="max-w-full max-h-full object-contain rounded-2xl select-none pointer-events-none"
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  pointerEvents: 'none',
                  WebkitTouchCallout: 'none',
                  ...({ WebkitUserDrag: 'none' } as React.CSSProperties),
                  KhtmlUserSelect: 'none'
                }}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
