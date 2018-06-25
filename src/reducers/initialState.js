import testphoto from '../images/foto.jpg'
import uid from 'uid'

export default {
  users: [
    {
      name: 'Fabian',
      lastname: 'Pasin',
      location: 'hamburg',
      status: 'not available',
      skills: [
        'html',
        'javascript',
        'css',
        'react',
        'redux',
        'Responsive Websites',
      ],
      photo: testphoto,
      id: uid(),
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
    },
    {
      name: 'Max',
      location: 'hamburg',
      status: 'available',
      skills: ['css', 'Media Queries', 'css:grid'],
      photo: testphoto,
      id: uid(),
      history: [
        { jobtitle: 'Gastronom', startdate: '01/2010', enddate: '03/2018' },
        {
          jobtitle: 'Orchard worker',
          startdate: '01/2009',
          enddate: '12/2009',
        },
      ],
    },
    {
      name: 'Christian',
      location: 'hamburg',
      status: 'available',
      skills: ['javascript', 'html', 'scrum', 'kanban'],
      photo: testphoto,
      id: uid(),
      history: [
        { jobtitle: 'Zahntechniker', startdate: '07/2008', enddate: '02/2018' },
      ],
    },
    {
      name: 'Hans',
      location: 'hamburg',
      status: 'not available',
      skills: ['html', 'javascript', 'Sketch', 'node.js'],
      photo: testphoto,
      id: uid(),
      history: [
        { jobtitle: 'Finanzberater', startdate: '02/2002', enddate: 'laufend' },
        { jobtitle: 'Koch', startdate: '02/2000', enddate: '01/2002' },
      ],
    },
    {
      name: 'Janna',
      location: 'hamburg',
      status: 'available',
      skills: ['css', 'javascript', 'node.js'],
      photo: testphoto,
      id: uid(),
      history: [
        { jobtitle: 'Intern PR', startdate: '07/2017', enddate: '03/2018' },
        {
          jobtitle: 'Student Kulturwissenschaften',
          startdate: '10/2014',
          enddate: '07/2017',
        },
      ],
    },
  ],
  filter: [
    { option: 'html', id: uid() },
    { option: 'css', id: uid() },
    { option: 'javascript', id: uid() },
    { option: 'available', id: uid() },
  ],
  isDropdownOpen: false,
  selectedFilter: 'all',
  selectedSection: 'History',

  skills: [],
}
