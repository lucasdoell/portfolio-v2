import { ProjectCard } from "app/components/project-card";

const workExperience = [
  {
    title: "Full-Stack Software Engineer",
    company: "Appstle Inc.",
    location: "Remote",
    startDate: "February 2023",
    endDate: "December 2023",
    description:
      "At Appstle Inc., I developed new features for 30,000+ merchants using Java, TypeScript, and React, refactored React components, and managed a 500,000+ line codebase. I also handled database management with MySQL and DynamoDB, created internal tools, and optimized AWS Step Functions. Additionally, I worked on reducing customer churn and improving user experience using Intercom.",
    href: "https://appstle.com",
  },
  {
    title: "Founder",
    company: "lux.dev",
    location: "Ithaca, NY",
    startDate: "November 2023",
    endDate: "Present",
    description:
      "I am the founder of lux.dev, a software development company that specializes in building web applications for data visualization and analytics. My current focus is on Parsertime, a web app that helps collegiate Overwatch players track their statistics. This project has allowed me to refine my skills in full-stack development using Next.js, Tailwind, Prisma, and Postgres.",
    href: "https://lux.dev",
  },
  {
    title: "Retail Sales Consultant",
    company: "AT&T Inc.",
    location: "Ithaca, NY",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "As a Retail Sales Consultant at AT&T Inc. since May 2024, I use expert sales techniques to meet targets, provide personalized solutions, and engage in community events to build brand presence, while collaborating with the team to drive sales and optimize performance.",
    href: "https://att.com",
  },
  {
    title: "Retail Sales Associate (Part-Time)",
    company: "Best Buy Co., Inc.",
    location: "Ithaca, NY",
    startDate: "March 2024",
    endDate: "Present",
    description:
      "As a part-time Retail Sales Associate at Best Buy since March 2024, I provide a welcoming experience, educate customers on tech products, and process transactions accurately, while maintaining a clean and organized department to create an inviting atmosphere.",
    href: "https://bestbuy.com",
  },
];

const education = [
  {
    school: "Cornell University",
    degree: "B.S. Computer Science",
    location: "Ithaca, NY",
    startDate: "August 2021",
    endDate: "December 2022",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
];

const projects = [
  {
    title: "Parsertime",
    description:
      "A web app written to help collegiate Overwatch players track their statistics.",
    link: "https://github.com/luxdotdev/parsertime",
  },
  {
    title: "Parsertime Docs",
    description: "Technical documentation for the Parsertime web app.",
    link: "https://github.com/luxdotdev/docs",
  },
  {
    title: "Parsertime Replicate",
    description:
      "A script that automates backing up the Parsertime production database to a replica.",
    link: "https://github.com/luxdotdev/replicate",
  },
  {
    title: "Interpreter/Compiler",
    description:
      "An interpreter and compiler for a toy language built in both Go and Rust.",
    link: "https://github.com/lucasdoell", // two repositories, go to profile instead
  },
  {
    title: "OWL Bot",
    description:
      "A Discord bot written in TypeScript that fetches OWL stats and schedules.",
    link: "https://github.com/lucasdoell/owlbot",
  },
  {
    title: "Sports Stats Web Scraper",
    description:
      "Final project for CS 3110. Written primarily in OCaml with testing in OUnit2.",
    link: "https://github.com/lucasdoell/CS3110-scraping",
  },
];

export default function Resume() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Résumé</h1>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">
        Work Experience
      </h2>
      <ul>
        {workExperience.map((job) => (
          <li key={job.company} className="mb-6">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2">
                <a className="hover:underline text-lg" href={job.href}>
                  {job.company}
                </a>
              </h3>
              <div className="text-md tabular-nums">
                {job.startDate} - {job.endDate}
              </div>
            </div>
            <h4 className="leading-none italic">{job.title}</h4>
            <p className="mt-4 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              {job.description}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
        Education
      </h2>
      <ul>
        {education.map((school) => (
          <li key={school.school} className="mb-6">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none mb-2">
                {school.school}
              </h3>
              <div className="text-md tabular-nums">
                {school.startDate} - {school.endDate}
              </div>
            </div>
            <h4 className="leading-none italic">{school.degree}</h4>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
        Skills
      </h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80">
            {skill}
          </div>
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
        Projects
      </h2>
      <div className="lg:grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
