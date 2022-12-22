import React from 'react';
import { AnchorLink, Button, Fieldset } from '../../../Components';

function SignInForm() {
  // REVIEW: why there was an handleSubmit props here
  return (
    <>
      <form
        className="flex flex-col items-center gap-3"
        // onSubmit={handleSubmit}
      >
        <Fieldset
          type="email"
          placeholder="name@company.com"
          name="email"
          label="Email address"
          required
        />

        <Fieldset
          type="password"
          placeholder="*********"
          name="password"
          label="Password"
          required
        />
        <p>
          Don&#39;t have an account?{' '}
          <AnchorLink route="/auth/signup">
            <span className="text-link">Sign up here</span>
          </AnchorLink>
        </p>
        <Button style="primary-btn" type="submit" children="login" />
      </form>
    </>
  );
}

export default SignInForm;
