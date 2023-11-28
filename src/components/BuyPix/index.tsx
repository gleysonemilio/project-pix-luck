'use client'
import axios from 'axios'
import { useReducer, useState } from 'react'
import QRCode from 'react-qr-code'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../ui/button'

const api = axios.create({
  baseURL: 'https://api.mercadopago.com',
  headers: {
    Authorization: `Bearer TEST-3852797968096937-112218-beb395f3f0922c1afe007b17ce8f3b32-219656106`,
    'X-Idempotency-Key': '21312312'
  }
})

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event?.name]: event?.value
  }
}

export default function BuyPix() {
  const [formData, setFormdata] = useState(formReducer, {})
  const [responsePayment, setResponsePayment] = useState(false)
  const [linkBuyMercadoPago, setLinkBuyMercadoPago] = useState(false)
  const [statusPayment, setStatusPayment] = useState(false)

  const handleChange = (event: any) => {
    setFormdata({
      name: event.target.name,
      value: event.target.value
    })
  }

  const getStatusPayment = () => {
    api.get(`v1/payments/${responsePayment?.data.id}`).then((response) => {
      if (response.data.status === 'approved') {
      }
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const body = {
      transaction_amount: 11,
      description: 'Produto teste de desenvolvimento',
      payment_method_id: 'pix',
      payer: {
        email: 'gleyson.emilio@hotmail.com',
        first_name: 'Gleydson',
        last_name: 'Clemente',
        identification: {
          type: 'CPF',
          number: '72361276046'
        }
      },
      notification_url: 'https://eo2j1jqg2vau38d.m.pipedream.net'
    }

    api
      .post('v1/payments', body)
      .then((response) => {
        console.log('res', response)
        setResponsePayment(response)
        setLinkBuyMercadoPago(response.data.point_of_interaction.transaction_data.ticket_url)
      })
      .catch((err) => {
        // alert(err)
      })
  }
  return (
    <>
      {' '}
      <p>PIX com API do Mercado pago</p>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" placeholder="Email" onChange={handleChange} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input name="name" type="name" id="name" placeholder="name" onChange={handleChange} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cpf">CPF</Label>
          <Input name="cpf" type="cpf" id="cpf" placeholder="cpf" onChange={handleChange} />
        </div>

        <div>
          <Button type="submit">Pagar</Button>
        </div>
      </form>
      {responsePayment && <button onClick={getStatusPayment}>Verificar status pagamento</button>}
      {linkBuyMercadoPago && !statusPayment && (
        <>
          {/*<iframe src={linkBuyMercadoPago} width="400px" height="620px" title="link_buy" />*/}
          <QRCode value={linkBuyMercadoPago} />
          <p>{linkBuyMercadoPago}</p>
        </>
      )}
      {statusPayment && <h1>Compra Aprovada</h1>}
    </>
  )
}
