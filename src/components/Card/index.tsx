import Image from 'next/image'
import { IphoneImg } from '@/assets'
import { Progress } from '@/components/ui/progress'

export default function Card({ title, percentage }) {
  return (
    <div className="flex flex-col bg-[#1f1d1b] border-1 rounded-xl gap-2 h-60 m-1 p-2">
      <Image src={IphoneImg} width={1280} height={866} alt="Dashboard" className="rounded-lg" />
      <small className="text-sm font-bold leading-none">{title}</small>

      <small className="text-sm font-extralight leading-none text-gray-400">
        Porcentagem de vendar
      </small>
      <div className="grid grid-cols-[75%_minmax(20%,_1fr)] h-8 w-full gap-2 justify-center">
        <Progress value={percentage} className={`h-[20%]`} />
        <small className="text-sm font-bold leading-none">{parseInt(percentage)} %</small>
      </div>
    </div>
  )
}
