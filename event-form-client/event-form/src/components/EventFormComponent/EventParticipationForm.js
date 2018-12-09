import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './EventParticipationForm.css';
import validate from './formValidation';
import warn from './formWarnings';

const renderField = ({ input, label, type,  meta: { touched, error, warning } }) => (
  <div>
    <label className="input-labels">{ label }</label>
    { touched && (error && <span className="validation-error">{ error }</span>) }
    { touched && (warning && <span className="warning">{ warning }</span>) }
    <div>
      <input { ...input } placeholder={ label } type={ type } className="input-element"/>
    </div>
  </div>
);

const EventForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} label="First name" required/>
      <Field name="lastName" type="text" component={renderField} label="Last name" required/>
      <Field name="email" type="email" component={renderField} label="Email" required/>
      <Field name="date" type="date" component={renderField} label="Date" required/>
      <div>
        <hr />
        <div className="buttons-container">
          <button type="submit" disabled={ submitting }>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className="button-outline">
            Clear Values
          </button>
          </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'eventForm',
  validate,
  warn
})(EventForm)