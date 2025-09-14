export default function About() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-screen"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Hello, I'm <span className="text-indigo-400">Matthew</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-xl">
        I build things with <span className="text-indigo-300">React</span> &{" "}
        <span className="text-indigo-300">TypeScript</span>
      </p>
    </section>
  );
}
