import React from 'react'
import { CreditCard, DollarSign, Package } from 'lucide-react'

import { CardTitle, CardHeader } from '@/components/ui/card'
import OnlyClient from '@/components/globals/OnlyClient'

interface CardHeadProps {
  title: string
}

const Total_Revenue = <DollarSign size={20} className='text-primary' />
const productsInStuck = <Package size={20} className='text-primary' />
const sales = <CreditCard size={20} className='text-primary' />
const titles = [
  { title: 'Total Revenue', icon: Total_Revenue },
  { title: 'Sales', icon: sales },
  { title: 'Products in stuck', icon: productsInStuck }
]

const CardHead: React.FC<CardHeadProps> = ({ title }) => {
  const titleObj = titles.find((ti) => ti.title === title)

  return (
    <OnlyClient>
    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
      <CardTitle className='text-sm font-medium text-primary'>{title}</CardTitle>
      {titleObj && titleObj.icon}
    </CardHeader>
    </OnlyClient>
  )
}

export default CardHead
