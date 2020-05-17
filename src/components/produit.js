import React from 'react'

const Products=(props)=>{
    const productItem= props.data.filter((product) => product.id == props.match.params.productId)[0];
        return (
            <div style={{textAlign :'left', direction:'initial', width:800, marginTop:50, marginLeft: 800}}>
              <h3>{productItem.name}</h3>
              <br/>
              {productItem.description}
              <hr/>
             <h4> {productItem.status}</h4>
              </div>
          );
  }
  export default Products