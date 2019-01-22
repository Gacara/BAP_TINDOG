

const initialState = { favoritesChien: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteChienIndex = state.favoritesChien.findIndex(item => item.id === action.value.id)
      if (favoriteChienIndex !== -1) {
        
        nextState = {
          ...state,
          favoritesChien: state.favoritesChien.filter( (item, index) => index !== favoriteChienIndex)
        }
      }
      else {
     
        nextState = {
          ...state,
          favoritesChien: [...state.favoritesChien, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite