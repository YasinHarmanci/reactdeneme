import React, {Component} from 'react';

class ClickFunction extends Component <any,any>{

    // dispenseW(){
    //    let  allColor = [
    //         "blue","red","orange","green"
    //     ]
    //     let Rındex = Math.floor(Math.random() * allColor.length)
    //     console.log(allColor[Rındex]);
    // }

    static defaultProps = {
        message: [
            "do","re","mi","fa"
        ],
        colors:[
            "blue", "green","gray","yellow"
        ]
    }

    constructor(props:any) {
        super(props);
        this.dispenseW= this.dispenseW.bind(this);
        this.state= {color:"cyan"};
    }

    dispenseW(){
        let messages = this.props.message;
        let rIndex = Math.floor(Math.random() * messages.length)
        console.log(messages[rIndex])
    }

    hadleKeyUp(evt:any){
        if(evt.keyCode === 56){
            console.log("******************** ı love you");
        }
        else{
            alert("BOO");
        }
    }

    render() {
        return (
            <div >
                <button className="wise" onMouseEnter={this.dispenseW}>
                    :d
                </button>
                <input type="text"  onKeyUp={this.hadleKeyUp}/>
            </div>
        );
    }
}

export default ClickFunction;