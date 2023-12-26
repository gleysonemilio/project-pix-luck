import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ListTree, Sun, Moon } from 'lucide-react'

export default function Hearder() {
  return (
    <header className="flex align-center justify-between">
      <div className="flex center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 align-baseline justify-center">
          <small className="flex center text-sm font-semibold leading-none">Ei , Gleyson</small>
          <small className="flex center text-sm  leading-none">Seja Bem vindo</small>
        </div>
      </div>

      <div className="flex align-center">
        <ListTree />
      </div>
    </header>
  )
}
