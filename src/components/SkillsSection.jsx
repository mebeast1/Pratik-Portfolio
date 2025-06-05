export const SkillsSection = () => {
  const skills = [
    { name: "HTML", icon: "/skills/html.png" },
    { name: "CSS", icon: "/skills/css.png" },
    { name: "JavaScript", icon: "/skills/javascript.png" },
    { name: "React", icon: "/skills/react.png" },
    { name: "Tailwind", icon: "/skills/tailwind.png" },
    { name: "Node.js", icon: "/skills/node.png" },
    { name: "Express", icon: "/skills/express.png" },
    { name: "MongoDB", icon: "/skills/mongodb.png" },
    { name: "Git/GitHub", icon: "/skills/git.png" },
    { name: "VS Code", icon: "/skills/vscode.png" },
  ];

  return (
    <section
      id="skills"
      className="py-10 px-4 relative bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-8">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="w-20 h-20 p-3 bg-card rounded-xl shadow-md flex items-center justify-center border border-muted/30"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
