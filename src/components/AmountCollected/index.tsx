import { PiggyBank } from 'lucide-react'

//eeeeee
//c4c3c3
export default function AmountCollected() {
  return (
    <aside className="flex bg-[#1f1d1b] p-2 rounded-xl justify-between">
      <div className="flex items-center gap-2">
        <PiggyBank size={45} className="p-1 bg-[#373432] rounded-xl" />
        <div className="flex flex-col gap-1">
          <small className="text-sm font-bold leading-none">Valor arrecadado</small>
          <small className="text-sm font-extralight leading-none text-gray-400">Valor Total</small>
        </div>
      </div>

      <div className="flex items-center">
        <small className="text-sm font-extrabold leading-none text-green-500	"> R$ 1.000,00</small>
      </div>
    </aside>
  )
}
