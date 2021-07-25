export const state = () => ({
  crimes: [
    {
      id: 1,
      type: 'Murder',
      date: '12/02/2021',
      time: '6:14pm',
      evidence: 'Red Handed',
      suspects: [
        {
          name: 'zakzaky',
          dob: '12/09/1961',
          gender: 'male',
          identificationType: 'Bvn',
          IdentificationNumber: '12345678900'
      
      },{
          name: 'shekau', 
          dob: '05/06/1961',
          gender: 'Shemale',
          identificationType: 'BVN',
          IdentificationNumber: '23456789012'
        }
      ],
    },
    {
      id: 2,
      type: 'Rape',
      date: '12/02/2021',
      time: '9:10pm',
      evidence: 'witness',
      suspects: [
        {
          name: 'shekau', 
          dob: '05/06/1961',
          gender: 'Shemale',
          identificationType: 'BVN',
          IdentificationNumber: '23456789012'
        }
      ],
    },
    {
      id: 3,
      type: 'Robbery',
      date: '19/02/2021',
      time: '2:14am',
      evidence: 'Media Footage(Video/Audio)',
      suspects: [
        {
          name: 'AbdulJabbar',
          dob: '01/11/1966',
          gender: 'male',
          identificationType: 'NIN',
          IdentificationNumber: '09876543210'
      
      }
      ],
    }
  ]
}) 

// export const getters = {
//   getCrime(state, id){
//     return state.crimes.find(crime=> crime.id === id)
//   }
// }