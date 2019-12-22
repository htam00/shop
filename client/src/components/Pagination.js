import React from 'react';
import {Component} from 'react';

function Pagination(props){
  return(
          <div>
                <a href={props.number}>{props.number}</a>
          </div>
  )
}

export default Pagination;
