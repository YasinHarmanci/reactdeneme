import React, {Component} from 'react';
import zxcvbn from "zxcvbn-typescript";


 const Ps = ({passwords}:{passwords:any}) =>{

     const testResult = zxcvbn(passwords);
     const num = testResult.score * 100/4;
     const createPassLabel = () => {
         switch (testResult.score){
             case 0:
                 return 'Very weak';
             case 1:
                 return 'Weak';
             case 2:
                 return '#Fear';
             case 3:
                 return 'Good';
             case 4:
                 return 'Strong';
             default:
                 return 'none';
         }
     }
     const funcProgressColor = () =>{
         switch (testResult.score){
             case 0:
                 return '#828282';
             case 1:
                 return '#EA1111';
             case 2:
                 return '#FFAD00';
             case 3:
                 return '#9b1158';
             case 4:
                 return '#00B500';
             default:
                 return 'none';
         }
     }

     const changePasswordColor = () =>({
         width: `${num}%`,
         background:funcProgressColor(),
         height:'7px'
     })


        return (
            <div>
                <div className="progress mt-10" style={{height:'7'}}>
                    <div className="progress-bar" style={changePasswordColor()}/>
                </div>
                <p>{createPassLabel()}</p>
                <p>Şifre en az 7 karakter içermelidir</p>
            </div>
        );

}

export default Ps;