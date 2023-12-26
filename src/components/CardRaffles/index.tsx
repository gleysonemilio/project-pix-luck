import Image from 'next/image'
import { IphoneImg } from '@/assets'
import { Progress, Button } from '@/components/ui'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CalendarCheck, Pencil, Eye } from 'lucide-react'


//1f1d1b
//eeeeee
export default function CardRaffles({ title, percentage, date }) {
  return (
    <div className="flex flex-col bg-[#eeeeee] border-1 rounded-xl gap-4 h-83 m-1 p-2">

      {!date ? (
        <Badge variant="destructive" className="flex gap-1 justify-start items-end">
          <AlertTriangle size={20} />
          <small className="text-sm font-bold leading-none">Sem data do sorteio</small>
        </Badge>
      ) : (
        <Badge variant="secondary" className="flex gap-1 justify-start items-end">
          <CalendarCheck size={20} />
          <small className="text-sm font-bold leading-none"> Sorteio dia {date}</small>
        </Badge>
      )}

      <Image src={IphoneImg} width={1280} height={866} alt="Dashboard" className="rounded-lg" />

      <small className="text-sm font-bold leading-none text-start">{title}</small>

      <div className="flex flex-col">
        <small className="text-sm font-extralight leading-none text-gray-400">
          Porcentagem de vendar
        </small>
        <div className="grid grid-cols-[75%_minmax(20%,_1fr)] h-8 w-full gap-2 justify-center items-center">
          <Progress value={percentage} className={`h-[20%]`} />
          <small className="text-sm font-bold leading-none">{parseInt(percentage)} %</small>
        </div>
      </div>

      <div className="flex flex-row w-[100%] gap-2">
        <Button variant={'outline'} className="w-[100%] gap-2">
          <Pencil size={15} />
          Editar
        </Button>
        <Button variant={'outline'} className="w-[100%] gap-2">
          <Eye size={20} />
          Detalhes
        </Button>
      </div>
    </div>
  )
}

// information date raffles
// copy link raffles
//
