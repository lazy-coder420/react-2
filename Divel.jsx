import React from 'react'

const Divel = () => {

 const products = [
    {id:1, name:"Laptop"},
    {id:2, name:"Mobile"},
    {id:3, name:"Headphone"}
  ];

  return (
    <div>
      {products.map((product) =>
        <div key={product.id}>
          <h1>  {product.name}</h1>
          <h1>{product.id}</h1>
            
            
            </div>
      )}
    </div>
  )
}

export default Divel







// return (
//   <div>
//     {products.map((product) =>
//       <p key={product.id}>
//         {product.id} - {product.name}
//       </p>
//     )}
//   </div>
// )        







// function Users(){

//   const users = ["Munna","Rahim","Karim"];

//   return(
//     <div>
//       {users.map((user,index) =>
//         <p key={index}>{user}</p>
//       )}
//     </div>
//   );

// }