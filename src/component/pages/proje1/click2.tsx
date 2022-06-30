import React, {Component} from 'react';

class Click2 extends Component <any,any> {
    static defaultProps = {
        colors: [
            "blue","green","yellow"
        ]
    }

    constructor(props:any) {
        super(props);
        this.state ={color:"cyan"}
    }

    changeColor(newColor:any){
        this.setState({color:newColor})
    }

    render() {
        return (

            <div className="ButtonList" style={{backgroundColor:this.state.color}} >
                {this.props.colors.map((c: any) => {
                    // const colorObj = {backgroundColor: c};
                    return(
                        <button style={{backgroundColor:c}} onClick={this.changeColor.bind(this, c)}>Click on me </button>
                    )
                })
                }
            </div>
        );
    }
}

export default Click2;