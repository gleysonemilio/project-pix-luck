import BuyPix from '@/components/BuyPix'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">password</Label>
        <Input type="password" id="password" placeholder="password" />
      </div>
      <Button type="submit">entrar</Button>
    </main>
  )
}
