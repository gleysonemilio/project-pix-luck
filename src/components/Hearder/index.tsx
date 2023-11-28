import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Hearder() {
  return (
    <header>
      <div className="flex center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <small className="text-sm font-semibold leading-none flex center">Ei, Gleyson</small>
      </div>
    </header>
  )
}
