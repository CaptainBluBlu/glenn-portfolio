import Link from 'next/link'
import Card from './ui/Card'

interface Post {
  title: string
  date: string
  slug: string
  excerpt: string
}

const BlogCard = ({ post }: { post: Post }) => (
  <Card>
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="p-6">
        <p className="text-sm font-medium text-zinc-600 dark:text-stone-400 mb-2">{post.date}</p>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100 mb-3">{post.title}</h3>
        <p className="text-zinc-700 dark:text-stone-300">{post.excerpt}</p>
      </div>
      <div className="p-4 bg-stone-100 dark:bg-zinc-700/50 border-t-2 border-zinc-900 dark:border-stone-500">
        <span className="font-semibold text-zinc-800 dark:text-stone-200 hover:underline">Read post &rarr;</span>
      </div>
    </Link>
  </Card>
)

export default BlogCard
