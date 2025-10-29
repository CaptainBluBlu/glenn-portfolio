import Image from 'next/image'
import PageTitle from '@/components/ui/PageTitle'
import Section from '@/components/ui/Section'
import { MOCK_IMAGES } from '@/lib/cloudinary'

const GalleryPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Gallery</PageTitle>
        <p className="text-lg text-zinc-700 dark:text-stone-300 max-w-3xl mb-12">
          A visual moodboard of my interests, photography, and inspirations. These images would be hosted and optimized via Cloudinary.
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {MOCK_IMAGES.map(img => (
            <Image
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg border-2 border-zinc-900 dark:border-stone-500 shadow-md transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </Section>
    </main>
  )
}

export default GalleryPage
