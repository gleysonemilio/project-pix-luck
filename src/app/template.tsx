import Hearder from '@/components/Hearder'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <article className="min-h-screen">
      <Hearder />
      {children}
      <footer></footer>
    </article>
  )
}
