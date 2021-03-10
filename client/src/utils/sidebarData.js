import * as FaIcon from 'react-icons/fa';
import * as CgIcon from 'react-icons/cg';
import * as GiIcon from 'react-icons/gi';
import * as AiIcon from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';

const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcon.FaHome />,
  },
  {
    title: 'First',
    path: '/first',
    icon: <CgIcon.CgPokemon />,
  },
  {
    title: 'Second',
    path: '/second',
    icon: <FaIcon.FaFire />,
  },
  {
    title: 'Third',
    path: '/third',
    icon: <GiIcon.GiHighGrass />,
  },
  {
    title: 'Fourth',
    path: '/fourth',
    icon: <BsIcon.BsLightning />,
  },
  {
    title: 'Fifth',
    path: '/fifth',
    icon: <GiIcon.GiPokecog />,
  },
  {
    title: 'Sixth',
    path: '/sixth',
    icon: <GiIcon.GiWaterDrop />,
  },
  {
    title: 'Seventh',
    path: '/seventh',
    icon: <AiIcon.AiFillBug />,
  },
  {
    title: 'Eighth',
    path: '/eighth',
    icon: <GiIcon.GiMuscleUp />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcon.FaInfoCircle />,
  },
];

export default sidebarData;
