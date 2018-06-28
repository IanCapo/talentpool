import uid from 'uid'

export default {
  users: [
    {
      skills: [
        'React',
        'Redux',
        'HTML',
        'JavaScript',
        'CSS',
        'Responsive Websites',
      ],
      history: [
        {
          jobtitle: 'Key Account Coordinator',
          startdate: '07/2016',
          enddate: '07/2018',
        },
        {
          jobtitle: 'Sales Demand Coordinator',
          startdate: '07/2015',
          enddate: '06/2016',
        },
        {
          jobtitle: 'Sales Assistant',
          startdate: '12/2011',
          enddate: '11/2012',
        },
      ],
      _id: '5b2ba0b467ea793bf47caa78',
      photo: '/static/media/foto.0e4a9e69.jpg',
      name: 'Fabian',
      lastname: 'Pasin',
      location: 'Hamburg',
      status: 'available',
      __v: 0,
    },
    {
      skills: [
        'CSS',
        'JavaScript',
        'React',
        'Media queries',
        'Responsive Websites',
      ],
      history: [
        { jobtitle: 'Consultant', startdate: '01/2008', enddate: '07/2018' },
        { jobtitle: 'Chef', startdate: '02/2002', enddate: '07/2009' },
      ],
      _id: '5b2bac2c5470393f8d45a8bc',
      photo: '/static/media/foto.0e4a9e69.jpg',
      name: 'Hans',
      lastname: 'Freyer',
      location: 'Hamburg',
      status: 'not available',
      __v: 0,
    },
    {
      skills: ['JavaScript', 'HTML', 'Sketch', 'UX-Design'],
      history: [
        {
          jobtitle: 'Account Manager',
          startdate: '08/2014',
          enddate: '02/2018',
        },
        { jobtitle: 'Student', startdate: '08/2011', enddate: '07/2014' },
      ],
      _id: '5b2cdaaed1c5e64a75ba796b',
      name: 'Alexa',
      lastname: 'Weber',
      location: 'Hamburg',
      status: 'available',
      photo: '/static/media/foto.0e4a9e69.jpg',
      __v: 0,
    },
    {
      skills: ['React', 'HTML', 'CSS', 'JQuery'],
      history: [
        { jobtitle: 'Intern', startdate: '08/2017', enddate: '03/2018' },
        { jobtitle: 'Student', startdate: '08/2014', enddate: '07/2017' },
      ],
      _id: '5b2cdb61d1c5e64a75ba796c',
      name: 'Janna',
      lastname: 'Gertz',
      location: 'Wedel',
      status: 'available',
      photo: '/static/media/foto.0e4a9e69.jpg',
      __v: 0,
    },
    {
      skills: ['React', 'Redux', 'Java', 'JQuery'],
      history: [
        { jobtitle: 'Manager', startdate: '08/2014', enddate: '03/2018' },
        { jobtitle: 'Student', startdate: '08/2011', enddate: '07/2014' },
        { jobtitle: 'Worker', startdate: '03/2008', enddate: '05/2011' },
      ],
      _id: '5b2cdc62d1c5e64a75ba796d',
      name: 'Philipp',
      lastname: 'Trentmann',
      location: 'Hamburg',
      status: 'not available',
      photo: '/static/media/foto.0e4a9e69.jpg',
      __v: 0,
    },
    {
      skills: ['CSS', 'Media Queries', 'CSS:GRID', 'CSS:Flexbox'],
      history: [
        { jobtitle: 'Chef', startdate: '01/2010', enddate: '03/2018' },
        {
          jobtitle: 'Orchard worker',
          startdate: '01/2009',
          enddate: '12/2009',
        },
      ],
      _id: '5b2cdcd5d1c5e64a75ba796e',
      name: 'Max',
      location: 'Hamburg',
      status: 'available',
      photo: '/static/media/foto.0e4a9e69.jpg',
      __v: 0,
    },
    {
      skills: [
        'ES6',
        'HTML',
        'SCRUM',
        'Media queries',
        'CSS',
        'CSS-Animations',
      ],
      history: [
        {
          jobtitle: 'Dental Technician',
          startdate: '07/2008',
          enddate: '02/2018',
        },
      ],
      _id: '5b2cdcecd1c5e64a75ba796f',
      name: 'Christian',
      lastname: 'Nielsen',
      location: 'Hamburg',
      status: 'not available',
      photo: '/static/media/foto.0e4a9e69.jpg',
      __v: 0,
    },
  ],
  filter: [
    { option: 'HTML', _id: uid() },
    { option: 'CSS', _id: uid() },
    { option: 'JavaScript', _id: uid() },
    { option: 'ES6', _id: uid() },
    { option: 'available', _id: uid() },
  ],
  isDropdownOpen: false,
  selectedFilter: 'all',
  selectedSection: 'Skills',
  skills: [],
}
