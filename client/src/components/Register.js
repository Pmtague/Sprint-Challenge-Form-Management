import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Register = ({ errors, touched, status }) => {
	const [users, setUsers] =useState([]);

	useEffect(() => {
		if(status) {
			setUsers([...users, status])
		}
	}, [status]);

	return (
		<div className='register-form'>
			<h1>Come Aboard!</h1>
			<Form>
				<label>
					Username
					<Field 
						type='text' 
						name='username' 
						placeholder='Jane Fonda' 
					/>
				</label>
				{touched.username && errors.username && 
				<p className="error">Choose a username.</p>}
				<label>
					Password
					<Field 
						type='text'
						name='password' 
						placeholder='Top secret ninja code' 
					/>
				</label>
				{touched.password && errors.password && 
				<p className="error">Choose a password.</p>}
				<button type="submit">Submit</button>
			</Form>
		</div>
	)
}

const FormikRegister = withFormik({
	mapPropsToValues(values) {
		return {
			username: values.username || '',
			password: values.password || '',
			users: []
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required(),
		password: Yup.string().required(),
	}),

	handleSubmit(values, { setStatus }) {
		console.log('Form submitted!' )
		axios 
			.post('http://localhost:5000/api/register', values)
			.then(res => {
				setStatus(res.data);
				console.log(res.data)
			})
			.catch(err => console.log(err.response));
	}
})(Register)

export default FormikRegister;