'use client'
import { useLang } from '@/context/LangContext'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-[+9999999] text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors"
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  )
}