// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Go',
    competency: 5,
    category: ['System Programming', 'Languages'],
  },
  {
    title: 'Rust',
    competency: 5,
    category: ['System Programming', 'Languages'],
  },
  {
    title: 'C',
    competency: 1,
    category: ['System Programming', 'Languages'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Github Actions',
    competency: 4,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Numpy',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + CSS',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
