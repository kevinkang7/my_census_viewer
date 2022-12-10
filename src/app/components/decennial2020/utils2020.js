export const generatePopulationDataFor2020Neighborhood = (attributes) => {
  const data = [
    [
      'Non-Hisp. White alone',
      attributes.white_all,
      attributes.white_18plus,
      attributes.white_0_17,
    ],
    [
      'Non-Hisp. Black or African American alone',
      attributes.black_all,
      attributes.black_18plus,
      attributes.black_0_17,
    ],
    [
      'Hispanic or Latino',
      attributes.hisp_all,
      attributes.hisp_18plus,
      attributes.hisp_0_17,
    ],
    [
      'Non-Hisp. Asian, Native Hawaiian and Pacific Islander alone',
      attributes.aapi_all,
      attributes.aapi_18plus,
      attributes.aapi_0_17,
    ],
    [
      'Non-Hisp. American Indian and Alaska Native alone',
      attributes.aian_all,
      attributes.aian_18plus,
      attributes.aian_0_17,
    ],
    [
      'Non-Hisp. Some Other Race alone',
      attributes.other_all,
      attributes.other_18plus,
      attributes.other_0_17,
    ],
    [
      'Non-Hisp. Two or More Races',
      attributes.two_or_more_all,
      attributes.two_or_more_18plus,
      attributes.two_or_more_0_17,
    ],
    [
      'Total',
      attributes.tot_pop_all,
      attributes.tot_pop_18plus,
      attributes.tot_pop_0_17,
    ],
  ];
  return {
    data: [
      {
        title: 'Population by Race/Ethnicity',
        data: data,
        chartData1: data.map((item) => {
          return item.slice(0, 2);
        }),
        chartData2: [
          ['Adult Population (Age 18 and Over)', data[7][2]],
          ['Child Population (Under Age 18)', data[7][3]],
        ],
        chartData3: data.map((item) =>
          item.filter((element, index) => index !== 1)
        ),
        csv: process2020NeighborhoodCsvData(
          attributes.blockgr2020_ctr_neighb_name,
          data,
          [
            '',
            'Total Population',
            'Adult Population (Age 18 and Over)',
            'Child Population (Under Age 18)',
          ]
        ),
        header: [
          '',
          'Total Population',
          'Adult Population (Age 18 and Over)',
          'Child Population (Under Age 18)',
        ],
        yCategory: [
          'Adult Population (Age 18 and Over)',
          'Child Population (Under Age 18)',
        ],
        tableID: 'P2, P4',
        universe: 'Total population',
      },
    ],
  };
};

export const generateGroupQuarterDataFor2020Neighborhood = (attributes) => {
  const data = [
    ['Correctional facilities for adults', attributes.correctional],
    ['Juvenile facilities', attributes.juvenile],
    ['Nursing facilities/Skilled-nursing facilities', attributes.nursing],
    ['Other institutional facilities', attributes.other_inst],
    ['College/University student housing', attributes.college],
    ['Military quarters', attributes.military],
    ['Other noninstitutional facilities', attributes.other_noninst],
    ['Total', attributes.tot_gq_pop],
  ];
  return {
    data: [
      {
        title: 'Group Quarter Population',
        data: data,
        csv: process2020NeighborhoodCsvData(
          attributes.blockgr2020_ctr_neighb_name,
          data,
          ['', 'Population']
        ),
        header: ['', 'Population'],
        yCategory: ['Population'],
        tableID: 'P5',
        universe: 'Population in group quarters',
      },
    ],
  };
};

export const generateHousingDataFor2020Neighborhood = (attributes) => {
  const data = [
    ['Occupied', attributes.occ_unit],
    ['Vacant', attributes.vacant_unit],
    ['Total', attributes.tot_unit],
  ];
  return {
    data: [
      {
        title: 'Housing',
        data: data,
        csv: process2020NeighborhoodCsvData(
          attributes.blockgr2020_ctr_neighb_name,
          data,
          ['', 'Count']
        ),
        header: ['', 'Count'],
        tableID: 'H1',
        universe: 'Housing units',
      },
    ],
  };
};

const process2020NeighborhoodCsvData = (neighborhood, data, header) => {
  const len = header.length - 1;
  let neighborhoodHeader = ['Neighborhood', neighborhood];
  for (let i = 0; i < len - 1; i++) {
    neighborhoodHeader.push('');
  }
  let neighborhoodData = [];
  for (const item of data) {
    neighborhoodData.push(item.slice());
  }

  neighborhoodData.splice(0, 0, header.slice());
  neighborhoodData.splice(0, 0, neighborhoodHeader);

  console.log(neighborhoodData);

  return neighborhoodData;
};
