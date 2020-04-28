// import {expect} from 'chai'
// import {fetchAllUsers} from './users'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import configureMockStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'
// import history from '../history'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

// describe('thunk creators', () => {
//   let store
//   let mockAxios

//   const initialState = {user: {}}

//   beforeEach(() => {
//     mockAxios = new MockAdapter(axios)
//     store = mockStore(initialState)
//   })

//   afterEach(() => {
//     mockAxios.restore()
//     store.clearActions()
//   })

//   describe('fetchAllUsers', () => {
//     it('eventually dispatches the GET ALL USERS action', async () => {
//       const fakeUsers = [
//         {
//           email: 'Cody123@gmail.com',
//           firstName: 'Cody',
//           lastName: 'Fullstack',
//           address: '123 new york'
//         },
//         {
//           email: 'tesing1@gmail.com',
//           firstName: 'Test',
//           lastName: 'Testing',
//           address: '123 123 new york'
//         }
//       ]
//       mockAxios.onGet('/api/users').replyOnce(200, fakeUsers)
//       await store.dispatch(fetchAllUsers())
//       const actions = store.getActions()
//       expect(actions[0].type).to.be.equal('GET_ALL_USERS')
//       expect(actions[0].allUsers).to.be.deep.equal(fakeUsers)
//     })
//   })
// })
