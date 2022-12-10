import React, { useEffect } from "react";
import Disclaimer from "../components/public/Disclaimer";
import AppBar from "../components/ACS/AppBar";
import Drawer from "../components/ACS/Drawer";
import Map from "../components/ACS/Map";
import SketchWidgetPaperPie from "../components/public/SketchWidgetPaperPie";
import Info from "../components/public/Info";
import { useDispatch } from "react-redux";
import {
  changeCategory,
  changeSurvey,
  updateDrawer,
  updateLayer,
} from "../redux/actions";

const ACS = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCategory("population"));
    dispatch(changeSurvey("ACS"));
    dispatch(updateLayer("tracts"));
    return () => {
      dispatch(updateLayer(null));
      dispatch(updateDrawer(false));
    };
  }, []);
  return (
    <div>
      {console.log(props.mapState)}
      <Disclaimer>
        All data are retrieved from the 2017-2021 American Community Survey
        (ACS) tables provided by the U.S. Census Bureau. <br />
        For data definitions, please visit{" "}
        <a href="https://www.census.gov/glossary">Census Glossary</a>.
        <br />
        For original tables, please visit{" "}
        <a href="https://data.census.gov">Explore Census Data</a>.
      </Disclaimer>
      <Info>
        The U.S. Census conducts the American Community Survey (ACS) every year,
        surveying a sample of 2.5 percent of households in the United States.
        The ACS asks a larger set of questions than the decennial census,
        including questions about education, income, and employment. The ACS
        questionnaires can be found here:{" "}
        <a href="https://www.census.gov/programs-surveys/acs/about/forms-and-instructions.html">
          ACS Survey Questions.{" "}
        </a>
        Additional information about the ACS can be found here:{" "}
        <a href="https://www.census.gov/programs-surveys/acs/about.html">
          About the ACS
        </a>
        .
        <br />
        <br />
        Because the ACS is a sample survey, annual data are only released for
        larger geographic areas. Data for smaller geographies such as census
        tracts are pooled into 5-year samples to increase the sample size.
        However, please note that, as a sample survey, the ACS produces
        estimates with significant margins of error, especially at small
        geographies or for small populations.
        <br />
        <br />
        The MyCensus Viewer map is based on the most recent available 5-year ACS
        data. All data are retrieved from the American Community Survey (ACS)
        tables. For data definitions, please visit{" "}
        <a href="https://www.census.gov/glossary">Census Glossary</a>. For
        original tables, please visit{" "}
        <a href="https://data.census.gov">Explore Census Data</a>. Census tracts
        are statistical areas defined by Census. The census tract boundaries in
        this map were defined at the time of the 2020 Decennial Census. Census
        tract boundaries are drawn by the Census Bureau and have a population
        size between 1,200 to 8,000, with an optimal population of 4,000. For
        more information, please visit{" "}
        <a href="https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_13">
          Glossary on census.gov
        </a>
        .
        <br />
        <br />
        Boston neighborhoods are not recognized by the U.S. Census and the
        Census does not report data by neighborhood. Therefore, the BPDA uses
        census tracts to approximate Boston neighborhoods as shown in this map:{" "}
        <a href="https://bpda.box.com/s/hkodl53x67qua9rbz8lo83y6ocm2lfgc">
          2020 Census Tracts and Neighborhoods.
        </a>
        <br />
        <br />
        <a
          target="_blank"
          href="http://www.bostonplans.org/research/research-inquiries"
        >
          Contact Us
        </a>
      </Info>
      <AppBar />
      <Drawer />
      <Map
      //tractURL='https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Census_2010_Tracts/FeatureServer/0'
      //tractID='TRACTCE10'
      />
      <SketchWidgetPaperPie />
    </div>
  );
};

export default ACS;
