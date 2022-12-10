import React from 'react';
import Disclaimer from '../components/public/Disclaimer';
import DecennialAppbar from '../components/decennial2020/DecennialAppbar';
import SketchWidgetPaperPie from '../components/public/SketchWidgetPaperPie';
import Info from '../components/public/Info';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeCategory,
  changeSurvey,
  updateDrawer,
  updateLayer,
} from '../redux/actions';
import Map from '../components/decennial2020/Map2020';
import Drawer2020 from '../components/decennial2020/Drawer2020';

const Census2020 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCategory('Population by Race/Ethnicity'));
    dispatch(changeSurvey('2020'));
    dispatch(updateLayer('blockgroups'));
    return () => {
      dispatch(updateLayer(null));
      dispatch(updateDrawer(false));
    };
  }, []);
  return (
    <div>
      <Disclaimer>
        All data are retrieved from the 2020 Census Redistricting Data (Public
        Law 94-171) Summary File provided by the U.S. Census Bureau.
        <br />
        For data definitions, please visit{' '}
        <a href='https://www.census.gov/glossary'>Census Glossary</a>.
        <br />
        For Boston-specific data tables, please visit{' '}
        <a href='https://data.boston.gov/dataset/2020-census-for-boston'>
          2020 Census for Boston
        </a>
        .
      </Disclaimer>
      <Info>
        The U.S. Census Bureau conducts the decennial census every ten years to
        provide an official count of the entire U.S. population to Congress for
        apportionment of taxes and representation in the House of
        Representatives. The 2020 Decennial Census is the latest Decennial
        Census that counted residents in the United States on April 1st, 2020
        and asked a short set of additional questions, such as age, sex, race,
        Hispanic origin, and owner/renter status. The 2020 Decennial Census
        questionnaire can be found here:{' '}
        <a href='https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/questionnaires-and-instructions/questionnaires/2020-informational-questionnaire-english_DI-Q1.pdf'>
          2020 Decennial Census Survey Questions
        </a>
        . More details of the 2020 Decennial Census can be found here:{' '}
        <a href='https://www.census.gov/programs-surveys/decennial-census/decade/2020/about.html'>
          About the 2020 Census
        </a>
        .
        <br />
        <br />
        All data in this map are drawn from the 2020 Census Redistricting Data
        (Public Law 94-171) Summary File, the first limited data release for the
        2020 Decennial Census. For a complete official file documentation,
        please go to{' '}
        <a href='https://www2.census.gov/programs-surveys/decennial/2020/technical-documentation/complete-tech-docs/summary-file/2020Census_PL94_171Redistricting_StatesTechDoc_English.pdf'>
          2020 Census State Redistricting Data (Public Law 94-171) Summary File
          Technical Documentation
        </a>
        . For Boston data tables, please visit{' '}
        <a href='https://data.boston.gov/dataset/2020-census-for-boston'>
          2020 Census for Boston
        </a>
        . Full 2020 Census data are not scheduled to be released until 2022.
        <br />
        <br />
        Census block groups are statistical areas defined by Census. Census
        block group boundaries are drawn by the Census Bureau and have a
        population size between 600 to 3,000. For more information, please visit{' '}
        <a href='https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_4'>
          Glossary on census.gov
        </a>
        . The census block group boundaries in this map are defined in the 2020
        Decennial Census Redistricting (P.L. 94-171) Data Program:{' '}
        <a href='https://data.boston.gov/dataset/census-2020-block-groups'>
          2020 Census block group boundary shapefiles for Boston
        </a>
        .
        <br />
        <br />
        Boston neighborhoods are not recognized by the U.S. Census Bureau and
        the Census Bureau does not report data by neighborhood. In 2021, the
        BPDA used block groups defined in the 2020 Decennial Census to
        approximate Boston neighborhoods:{' '}
        <a href='https://data.boston.gov/dataset/census-2020-block-group-neighborhoods'>
          2020 Census Block Group Neighborhood Boundaries
        </a>
        .
        <br />
        <br />
        <a
          target='_blank'
          href='http://www.bostonplans.org/research/research-inquiries'
        >
          Contact Us
        </a>
      </Info>
      <DecennialAppbar />
      <Drawer2020 />
      <Map />
      <SketchWidgetPaperPie />
    </div>
  );
};

export default Census2020;
