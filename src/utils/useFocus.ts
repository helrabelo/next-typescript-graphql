import { useRef } from 'react'

export const useFocus = () => {
  const htmlElRef = useRef<HTMLInputElement>(null)
  const setFocus = () => {
    const currentEl = htmlElRef.current
    currentEl && currentEl.focus()
  }
  return [htmlElRef, setFocus] as const
}
