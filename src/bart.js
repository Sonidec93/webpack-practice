import './bart_simpson.scss';
import { Sample } from './class-example';
import bart_img from './bart_simpson.png';
import _ from 'lodash';

const simpsonImg = document.createElement('img');
simpsonImg.classList.add('bart');
simpsonImg.src = bart_img;
document.querySelector('body').appendChild(simpsonImg);

let sample=new  Sample();
console.log(sample.height);
console.log('hello');
var array=[3,'mukul',true];
console.log(_.shuffle(array));