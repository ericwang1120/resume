import { observable } from 'mobx'

export interface CounterStore {
  counter: number
  fetchData(): void
}

const counterStore: CounterStore = observable({
  counter: 0,
  fetchData() {
    fetch('https://s2j8aqxdve.execute-api.ap-southeast-2.amazonaws.com/Prod/update')
      .then((response) => response.json())
      .then((data) => (this.counter = data.Attributes.current_counter))
      .catch(() => (this.counter = 0))
  }
})

export default counterStore
