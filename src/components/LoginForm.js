import * as React from 'react';
import { withFormik, Field } from 'formik';

type Props = {
  onSubmit: func
};

const renderInput = ({field, form: { touched, errors }, ...props}) =>
    <div>
      <input {...field.input} {...field} {...props} className="form-control" />
      {
        touched[field.name] &&
        errors[field.name] &&
        <span className="help-block">{field.meta.error}</span>
      }
    </div>;

class LoginForm extends React.Component<Props> {
  render() {
    let { isSubmitting, handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit}>
          <legend>Login</legend>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <Field
                name="username"
                component={renderInput}
                type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <Field
                name="password"
                component={renderInput}
                type="password"/>
          </div>
          {isSubmitting ?
              <button className="btn btn-primary" type="submit" disabled>Loading...</button> :
              <button className="btn btn-primary" type="submit">Login</button>}
        </form>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  }
})(LoginForm);
