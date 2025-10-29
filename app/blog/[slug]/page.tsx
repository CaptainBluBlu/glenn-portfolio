import Section from '@/components/ui/Section'
import { MOCK_POSTS } from '@/lib/sanity'

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = MOCK_POSTS.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <main>
        <Section>
          <h1 className="text-4xl font-bold">Post not found</h1>
        </Section>
      </main>
    )
  }

  return (
    <main>
      <Section>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-stone-100 mb-4">{post.title}</h1>
        <p className="text-lg text-zinc-600 dark:text-stone-400 mb-8">{post.date}</p>
        <div className="prose dark:prose-invert max-w-none">
          {/* This is where the full blog post content would be rendered */}
          <p>{post.excerpt}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        </div>
      </Section>
    </main>
  )
}

export default BlogPostPage
