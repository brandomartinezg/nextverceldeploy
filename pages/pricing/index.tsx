import React from 'react'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

export const PricingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pricing/index.js</code>
      </p>
    </MainLayout>
  )
}

export default PricingPage;