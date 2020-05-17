import React from 'react'
import { Link, Route} from 'react-router-dom';
import Product from "./produit"

const Products=(props)=>{

      const ProductsInfo = [
       {
           id: 1,
           name: 'NIKE Liteforce Blue Sneakers',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
           status: 'Available'
   
       },{
        id: 2,
        name: 'Stylised Flip Flops and Slippers',
        description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
        status: 'Out of Stock'
      
      },
      {
        id: 3,
        name: 'ADIDAS Adispree Running Shoes',
        description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
        status: 'Available'
      },
      {
        id: 4,
        name: 'ADIDAS Mid Sneakers',
        description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
        status: 'Out of Stock'
      }
   
       
   
   ];
    
     var list = ProductsInfo.map( (product) => {
       return(
         <li>
           <Link to={`${props.match.url}/${product.id}`}>
             {product.name}
           </Link>
         </li>
         )
   
       })
   
     return(
       <>
           <div >
            <div>
              <h3> Products</h3>
              <ul> {list} </ul>
            </div>
           </div>
   
           <Route path={`${props.match.url}/:productId`}
               render={ (props) => <Product data= {ProductsInfo} {...props} />}/>
           <Route exact path={props.match.url}
               render={() => (
               <div>Please select a product</div>
               )}
           />
       </>
     )
   }
   export default  Products 