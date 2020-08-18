import React, { Component } from 'react';

import { reduxForm } from'redux-form';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sign in
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm