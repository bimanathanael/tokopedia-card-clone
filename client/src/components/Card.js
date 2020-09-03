import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {BsFillHeartFill, BsHeart} from 'react-icons/bs'

export const Card = ({product}) =>{

  const [fav, setFav] = useState(false)

  let rupiahFormat = product.price.toString()
	let sisa 	= rupiahFormat.length % 3
	let rupiah 	= rupiahFormat.substr(0, sisa)
	let ribuan 	= rupiahFormat.substr(sisa).match(/\d{3}/g)
		
  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }  

  return (
    <>
    <div className="col-3">
      <div className="card" style={{borderRadius: '10px', position:'relative'}} >
        <img src={product.imageUrl} className="card-img-top" alt={product.name}
        style={{width: '100%'}} />
        <div className="card-body">
          <h5 className="card-title" style={{ marginBottom: '0px', fontSize: '14px'}}>
            {product.name}
          </h5>
          <p className="card-text rupiah">
            <b>  
              Rp{rupiah}
            </b>
          </p>
          <div className="row">
            <div className="col-1">
              <img style={{width: "20px"}} src="https://ecs7-p.tokopedia.net/ta/icon/badge/PM-Badge-80.png"/>
            </div>
            <div className="col"
                style={{paddingLeft: '8px'}}
              >
              <p className="card-text customCard" style={{
                }}>
                  {product.location}
                </p>
            </div>
          </div>
          <div className="heartFav" style={{
            
            }}>
            {fav == true ?
              <BsFillHeartFill onClick={()=> setFav(!fav)} color="red"/> :
              <BsFillHeartFill onClick={()=> setFav(!fav)} color="grey"/>
            }
          </div>
          <p className="card-text">
            <StarRatings
              rating={product.ratings}
              starRatedColor="#f9c229"
              numberOfStars={5}
              name='rating'
              starDimension='20px'
              style={{padding: '0px'
            }}
            />
          </p>
        </div>
      </div>
    </div>
    </>
  )
} 