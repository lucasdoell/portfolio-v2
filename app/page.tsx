import { BlogPosts } from "app/components/posts";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Lucas Doell
      </h1>
      <p className="max-w-md items-center text-pretty font-mono text-xs text-gray-400">
        <Link
          className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
          href="https://www.google.com/maps/place/Ithaca"
          target="_blank"
        >
          <GlobeIcon className="h-3 w-3" />
          Ithaca, NY
        </Link>
      </p>
      <p className="mt-4 mb-4">
        As a full-stack software engineer, I have built excellent user
        experiences and robust backend systems at scale. I am passionate about
        creating software that is both performant and user-friendly, and I have
        experience working with a variety of technologies and programming
        languages. I also have a strong background in sales and customer-facing
        roles, which I use to combine my love of technology with my passion for
        helping others.
      </p>
      <p className="mb-4">
        I am currently working as a Sales Representative at AT&T, where I help
        enrich the lives of my customers through technology. In my spare time, I
        am a full-stack software engineer building web apps with React, Next.js,
        and TypeScript.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
