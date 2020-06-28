import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} validate={[required]} placeholder={"Email"} type="text" component={Input}/>
            </div>
            <div>
                <Field name={"password"} validate={[required]} placeholder={"Password"} type="password"
                       component={Input}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={'checkbox'} component={Input}/> Remember me
            </div>
            {props.error
                ? <div className={"form-summary-error"}>
                    {props.error}
                </div>
                : ""}
            <div>
                <button className={'button small primary'}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm(
    {
        form: 'login'
    }
)(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login: loginThunkCreator})(Login);
