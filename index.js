// Code your solutions in this file
const array=[1,2,3,4,5]

let students=[{
  name:'John Doe',
  class:'coffee takers',
  category: 'self sponsored'
},
{
  name:'Omar Mahat',
  class:'coffee takers',
  category: 'self sponsored'
},
{
  name:'Hamida Mstafa',
  class:'coffee takers',
  category: 'Access student'
}
]

for(let student of students){
  console.log(`Student Name:${student.name}, Class:${student.class}`)
}
