import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ContentCard from "../layouts/ContentCard";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import { clearData, updateSelected } from "../redux/actions";
import style from "./Home.css";

const Home = (props) => {
  const [openNew] = useState(window.innerWidth < 850 ? true : false);

  useEffect(() => {
    props.dispatch(clearData());
    props.dispatch(updateSelected([]));
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className={style.container}>
        <div className={style.context}>
          <div className={style.title}>Welcome to MyCensus Viewer</div>
          <div className={style.header}>
            MyCensus Viewer is an interactive map product that visualizes U.S.
            Census data for Boston. It includes two maps built upon separate
            U.S. Census survey datasets: the 2020 Decennial Census and the
            American Community Survey (ACS).
          </div>
        </div>

        <div className={style.backgroundImage}></div>

        <div className={style.cardsContainer}>
          <ContentCard
            title="2017-2021 ACS 5-Year Estimate Map"
            buttonText="Click to View"
            link="/acs"
            newTab={openNew}
          >
            <div>
              The U.S. Census conducts the American Community Survey (ACS) every
              year, surveying a sample of households in the United States. The
              ACS asks a larger set of questions than the decennial census,
              including questions about education, income, and employment.
            </div>
          </ContentCard>
          <ContentCard
            title="2020 Decennial Census (Redistricting Data) Map"
            buttonText="Click to View"
            link="/census2020"
            newTab={openNew}
          >
            <div>
              The U.S. Census conducts the decennial census every ten years on
              April 1st to count all residents in the United States and ask a
              short set of additional questions, such as age, sex, race,
              Hispanic origin, and owner/renter status.
            </div>
          </ContentCard>
        </div>
        <div className={style.note}>
          MyCensus Viewer is developed by the BPDA Research Division and Office
          of Digital Cartography and GIS. For further information, please go to{" "}
          <a href="http://www.bostonplans.org/research/research-inquiries">
            http://www.bostonplans.org/research/research-inquiries
          </a>
          .
        </div>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  mapState: state.map,
  generalState: state.general,
});

export default connect(mapStateToProps)(Home);
