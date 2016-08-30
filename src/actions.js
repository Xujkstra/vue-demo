let host = 'http://120.25.237.253:9191'

export const incrementCounter = ({dispatch, state}) => {
  dispatch('INCREMENT')
}

export const decrementCounter = ({dispatch, state}) => {
  dispatch('DECREMENT')
}

export const asycGetMsg = (id) => {
  console.log('test')
  return function({ dispatch }) {
    console.log('dispatch...')
    let data = {
      curriculum_id : id
    }
    let url = host + '/api/v1.0/curriculum/details'
    fetch(url+'?curriculum_id='+id).then( res => {
      console.log(res)
      return res.json()
    }).then( data => {
      dispatch('AsycData',data.data.lessons)
    }).catch(err => console.log(err))
  }
}
