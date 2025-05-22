import GlitchText from "../comps/GlitchText/GlitchText";
import ClickSpark from "../comps/ClickSpark/ClickSpark";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RotatingText from "../comps/RotatingText/RotatingText";
import GooeyNavWrapper from "./GooeyNavWrapper";
import SkillsDisplay from "./SkillsDisplay";
import GitHubProjects from "./GitHubProjects";
import ContactMe from "./ContactMe";
// import ProjectsDisplay from "./ProjectsDisplay";

export default function MainSheet() {
  return (
    <div className="relative h-screen w-full">
      <GooeyNavWrapper />
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <ClickSpark
          sparkSize={15}
          sparkRadius={12}
          duration={600}
          easing="ease-out"
          sparkColor="yellow"
        >
          {/* Introduction section */}
          <div id="about" className="mt-8">
            <div className="flex flex-wrap items-center mb-8 sm:mb-12">
              <p
                className="text-white font-bold mr-3"
                style={{ fontSize: "clamp(1.75rem, 6vw, 5rem)" }}
              >
                Hey there! I am
              </p>
              <GlitchText
                speed={1}
                enableShadows={true}
                enableOnHover={true}
                className="custom-class"
              >
                Manish
              </GlitchText>
            </div>

            {/* Lottie + About section in row */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full">
              {/* Larger Lottie animation - left side */}
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex-shrink-0">
                <DotLottieReact
                  src="https://lottie.host/c7a8e2c6-c800-4b6d-98a2-6eb130454417/btfoWVB4FN.lottie"
                  loop
                  autoplay
                  speed={2}
                />
              </div>

              {/* About text - right side */}
              <div className="flex-1 mt-6 lg:mt-0">
                <p className="text-xl sm:text-2xl md:text-3xl leading-snug text-white lg leading-loose font-bold">
                  A passionate Full Stack Web Developer with a strong focus on
                  backend development who thrives on building clean, scalable
                  solutions, from crafting intuitive UIs to architecting
                  powerful backends. I'm also deeply immersed in Flutter for
                  cross-platform mobile experiences and constantly exploring the
                  exciting world of Machine Learning. I'm always looking for new
                  ways to bring ideas to life through code.
                  <br />
                  <span>Outside of work, you’ll find me</span>
                  <RotatingText
                    texts={[
                      "listening to music",
                      "watching sitcoms",
                      "gaming with friends",
                      "playing cricket matches",
                      "exploring new backend architectures",
                    ]}
                    mainClassName="inline-block px-2 sm:px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg w-fit mx-1"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                  — always chasing creativity, both in and out of code.
                </p>
              </div>
            </div>
          </div>
          {/* <ProjectsDisplay/> */}
          <div id="projects">
            <GitHubProjects />
          </div>
          <div id="skills">
            <SkillsDisplay />
          </div>
          <div id="contact">
            <ContactMe/>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}
