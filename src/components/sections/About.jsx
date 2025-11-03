export const About = () => {
    const frontendSkills = [
        "React",
        "Redux",
        "MarkDown",
        "Framer Motion",
        "Git & GitHub",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "CSS",
        "HTML",
    ]
    return (
        <section
            id="about"
            className="min-h-screen flex justify-center py-20"
        >
            <div className=" mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nisi soluta laborum asperiores, quia nemo impedit recusandae aliquam, commodi voluptates at incidunt eos! Dignissimos provident dolores
                        quod repellendus? Voluptate, cumque illo?
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-[23px] font-bold mb-4">Frontend Devloper</h3>
                            <div className="flex flex-wrap gap-3">
                                {frontendSkills.map((tech) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1.5 px-4 rounded-full text-[15px] font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}