import { FaArrowRight } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { Section } from "./Section";
import { Button } from "./ui/Button";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black-100 border-t border-white/10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none opacity-50">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <Section className="py-10 md:py-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black text-center max-w-4xl leading-tight mb-8">
            Ready to dive into <span className="text-azure">tech</span> with us?
          </h1>
          <p className="text-muted-foreground md:mt-5 my-5 text-center max-w-2xl text-lg">
            Join Axios and be part of a community that builds, learns, and
            innovates together at IIIT Bhopal.
          </p>
          <a href="mailto:axios.iiitbhopal@gmail.com">
            <Button variant="primary">
              Contact Us <FaArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
        
        <div className="flex mt-24 md:flex-row flex-col justify-between items-center gap-8 md:gap-0 border-t border-white/10 pt-8">
          <p className="md:text-base text-sm font-mono text-muted-foreground text-center md:text-left">
            Axios IIIT Bhopal © 2026
          </p>
          
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-white/5 border border-white/10 hover:bg-azure hover:border-azure transition-colors duration-300"
              >
                <img src={info.img} alt="icon" width={18} height={18} className="brightness-200" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
