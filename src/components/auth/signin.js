import React, { Component } from 'react';

import { reduxForm } from'redux-form';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                sign in
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SignIN'
})(SignIn);

export default SignIn