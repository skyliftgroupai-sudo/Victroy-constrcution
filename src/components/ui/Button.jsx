import { Link } from 'react-router-dom'

const styles = {
  primary:
    'bg-brand-600 text-cream hover:bg-brand-700 shadow-card hover:-translate-y-0.5',
  outline:
    'border border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-cream',
  ghost: 'text-brand-700 hover:text-brand-900',
  light:
    'bg-cream text-brand-700 hover:bg-white shadow-card hover:-translate-y-0.5',
  outlineLight:
    'border border-cream/60 text-cream hover:bg-cream hover:text-brand-800',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2'

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
