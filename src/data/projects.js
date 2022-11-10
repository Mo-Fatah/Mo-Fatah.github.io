// TODO Add a couple lines about each project
const data = [
  {
    title: 'Peer 2 Peer File Transfer',
    subtitle: 'Tranfereing data freely between Peers accross the internet without third parties',
    link: 'https://github.com/Mo-Fatah/p2p-ft',
    image: '/images/projects/p2p.jpg',
    date: '2022-10-11',
    desc:
          'A Rust command line tool to send any file between any two computers on the internet without the need of them to have public static IP addresses, '
          + 'and without the need of any platform that either limits the file size or imposes fees on its users. '
        + 'The project is mainly for devices that are behind NAT networks like most of todays computers. But of courese it can be used between publicly accessable computers.',
  },
  {
    title: 'Guide Me',
    subtitle: 'Services Review App',
    link: 'https://github.com/Mo-Fatah/GuideMe',
    image: '/images/projects/rest.jpeg',
    date: '2021-12-10',
    desc:
        'Restaurant reviews CRUD Web Application using Express.js, REST API, MongoDB(mongoose), React.js, React-Router, MaterialUI'
        + 'and User Authentication that help users to find best restaurants in a specific location sorted by other’s ratings with reviews for each '
        + 'restaurant. Using Postman for API testing, Jest for Backend testing and Cypress for End-to-End testing (still working on Cypress).',
  },
  {
    title: 'TCP in Rust',
    subtitle: 'TCP implementation in Rust',
    link: 'https://github.com/Mo-Fatah/tcp-rust',
    image: '/images/projects/tcp.png',
    date: '2022-3-9',
    desc:
        'A TCP implementation in Rust in compliance with RFC:793 using a tun-tap virtual network interface. The initial connection cycle is '
        + 'done starting from SYN/ACK handshake until tearing down the connection with FIN. This is a very ambitious and challenging project '
        + ' for me and it is still under development.',
  },
];

export default data;
