import moment from 'moment'

// early stage testing for basic form
export default [{
  id: '1',
  title: 'Soup',
  details: '',
  amount: 135,
  createdAt: 0
}, {
  id: '2',
  title: 'Insurance',
  details: '',
  amount: 107500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  title: 'Tax',
  details: '',
  amount: 5000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];