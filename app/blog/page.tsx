import BlogCard from '@/components/BlogCard'
import Section from '@/components/ui/Section'
import { MOCK_POSTS } from '@/lib/sanity'

const BlogPage = () => {
  const heroPost = MOCK_POSTS[0]

  return (
    <main>
      <div className="w-full bg-stone-200 dark:bg-zinc-800 py-24 sm:py-32">
        <Section className="!py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg font-semibold text-zinc-600 dark:text-stone-400 mb-2">Featured Post &bull; {heroPost.date}</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-stone-100 mb-4">{heroPost.title}</h1>
              <p className="text-xl text-zinc-700 dark:text-stone-300 mb-8">{heroPost.excerpt}</p>
              <a href={`/blog/${heroPost.slug}`} className="px-6 py-3 bg-zinc-900 text-stone-100 dark:bg-stone-100 dark:text-zinc-900 text-lg font-semibold rounded-md shadow-lg transform transition-transform hover:scale-105">
                Read More
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://placehold.co/600x400/d1d5db/374151?text=Blog+Hero"
                alt="Blog hero"
                className="rounded-lg object-cover shadow-xl border-2 border-zinc-900 dark:border-stone-500"
              />
            </div>
          </div>
        </Section>
      </div>
      <Section>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-800 dark:text-stone-200 mb-8">
          All Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </main>
  )
}

export default BlogPage
