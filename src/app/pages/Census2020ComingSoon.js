import React from 'react';
import NavBar from '../layouts/NavBar';
import style from './Census2020.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Census2020 = () => {
  return (
    <div>
      <NavBar>
        <Link to='/' className={style.link}>
          <Button color='inherit'>Home</Button>
        </Link>
        <a
          href='https://bostonredevelopmentauthorityresearch.zendesk.com/hc/en-us/requests/new?ticket_form_id=15579'
          className={style.link}
        >
          <Button color='inherit'>Contact US</Button>
        </a>
      </NavBar>
      <div className={style.container}>
        <p className={style.title}>2020 Decennial Census</p>
        <p className={style.subtitle}>Map Coming October 2021</p>
        <p className={style.content}>
          The U.S. Census conducts the decennial census every ten years to
          provide an official count of the entire U.S. population to Congress
          for apportionment of taxes and representation in the House of
          Representatives. The Census counted residents in the United States on
          April 1st, 2020 and asked a short set of additional questions, such as
          age, sex, race, Hispanic origin, and owner/renter status. The first
          limited data release for the 2020 Census (the Redistricting Data
          Summary File) is scheduled for August 12th, 2021. Check{' '}
          <a href='http://www.bostonplans.org/research/research-publications'>
            http://www.bostonplans.org/research/research-publications
          </a>{' '}
          for initial reports of these redistricting data. The data needed for
          the MyCensus Viewer map will be released on September 30th, 2021, and
          this map will be available in early October. Full 2020 Census data are
          not scheduled to be released until 2022.
          <br />
          The 2020 Decennial Census questionnaire can be found here:{' '}
          <a href='https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/questionnaires-and-instructions/questionnaires/2020-informational-questionnaire-english_DI-Q1.pdf'>
            2020 Decennial Census Survey Questions
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Census2020;
