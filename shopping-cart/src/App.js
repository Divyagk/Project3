// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'animate.css/animate.min.css';
// import 'font-awesome/css/font-awesome.min.css';

import React, { PureComponent } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
} from 'react-shopping-cart';
 
 
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
const { getDefaultLocalization } = cartLocalization;
 
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: 'Color',
  iPadCase: 'iPad case',
  red: 'Red',
  green: 'Green',
  yellow: 'Yellow',
  GBP: '£',
  EUR: '€',
  USD: '$',
};
 
const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: 'Yellow (+{cost}{localizedCurrency})',
};
 
class App extends PureComponent {
 
  state = {
    products: {},
    product: {
      name: 'iPadCase',
      id: 'ipad-case',
      path: '/shop/ipad-case/',
      properties: {
        color: ['red', 'green', {
          additionalCost: {
            GBP: 1,
            EUR: 2,
            USD: 3.50,
          },
          value: 'yellow',
        }],
      },
      propertiesToShowInCart: ['color'],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: 'GBP',
      imageSrc: '1-483x321.jpeg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...iPadCaseLocalization,
          ...iPadPropertiesWithAdditionalCostLocalization
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        iPadCaseLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        iPadCaseLocalization
      )
  };
 
  addProduct = (key, product, currency) =>
    void this.setState(
      (
        {
          products:
            {
              [key]: cartProduct = { quantity: 0 },
              ...restOfProducts
            }
        }
      ) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity:
              product.quantity +
              cartProduct.quantity,
          }
        }
      })
    );
 
  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join('_')}`;
 
  updateProduct = (key, updatedProduct) => void console.log(':)');
 
  removeProduct = key => void console.log(':C');
 
  render() {
 
    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state,
    } = this;
 
    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product,
    } = state;
 
    const checkoutButtonElement =
      <CheckoutButtonComponent
        grandTotal={500}
        hidden={false}
        checkoutURL="/to/my/checkout"
        currency="GBP"
        getLocalization={getCheckoutButtonLocalization}
      />;
    return (
      <div className="container">
        <ProductComponent
          {...product}
          checkoutButton={checkoutButtonElement}
          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
                    // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />
 
 
        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={
            getCartLocalization
          }
          currency="GBP"
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={
            checkoutButtonElement
          }
          isCartEmpty={
            false
          }
          getLocalization={getCartLocalization}
        />
      </div>
    );
  }
}
 
export default App;
// Localization
// The default localization library is intl-messageformat. In order to localize your cart, you can chose one of the possible ways:

// Create your own getLocalization function and pass it as prop to the cart's components
// Create getLocalization function with bound localization using defaultLocalization object and getLocalization, getDefaultLocalization functions from cartLocalization module, pass it as prop to the cart's components
// Don't do anything and see only default language in your cart :C
// Generally, components require a function, which takes id and params(optional) and returns string, based on received arguments.

// The first one should look like that if you're also using intl-messageformat:

//   import React from 'react';
//   import IntlMessageFormat from 'intl-messageformat';
//   import { Cart } from 'react-shopping-cart';
 
//   const localization = {
//     en: {
//       cart : {
//         GBP: '£',
//       },
//     },
//   };
 
//   const getLocalization = (localizationPart, language, id, params = {}) =>  
//     new IntlMessageFormat(localizationPart[id], language).format(params);
 
//   <Cart
//     getLocalization={(...args) => getLocalization(localization.en.cart, 'en', ...args)}
//   />
// export default App;
