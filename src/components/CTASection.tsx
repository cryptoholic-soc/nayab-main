import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Join the Revolution
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be part of the future where users own their data, content, and value. We provide transparency and accessibility.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg">
            Coming Soon
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://forms.gle/pZQmEdSEnZv2mHuX7" target="_blank" rel="noopener noreferrer">
              Join the waitlist
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
