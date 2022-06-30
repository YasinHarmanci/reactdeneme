import React, {Component} from 'react';
import {Button} from "reactstrap";


// class CrashCourseOnclickEvent extends Component<any,any> {
//
//     constructor(props:any){
//         super(props);
//         this.state={showContent:true}
//         this.handleClick = this.handleClick.bind(this);
//     }
//     render() {
//         return (
//             <div>
//
//
//                 <h1></h1>
//
//             </div>
//         );
//     }
// }

class CrashCourseOnclickEvent extends Component<any,any> {

    constructor(props:any){
        super(props);
        this.state={num:1};
        this.getRandom = this.getRandom.bind(this);

        this.state={showContent:true}
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e:any){
        this.setState({showContent: !this.state.showContent});
    }

    getRandom(e:any){
        let rand = Math.floor(Math.random() * 10) +1 ;
        this.setState({num: rand});
    }

    render() {
        return (
            <div>
                <h1> {this.state.showContent? 'clicked!!!' : 'not clicked'} </h1>
                 <Button onClick={this.handleClick}> Click </Button>
                <h1> Rastgele balıkçı {this.state.num} </h1>
                {this.state.num ===7 && <h2>Sen bir götsün</h2>}
                <Button onClick={this.getRandom}> Click </Button>

            </div>
        );
    }
}

export default CrashCourseOnclickEvent;