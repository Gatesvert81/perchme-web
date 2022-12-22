import { NextPage } from 'next';
import { ReactElement, useState } from 'react';
import { AnchorLink, Button, Image, Page, PageHead } from '../src/Components';
import { HomeLayout } from '../src/Layout';

export default function Home() {
  const [sectionSelect, setSectionSelect] = useState(true);
  return (
    <Page style="w-full h-full before:w-[80vw] before:h-full before:absolute relative before:top-0 before:left-0 before:bg-tetiary pt-20 ">
      <PageHead title="Perch Me">Earn money by getting a percher</PageHead>

      <main className="flex flex-col gap-10">
        <div className="w-full h-full flex flex-col gap-5">
          <div className="bg-white relative w-40 h-8 p-2 rounded-full shadow-md shadow-light-gray">
            <Button style="home__section__select" />
            <div className="w-full h-full flex justify-between ">
              <Button
                name="section__btn petch__btn"
                click={() => setSectionSelect(true)}
                children={'Petch'}
              />
              <Button
                name="host__btn section__btn"
                click={() => setSectionSelect(false)}
                children={'Host'}
              />
            </div>
          </div>
          <div className="w-full">
            {sectionSelect ? (
              <h4>
                Find halls and amazing <br /> roomies to Petch.
              </h4>
            ) : (
              <h4>
                Host your rooms <br /> get cool roomies.
              </h4>
            )}
          </div>
          <div className="w-full h-fit flex flex-col gap-3 bg-white p-2 rounded">
            <div className="w-full h-fit flex justify-between">
              {/* <div className="uni__search"> */}
              {/* <Input type='text' placeholder="University" className="uni__search__input" /> */}
              <select required>
                <option value="Univerity Of Ghana, Legon">
                  Univerity of Ghana, Legon
                </option>
                <option value="KNUST">KNUST</option>
                <option value="UCC">UCC</option>
                <option value="University of Winneba">
                  University of Winneba
                </option>
              </select>
              {/* </div> */}
              <AnchorLink route="/dorms">
                <Button style="primary-btn">Search</Button>
              </AnchorLink>
            </div>
            <div className="w-full h-fit flex justify-between gap-5">
              <div>
                In
                <input
                  type="date"
                  placeholder="Check In"
                  className="date__input"
                />
              </div>
              <div>
                Out
                <input
                  type="date"
                  placeholder="Check In"
                  className="date__input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home__main__image">
          <div className="w-full h-80">
            <Image src="/images/pic.jpg" boxStyle="w-full h-full" alt="dp" />
          </div>
        </div>
      </main>
    </Page>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
