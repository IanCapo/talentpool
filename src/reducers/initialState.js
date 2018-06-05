import testphoto from '../images/foto.jpg'

export default {
  users: [
    {
      name: 'Fabian',
      location: 'hamburg',
      status: ' not available',
      skills: ['html', 'css', 'javascript'],
      photo: testphoto,
    },
    {
      name: 'Max',
      location: 'hamburg',
      status: 'available',
      skills: ['html', 'css', 'React'],
      photo: testphoto,
    },
    {
      name: 'Christan',
      location: 'hamburg',
      status: 'available',
      skills: ['html', 'css', 'javascript'],
      photo: testphoto,
    },
    {
      name: 'Hans',
      location: 'hamburg',
      status: 'not available',
      skills: ['html', 'javascript', 'Sketch'],
      photo: testphoto,
    },
    {
      name: 'Janna',
      location: 'hamburg',
      status: 'available',
      skills: ['html', 'css', 'javascript'],
      photo: testphoto,
    },
  ],
  filter: [{ option: 'html' }, { option: 'css' }, { option: 'javascript' }],
  dropdownOpen: false,
  selectedFilter: null,
}
