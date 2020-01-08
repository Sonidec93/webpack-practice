export class Sample {
    height = 10; /*class properties 
                are not allowed in most browser 
                so i we are using babel to transform 
                check config in webpack.config.js
                */
    display() {
        console.log(this.height);
    }
}