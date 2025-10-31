import Link from 'next/link'
import FullVHSection from '@/components/ui/FullVHSection'
import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { MOCK_PROJECTS } from '@/lib/sanity'

const HomePage = () => {
  return (
    <main>
      <FullVHSection className="text-center">
        <div>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-archivo-black tracking-tighter text-zinc-900 dark:text-stone-100 uppercase">
            JANE DOE
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-600 dark:text-stone-300 max-w-3xl mx-auto">
            A creative developer & digital strategist, crafting pixel-perfect
            experiences from the 8-bit era to the modern web.
          </p>
          <Link
            href="/projects"
            className="mt-12 inline-block px-8 py-4 bg-zinc-900 text-stone-100 dark:bg-stone-100 dark:text-zinc-900 text-lg font-semibold rounded-none shadow-lg transform transition-transform hover:scale-105"
          >
            See My Work
          </Link>
        </div>
      </FullVHSection>
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-zinc-500 dark:text-stone-400 tracking-wide">
                2021 - Present
              </h3>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-stone-100">
                Senior Developer @ WebCo
              </h3>
              <p className="mt-2 text-lg text-zinc-600 dark:text-stone-300">
                Leading front-end development on enterprise-level applications
                using Next.js, TypeScript, and Sanity.io. Mentoring junior
                developers and defining technical architecture.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-zinc-500 dark:text-stone-400 tracking-wide">
                2018 - 2021
              </h3>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-stone-100">
                Web Developer @ Digital Agency
              </h3>
              <p className="mt-2 text-lg text-zinc-600 dark:text-stone-300">
                Built and maintained dozens of client websites, from marketing
                pages to full e-commerce solutions, focusing on performance and
                responsive design.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>Interests & Hobbies</SectionTitle>
        <p className="text-lg text-zinc-600 dark:text-stone-300 max-w-3xl">
          When I'm not coding, you can find me restoring vintage computers,
          collecting 80s arcade cabinets, or experimenting with analog
          photography. I'm also an avid synthwave music enthusiast and enjoy
          long-distance running.
        </p>
      </Section>
      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PROJECTS.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 border-2 border-zinc-900 dark:border-stone-100 text-zinc-900 dark:text-stone-100 text-lg font-semibold rounded-none transition-colors hover:bg-zinc-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-zinc-900"
          >
            View All Projects
          </Link>
        </div>
      </Section>
    </main>
  )
}

export default HomePage
