import Card from "@/elements/Card";

export default function ProjectsPage({ projects }) {
  return (
    <section className="my-8">
      <h2
        className="text-2xl py-2 font-bold text-center"
        id="OpenSourceProjects"
      >
        - OpenSource Projects -
      </h2>
      <p className="text-center text-sm font-bold text-red-300">
        The live page may not open for you if you live in Iran please Turn On
        Your VPN
      </p>
      <div className="mx-1 mt-10 flex justify-around flex-wrap items-center">
        {projects?.map((project, id) => (
          <Card
            key={id}
            img={project.img}
            link={project.link}
            title={project.title}
            tecnologhy={project.tecnologhy}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

// [
//     {
//       link: {
//         live: 'https://todo-list-nextjs-two.vercel.app/',
//         code: 'https://github.com/Mahdi-Falahati/todo-list-nextjs'
//       },
//       _id: new ObjectId('670c1dcbc8fa250977ddf17a'),
//       title: 'NextJS TodoList',
//       description: 'A Todo List application using next js & The todo items were stored using Redux & For the user interface, the Material-UI (Mui) framework was incorporated and have dark mode  etc...',
//       tecnologhy: [ 'NextJS', 'Mui', 'Redux', 'Redux-Toolkit', 'uuid', 'dayjs' ],
//       __v: 0
//     },
//     {
//       link: {
//         live: 'https://restcountries-mahdifalahati.vercel.app/',
//         code: 'https://github.com/Mahdi-Falahati/rest-countries-dom-project'
//       },
//       _id: new ObjectId('670c1e10c8fa250977ddf17e'),
//       title: 'Rest Countries',
//       description: 'Get data from api with axios and this web application using React and styled component with React Bootstrap with dark mode & live search with filter',
//       tecnologhy: [ 'HTML5', 'CSS3', 'React-Bootstrap', 'ReactJS', 'Axios', 'Ajax' ],
//       __v: 0
//     },
//     {
//       link: { code: 'https://github.com/Mahdi-Falahati/use-https' },
//       _id: new ObjectId('670c1e2bc8fa250977ddf180'),
//       title: 'useHttps',
//       description: 'use-https is a react-js custom component for Request https',
//       tecnologhy: [ 'ReactJS' ],
//       __v: 0
//     },
//     {
//       link: {
//         live: 'https://aps-mahdi-falahati-tv.netlify.app/',
//         code: 'https://github.com/Mahdi-Falahati/tv-show-dom-project'
//       },
//       _id: new ObjectId('670c1e42c8fa250977ddf182'),
//       title: 'TV Show',
//       description: 'Get data from tvMaze api and show to page with live search and order by select sesion',
//       tecnologhy: [ 'HTML5', 'CSS3', 'JS', 'Ajax' ],
//       __v: 0
//     },
//     {
//       link: { code: 'https://github.com/Mahdi-Falahati/class-room-project-3' },
//       _id: new ObjectId('670c1ea0c8fa250977ddf184'),
//       title: 'Class Room',
//       description: 'A classRoom ecosystem full stack JS ( MERN => Mogodb / ExpressJS / ReactJS / NodeJS) app and a group project with my friend',
//       tecnologhy: [
//         'React',
//         'Mui',
//         'Redux',
//         'Redux-Toolkit',
//         'Axios',
//         'React-Router-Dom',
//         'NodeJS',
//         'ExpressJS',
//         'Mongoose',
//         'NodeMoon'
//       ],
//       __v: 0
//     },
//     {
//       link: {
//         live: 'https://falahati-real-state-agency.vercel.app/',
//         code: 'https://github.com/Mahdi-Falahati/real-state-agency'
//       },
//       _id: new ObjectId('670c20f0c8fa250977ddf186'),
//       title: 'Real State Agency',
//       description: 'A Real State Agency ecosystem full stack JS ( Mogodb / NextJS / ReactJS ) app. The project is a comprehensive real estate website designed to connect buyers, sellers, and agents in an efficient online marketplace. It offers a wide range of properties including residential, commercial, and rental listings. What sets this platform apart is its user authentication feature, ensuring that only verified users can post listings and interact on the site.',
//       tecnologhy: [
//         'React',
//         'TailwindCSS',
//         'NextJS',
//         'Next-auth',
//         'Mongoose',
//         'react-copy-to-clipboard',
//         'react-multi-date-picker',
//         'react-spinners',
//         'react-toastify',
//         'bcryptJS'
//       ],
//       __v: 0
//     }
//   ]
