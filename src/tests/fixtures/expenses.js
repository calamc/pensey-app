import moment from 'moment'

export default [{
  id: '1',
  description: 'Soup',
  note: '',
  amount: 135,
  createdAt: 0
}, {
  id: '2',
  description: 'Insurance',
  note: '',
  amount: 107500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Tax',
  note: '',
  amount: 5000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];