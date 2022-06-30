import React, {Component} from 'react';

class NumberItem extends Component <any,any>{
    constructor(props:any) {
        super(props);
        this.handle=this.handle.bind(this);
    }
    handle(evt:any){
        this.props.remove(this.props.value)
    }
    render() {
        return (
            <div>
                {this.props.value}
                <button onClick={this.handle}></button>
            </div>
        );
    }
}

export default NumberItem;