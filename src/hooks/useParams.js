// hooks/useParams.ts
'use client'

import { usePathname } from 'next/navigation'

export function useParams() {
  const pathname = usePathname()
  const slug = pathname?.split('/').pop()
  
  return {
    slug,
    fullPath: pathname
  }
}