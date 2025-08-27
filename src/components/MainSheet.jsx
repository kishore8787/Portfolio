import GlitchText from "../comps/GlitchText/GlitchText";
import ClickSpark from "../comps/ClickSpark/ClickSpark";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RotatingText from "../comps/RotatingText/RotatingText";
import SkillsDisplay from "./SkillsDisplay";
import GitHubProjects from "./GitHubProjects";
import ContactMe from "./ContactMe";
import NavbarWrapper from "./NavWrapper";

export default function MainSheet() {
  return (
    <div className="relative h-screen w-full">
      <NavbarWrapper />
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <ClickSpark
          sparkSize={15}
          sparkRadius={12}
          duration={600}
          easing="ease-out"
          sparkColor="yellow"
        >
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
                Kishore
              </GlitchText>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full">
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
                Hi there! I'm a final-year Computer Science student passionate about full-stack development, problem-solving, and building real-world tech solutions. I enjoy working with the MERN stack, exploring AI/ML trends, and turning ideas into impactful applications. Beyond coding, I love collaborating on creative projects and continuously learning emerging technologies to stay ahead in the tech world. 🚀
                  <br />
                  <span>Outside of work, you’ll find me</span>
                  <RotatingText
                    texts={[
                      "listening to RNB music",
                      "watching tarantino movies",
                      "gaming with friends on mobile",
                      "watching CSK cricket matches",
                      "exploring data analytics projects",
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
                  — always chasing creativity, both in and out of project.
                </p>
              </div>
            </div>
          </div>
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
