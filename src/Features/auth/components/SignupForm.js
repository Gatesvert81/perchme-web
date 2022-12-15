import React from 'react';
import { AnchorLink, Button, Fieldset } from '../../../Components';

function SignUpForm({ handleSubmit }) {
	return (
		<>
			<form
				className="flex flex-col items-center gap-3"
				onSubmit={handleSubmit}
			>
				<div className="w-full grid grid-cols-2 gap-2">
					<Fieldset
						type="text"
						placeholder="Sonu"
						required
						name="first_name"
					>
						First name
					</Fieldset>
					<Fieldset
						type="text"
						placeholder="Kumar"
						required
						name="last_name"
					>
						Last name
					</Fieldset>
				</div>
				<Fieldset
					type="tel"
					placeholder="98 7837 8917"
					name="phone"
					required
				>
					Telephone number
				</Fieldset>
				<Fieldset
					type="email"
					placeholder="name@company.com"
					name="email"
					required
				>
					Email address
				</Fieldset>
				<Fieldset
					type="password"
					placeholder="*********"
					name="password"
					required
				>
					Password
				</Fieldset>
				<Fieldset
					type="password"
					placeholder="*********"
					name="c_password"
					required
				>
					Confirm Password
				</Fieldset>
				<p>
					Already got an account?
					<AnchorLink route="/auth/signin">
						<span className="text-link"> Sign in here</span>
					</AnchorLink>
				</p>
				<Button style="primary-btn" type="submit">
					Sign up
				</Button>
			</form>
		</>
	);
}

export default SignUpForm;
