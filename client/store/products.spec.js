import {expect} from 'chai'
import {fetchAllProducts} from './products'
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

  describe('fetchAllProducts', () => {
    it('eventually dispatches the GET ALL PRODUCTS action', async () => {
      const fakeProducts = [
        {
          name: 'cody chair',
          price: 12.34,
          quantity: '3'
        },
        {
          name: 'pug chair',
          price: 23.45,
          quantity: '2'
        }
      ]
      mockAxios.onGet('/api/products').replyOnce(200, fakeProducts)
      await store.dispatch(fetchAllProducts())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_PRODUCTS')
      expect(actions[0].allProducts).to.be.deep.equal(fakeProducts)
    })
  })
})
