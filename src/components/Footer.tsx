const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground transition-colors">
            WHITEPAPER
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            DEVELOPERS
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            CORPORATE
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            MEDIA
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            SOCIAL LINKS
          </a>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © 2025 NAYAB Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
