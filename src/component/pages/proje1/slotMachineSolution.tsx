import React, {Component} from 'react';
import Machine from "../../functions/Machine";
import Looping from "../../functions/looping";
import AddingDefaultProps from "../../functions/addingDefaultProps";
import {choice,remove} from "../../functions/helper";
import Rando from "../../functions/setState";
import CrashCourseOnclickEvent from "../../functions/CrashCourse-OnclickEvent";
import PasswordStrong from "../../functions/PasswordStrong";

const foods = [ 'yasin','cengiz','melek','kubra','hatice'];
let fruit = choice(foods);
let  remaining = remove(foods,fruit);


class SlotMachineSolution extends Component <any,any> {
    render() {
        return (
            <div>
                <Machine  slots={["X","Y","z"]}/>
                <Machine  slots={["X","X","X"]}/>
                <Looping name="" hobbies={["X","X","X"]}/>
                <AddingDefaultProps to="merhaba" from="asdasdsa" bangs={2} />
                <p> ı like one {fruit}, please</p>
                <p> ı like one {remaining}, please</p>
                <Rando maxNum={7} />
                <CrashCourseOnclickEvent/>
                <PasswordStrong/>
            </div>
        );
    }
}

export default SlotMachineSolution;