import CreatedRaffles from '@/components/CreatedRaffles'
import Menu from '@/components/Menu'
import AmountCollected from '@/components/amountCollected'

export default function Dashboard() {
  //className="grid grid-cols-[20%_minmax(80%,_1fr)_100px]"
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <AmountCollected />
      </div>

      <div className="">
        <h1 className="ml-8">Sorteios em andamento</h1>
        <CreatedRaffles />
      </div>
      <div></div>
      <div> </div>
    </div>
  )
}
