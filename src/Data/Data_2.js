import image_first from "../assets/image_first.png"
import image_second from "../assets/photo3.png"
import image_third from "../assets/photo5.png"





const projects = [
    {
      title: 'CONFERENCE-ZONE',
      description: 'A responsive React conference website with smooth animations, multi-page navigation, and speaker/schedule details.',
      technologies: ['React-Js', 'CSS3','Framer-Motion'],
      image: image_first,
      link:"https://conferencezone.netlify.app/"
    },
    {
      title: 'POKEMON-GALLERY',
      description: 'A React-based Pokédex app that allows searching, filtering Pokémon by type, displaying details, with a loading animation.',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: image_second,
      link:"https://pokedas.netlify.app/"
    },
    {
      title: 'GAMEO',
      description: 'A React-based website which contains different products related to gaming & accessories.',
      technologies: ['React','CSS3','Framer Motion'],
      image: image_third,
      link:"https://gamno.netlify.app/"
    }
  ]
  export default projects;