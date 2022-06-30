import React, {Component} from 'react';

class FormInput extends Component <any,any>{
    constructor(props:any) {
        super(props);

        this.state ={ username : "", password:"", email:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e:any){
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e:any){
        e.preventDefault();
        alert(`You typed: ${[e.target.name]}`)
        this.setState({[e.target.value]:""});
    }
    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text"    name="username"   value={this.state.username} onChange={this.handleChange} />
                    <input type="email"     name="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password"  name="password" value={this.state.password} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </>
        );
    }
}

export default FormInput;