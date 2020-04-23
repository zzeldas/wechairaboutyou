/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchProduct} from './singleProduct'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {product: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchProduct', () => {
    it('eventually dispatches the GET PRODUCT action', async () => {
      const productId = 1
      const fakeProduct = {
        id: 1,
        name: 'cody chair',
        price: 12.34,
        quantity: '3'
      }
      mockAxios.onGet(`/api/products/${productId}`).replyOnce(200, fakeProduct)
      await store.dispatch(fetchProduct())
      const actions = store.getActions()
      console.log('ACTIONS: ', actions)
      expect(actions[0].type).to.be.equal('GET_PRODUCT')
      expect(actions[0].product).to.be.deep.equal(fakeProduct)
    })
  })
})
