import { ArrowRight } from "lucide-react"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-4">Exchange Rate App</h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed tenetur eligendi vero, rerum corrupti ducimus corporis. Mole
                            stias esse error dolorem, libero neque voluptatibus delectus numquam dolores vel, veniam quam labore!
                        </p>
                        <div className="flex gap-4">
                            {["React", "TypeScript", "TailwindCSS", "ShadCN"].map((tech) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1.5 px-4 rounded-full text-[15px] font-semibold hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" >

                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ml-4 underline underline-offset-1 ">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}