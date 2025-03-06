'use client'

import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionLinkProps extends LinkProps {
  children: ReactNode,
  href: string,
  className: string,
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink = function({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter()

  const handleTransition = async(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault()
    
    const wrapperElement = document.querySelector(".transitionContainer")
    const footer = document.querySelector("footer")

    wrapperElement?.classList.add('pageTransition')
    footer?.classList.add('pageTransition')
    await sleep(500)

    router.push(href)

    await sleep(500)
    wrapperElement?.classList.remove('pageTransition')
    footer?.classList.remove('pageTransition')
  }

  return (
    <Link 
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

export default TransitionLink