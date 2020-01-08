import './homer_simpson.scss';
import homer_img from './homer_simpson.png';
import _ from 'lodash';

const simpsonImg = document.createElement('img');
simpsonImg.classList.add('homer');
simpsonImg.src = homer_img;
document.querySelector('body').appendChild(simpsonImg);
var myarray=[1,5,'mahesh'];

console.log(_.fill(myarray,'pankaj',0,1));  