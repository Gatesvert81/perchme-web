import React from 'react';
import { AnchorLink, Button, Fieldset } from '../../../Components';

function SignUpForm() {
  return (
    <>
      <form className="flex flex-col items-center gap-3">
        <div className="w-full grid grid-cols-2 gap-2">
          <Fieldset
            type="text"
            placeholder="Sonu"
            required
            name="first_name"
            label="  First name"
          />
          <Fieldset
            type="text"
            placeholder="Kumar"
            required
            name="last_name"
            label="Last name"
          />
        </div>
        <Fieldset
          type="tel"
          placeholder="98 7837 8917"
          name="phone"
          label="Telephone number"
          required
        />
        <Fieldset
          type="email"
          placeholder="name@company.com"
          name="email"
          required
          label="Email address"
        />

        <Fieldset
          type="password"
          placeholder="*********"
          name="password"
          label="Password"
          required
        />

        <Fieldset
          type="password"
          placeholder="*********"
          name="c_password"
          label="Confirm Password"
          required
        />
        <p>
          Already got an account?
          <AnchorLink route="/auth/signin">
            <span className="text-link"> Sign in here</span>
          </AnchorLink>
        </p>
        <Button style="primary-btn" type="submit" text="Sign up" />
      </form>
    </>
  );
}

export default SignUpForm;
