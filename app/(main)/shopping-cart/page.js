import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import React from 'react'
import ShoppingCart from './components/ShoppingCart'

function CartPage() {
  
  return (
    <div>
      <CustomBreadcrumb title="Shopping Cart"/>
      <ShoppingCart/>
    </div>
  )
}

export default CartPage