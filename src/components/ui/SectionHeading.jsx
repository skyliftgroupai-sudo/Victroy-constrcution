import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-brand-200' : ''}`}>
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.6rem] ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-cream/90' : 'text-ink/70'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
