import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              I am a{" "}
              <span className="font-bold">{"dynamic"}</span>,
              <span className="font-bold">{" goal-oriented"}</span>, and
              <span className="font-bold">{" self-driven"}</span> software engineer
              based in Athens, GA.
            </p>
            <br />
            <p>
              I graduated from the University of North Georgia in 2023
              with a BS in Computer Science and have been working in the
              field since 2019.
            </p>
            <br />
            <p>
              When {"I'll"} not writing code, you can find me out on the disc golf course or
              going for a long run downtown. I like to nerd out on new technology and testing
              new frameworks and {"API's"}.
            </p>
            <br />
            <p>
                I am interested in creating tools that improve effecienty and websites
                that are optimized to drive traffic. Wether I am coding as a career or
                as a freelancer, I find a lot of joy in delivering a great product.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-red-500">
                love what you do
              </span>{" "}
              and then {"you'll"} never work a day in your life. I have a
              passion for writing code and I am always excited about
              new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:top-14 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection