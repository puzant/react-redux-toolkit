import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, ProductDetails, ShoppingCart } from 'pages'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/product-details/:productId' component={ProductDetails} />
      <Route exact path='/shopping-cart' component={ShoppingCart} />
    </Switch>
  )
}

export default Routes