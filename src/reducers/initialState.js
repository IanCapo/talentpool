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
    },
    {
      name: 'Max',
      location: 'hamburg',
      status: 'available',
      skills: ['css', 'Media Queries', 'css:grid'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Christian',
      location: 'hamburg',
      status: 'available',
      skills: ['javascript', 'html', 'scrum', 'kanban'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Hans',
      location: 'hamburg',
      status: 'not available',
      skills: ['html', 'javascript', 'Sketch', 'node.js'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Janna',
      location: 'hamburg',
      status: 'available',
      skills: ['css', 'javascript', 'node.js'],
      photo: testphoto,
      id: uid(),
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
}
