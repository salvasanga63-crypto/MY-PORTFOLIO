import { ArrowUpRight } from 'lucide-react'

export default function ButtonLink({
  children,
  href = '#',
  secondary = false,
  disabled = false,
  ariaLabel,
}) {
  return (
    <a
      className={`button ${secondary ? 'button-secondary' : ''} ${disabled ? 'is-disabled' : ''}`}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      onClick={disabled ? (event) => event.preventDefault() : undefined}
    >
      {children}
      {!disabled && <ArrowUpRight size={16} strokeWidth={1.8} />}
    </a>
  )
}
