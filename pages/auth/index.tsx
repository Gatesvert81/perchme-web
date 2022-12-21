import React, { useState } from 'react';
import { Button, Page, PageHead } from '../../src/Components';
import { SignInForm, SignUpForm } from '../../src/Features/auth/components';
import { HomeLayout } from '../../src/Layout';

function Authentication() {
  const [register, setRegister] = useState<boolean>(false);

  return (
    <Page style="min-h-screen pt-20 flex flex-col items-center">
      <PageHead title={register ? 'Sign Up' : 'Sign In'}>
        Get Registered
      </PageHead>
      {/* <main className="registration__pic">picture</main> */}
      <section className="max-w-xl m-auto flex flex-col ">
        {/* This Section Invokes the function that toggles the register  */}
        <div className="w-full flex flex-col">
          <div className="w-fit h-fit self-center flex justify-center items-center gap-5">
            <Button
              text="Sign In"
              type="button"
              click={() => setRegister(false)}
              select={register}
              style={'text-link text-lg'}
              name="sign__tab__btn sign__in__tab__select"
            />
            <Button
              style={'text-link text-lg'}
              click={() => setRegister(true)}
              name="sign__tab__btn sign__up__tab__select"
              select={register}
              text={'Sign Up'}
              type="button"
            />
          </div>
          {/* This section display the sign Up or SIgn In depending on the one toggled  */}
          <div className="registration__render">
            {register ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </section>
    </Page>
  );
}

Authentication.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Authentication;
