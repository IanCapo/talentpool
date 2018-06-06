import testphoto from '../images/foto.jpg'
import uid from 'uid'

export default {
  users: [
    {
      name: 'Fabian',
      location: 'hamburg',
      status: 'not available',
      skills: ['html'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Max',
      location: 'hamburg',
      status: 'available',
      skills: ['css'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Christan',
      location: 'hamburg',
      status: 'available',
      skills: ['javascript'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Hans',
      location: 'hamburg',
      status: 'not available',
      skills: ['html', 'javascript', 'Sketch'],
      photo: testphoto,
      id: uid(),
    },
    {
      name: 'Janna',
      location: 'hamburg',
      status: 'available',
      skills: ['html', 'css', 'javascript'],
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
