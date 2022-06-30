import React, {Component} from 'react';




// class AddingDefaultProps extends React.Component<any> {
//      defaultProps = {
//         from: 'Anonymous',
//         bangs: 5,
//         to:'',
//     }
//     render() {
//          const {bangs,from,to} ={...this.defaultProps,...this.props}
//
//         const bangss = "!".repeat(bangs);
//         return (
//             <div>
//                 <p> Hi {to} from {from} {bangs} </p>
//             </div>
//         );
//     }
// }



 type gb ={
     from: string
     bangs?: number | string;
     to:string
 }

const AddingDefaultProps =  (props:gb)=> {
    const defaultProps = {
        from: 'asdasdas',
        bangs: 5,
        to:'',
    }
     let {bangs,from,to} ={...defaultProps,...props}
     bangs = "!".repeat(Number(bangs));

     return (
         <div>
             <p> Hi {to} from {from} {bangs} </p>
         </div>
     );
}


export default AddingDefaultProps;