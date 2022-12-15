import React from 'react';
import { AnchorLink, Button, Fieldset } from '../../../Components';

function SignInForm({ handleSubmit }) {
	return (
		<>
			<form
				className="flex flex-col items-center gap-3"
				onSubmit={handleSubmit}>
				<Fieldset
					type="email"
					placeholder="name@company.com"
					name="email"
					required>
					Email address
				</Fieldset>
				<Fieldset
					type="password"
					placeholder="*********"
					name="password"
					required>
					Password
				</Fieldset>
				<p>
					Don&#39;t have an account?{' '}
					<AnchorLink route="/auth/signup">
						<span className="text-link">Sign up here</span>
					</AnchorLink>
				</p>
				<Button style="primary-btn" type="submit">
					login
				</Button>
			</form>
		</>
	);
}

export default SignInForm;
