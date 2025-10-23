import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Portfolio
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              <Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-float"></div>
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-slideUp">
            <div className="relative w-40 h-40">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="rounded-full border-4 border-blue-500 shadow-lg"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
            </div>
            <h1 className="text-5xl font-bold gradient-text">John Doe</h1>
            <p className="text-xl text-gray-300">Full Stack Developer & UI/UX Designer</p>
            <div className="flex space-x-6">
              <Link href="https://github.com/yourusername" 
                className="text-2xl hover:text-blue-400 transition-transform hover:scale-110">
                <BsGithub />
              </Link>
              <Link href="https://linkedin.com/in/yourusername"
                className="text-2xl hover:text-blue-400 transition-transform hover:scale-110">
                <BsLinkedin />
              </Link>
              <Link href="https://twitter.com/yourusername"
                className="text-2xl hover:text-blue-400 transition-transform hover:scale-110">
                <BsTwitter />
              </Link>
              <Link href="mailto:your.email@example.com"
                className="text-2xl hover:text-blue-400 transition-transform hover:scale-110">
                <MdEmail />
              </Link>
            </div>
            <button className="btn-primary mt-8">Download CV</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-4xl font-bold gradient-text">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
                seamless user experiences. With expertise in modern web technologies, I bring ideas to life
                through clean, efficient, and scalable code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech started with a curiosity for how things work, which evolved into a
                career building innovative solutions that make a difference.
              </p>
              <div className="flex gap-4">
                <span className="skill-badge">Problem Solver</span>
                <span className="skill-badge">Team Player</span>
                <span className="skill-badge">Creative Thinker</span>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-2xl"></div>
              <div className="card backdrop-blur-sm bg-white/10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">●</span>
                      <span>5+ Years of Experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">●</span>
                      <span>50+ Projects Completed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">●</span>
                      <span>20+ Happy Clients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">●</span>
                      <span>Open Source Contributor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="project-card">
                <Image
                  src={`/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover"
                />
                <div className="project-overlay">
                  <h3 className="text-xl font-semibold">Project Title</h3>
                  <p className="text-gray-300 mt-2">Brief project description goes here.</p>
                  <div className="flex gap-2 mt-4">
                    <span className="text-sm bg-blue-500/20 px-3 py-1 rounded-full">React</span>
                    <span className="text-sm bg-blue-500/20 px-3 py-1 rounded-full">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-500/20">
                        React & Next.js
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block">90%</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <div className="w-[90%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                </div>
                {/* Add more skills with progress bars */}
              </div>
            </div>
            {/* Add more skill categories */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Work Together</h2>
          <p className="text-gray-300 mb-12 text-lg">
            I'm always excited to connect with fellow developers, potential clients, and anyone passionate about technology.
            Whether you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                ></textarea>
                <button className="btn-primary w-full">Send Message</button>
              </form>
            </div>
            <div className="card glass">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <MdEmail className="text-blue-400" />
                  your.email@example.com
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                  <Link href="https://github.com/yourusername" className="text-2xl hover:text-blue-400">
                    <BsGithub />
                  </Link>
                  <Link href="https://linkedin.com/in/yourusername" className="text-2xl hover:text-blue-400">
                    <BsLinkedin />
                  </Link>
                  <Link href="https://twitter.com/yourusername" className="text-2xl hover:text-blue-400">
                    <BsTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
