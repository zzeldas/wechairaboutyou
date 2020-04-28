import axios from 'axios'

const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY'

const initialState = {
  all: [],
  singleCategory: {}
}

/**
 * ACTION CREATORS
 */
const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})

const getSingleCategory = category => ({
  type: GET_SINGLE_CATEGORY,
  category
})

/**
 * THUNK CREATORS
 */
export const fetchAllCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/categories')
    dispatch(getAllCategories(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSingleCategory = id => async dispatch => {
  try {
    const res = await axios.get(`/api/products/categories/${id}`)
    console.log('GET SINGLE CAT: ', res.data)
    dispatch(getSingleCategory(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {...state, all: action.categories}
    case GET_SINGLE_CATEGORY:
      return {...state, singleCategory: action.category}
    default:
      return state
  }
}
