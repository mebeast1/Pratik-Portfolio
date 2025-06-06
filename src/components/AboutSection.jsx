import { Briefcase, Code, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const AboutSection = () => {
  return (
    <section id="about" className="py-0 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* ----------- Desktop View ----------- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground text-lg">
              As a aspiring web developer, I'm building a strong foundation in
              creating responsive, accessible, and high-performing web applications.
              I'm eager to apply modern technologies to real-world projects.
            </p>
            <p className="text-muted-foreground text-lg">
              I'm driven by a passion for solving challenges and dedicated to
              continuously learning new technologies and techniques, eager to grow
              my skills in the dynamic world of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/public/pratik_resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <AboutCards />
        </div>

        {/* ----------- Mobile View (Swiper) ----------- */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={24}
            style={{ paddingBottom: "2rem" }} // reduce bottom spacing
          >
            {/* Slide 1: About Text + Buttons */}
            <SwiperSlide>
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-center">Passionate Web Developer</h3>
                  <p className="text-muted-foreground text-center text-2*1">
                    I'm building a strong foundation in responsive, accessible, and high-performance web apps using modern tools.
                  </p>
                  <p className="text-muted-foreground text-center text-2*1">
                    Passionate about solving problems and learning new technologies to grow continuously.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-6 items-center">
                  <a href="#contact" className="cosmic-button w-full text-center max-w-xs">Get In Touch</a>
                  <a
                    href="/public/pratik_resume.pdf"
                    download
                    className="px-6 py-2 w-full max-w-xs text-center rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2: Skill Cards */}
            <SwiperSlide>
              <div className="space-y-4 pb-4">
                <AboutCards />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Skill Cards Component
const AboutCards = () => (
  <div className="grid grid-cols-1 gap-4">
    <div className="gradient-border p-4 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-base">Foundational Skills & Core Technologies</h4>
          <p className="text-muted-foreground text-sm">
            Passionate ReactJS developer building responsive web interfaces.
          </p>
        </div>
      </div>
    </div>

    <div className="gradient-border p-4 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-base">Problem-Solving & Learning Agility</h4>
          <p className="text-muted-foreground text-sm">
            Loves solving problems. Constantly learning new technologies.
          </p>
        </div>
      </div>
    </div>

    <div className="gradient-border p-4 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-base">Collaborative Spirit</h4>
          <p className="text-muted-foreground text-sm">
            Eager team player, ready improve user experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
);
