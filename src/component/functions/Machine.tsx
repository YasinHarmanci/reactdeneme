import React, {Component} from 'react';



/*class Machine extends React.Component<machine>{
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1===s2) && (s2===s3);

        return (
            <div>
                <p>{s1}</p>
                <p>{s2}</p>
                <p>{s3}</p>
            </div>
        );
    }
}*/




// const Machine = ({s1,s2,s3}: { s1:string, s2:string, s3:string})=> {
//     const winner = (s1===s2) && (s2===s3);
//     return (
//         <div>
//             <p>{s1}</p>
//             <p>{s2}</p>
//             <p>{s3}</p>
//         </div>
//     );
// }


const Machine = ({slots}: {slots:[string,string,string]})=> {
    const winner = (slots[0]===slots[1]) && (slots[1]===slots[2]);
    return (
        <div>
            <p>{slots[0]} {slots[1]} {slots[2]}</p>
            <p>{winner ? 'Winner' : 'Loser'}</p>
        </div>
    );
}

export default Machine;