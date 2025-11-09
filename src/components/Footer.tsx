import { useTextScramble } from "@/hooks/use-text-scramble";

const ScrambleLink = ({ 
  children, 
  href = "#",
  className = "",
  ...props 
}: { 
  children: string; 
  href?: string;
  className?: string;
  [key: string]: any;
}) => {
  const { displayText, scramble, reset } = useTextScramble(children, {
    revealSpeed: 30,
  });

  return (
    <a 
      href={href}
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      {...props}
    >
      {displayText}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8">
          <ScrambleLink href="#" className="hover:text-foreground transition-colors">
            WHITEPAPER
          </ScrambleLink>
          <ScrambleLink href="#" className="hover:text-foreground transition-colors">
            DEVELOPERS
          </ScrambleLink>
          <ScrambleLink href="#" className="hover:text-foreground transition-colors">
            CORPORATE
          </ScrambleLink>
          <ScrambleLink href="#" className="hover:text-foreground transition-colors">
            MEDIA
          </ScrambleLink>
          <ScrambleLink href="#" className="hover:text-foreground transition-colors">
            SOCIAL LINKS
          </ScrambleLink>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © 2025 NAYAB Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
