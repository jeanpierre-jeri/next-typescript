import { CSSProperties, FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ActiveLinkProps {
  to: string
  children: ReactNode
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

const ActiveLink: FC<ActiveLinkProps> = ({ children, to }) => {
  const { pathname } = useRouter()
  return (
    <Link href={to}>
      <a style={pathname === to ? style : undefined}>{children}</a>
    </Link>
  )
}

export default ActiveLink
