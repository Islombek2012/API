// let xmlHttpRequest = new XMLHttpRequest()
// xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/photos')
// xmlHttpRequest.onload = ()=>{
//       let data = JSON.parse(xmlHttpRequest.response)
//       console.log(data);
// }
// xmlHttpRequest.send()

let box = document.querySelector('.box')
function getApi(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
            return res.json()
      })
      .then((data)=>{
            data.forEach(element =>{
                  console.log(element);
                  let h1 = document.createElement('h1')
                  h1.textContent = element.title

                  let user = document.createElement('h1')
                  user.textContent = element.name

                  box.append(h1, user)
            })
      })
}