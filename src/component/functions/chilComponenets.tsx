import React, {Component} from 'react';
import NumberItem from "./numberItem";

class ChilComponenets extends Component <any,any>{
    constructor(props:any) {
        super(props);
    }

    remove(num:any){
        this.setState((st:any) => ({
            nums: st.nums.filter((n:any) =>  n !== num)
        }));
    }
    render() {
        let nums = this.state.nums.map((n:any )=>(
            <NumberItem value={n} remove={() => this.remove(n)} />
        ) );
        return (
            <div>
                
            </div>
        );
    }
}

export default ChilComponenets;