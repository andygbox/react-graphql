// https://launchpad.graphql.com/vm8mjvrnv3

// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    allCourses: [Course]
    course(id: Int!): Course
  },
  type Course {
      id: Int
      title: String
      author: String
      description: String
      topic: String
      url: String
      price: String
  }
`;

var coursesData = [
    {
        id: 1,
        title: 'Angular 6 (formerly Angular 2) - The Complete Guide',
        author: 'Maximilian Schwarzmuller',
        description: 'Master Angular (Angular 2+, incl. Angular 6) and build awesome, reactive web apps with the successor of Angular.js',
        topic: 'Angular',
        url: 'https://www.udemy.com/the-complete-guide-to-angular-2/',
        price: '189.99'
    },
    {
        id: 2,
        title: 'GraphQL with React: The Complete Developers Guide',
        author: 'Stephen Grider',
        description: 'Learn and master GraphQL by building real web apps with React and Node',
        topic: 'React',
        url: 'https://www.udemy.com/graphql-with-react-course/',
        price: '149.99'
    },
    {
        id: 3,
        title: 'The Complete Node.js Developer Course (2nd Edition)',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://www.udemy.com/the-complete-nodejs-developer-course-2/',
        price: '84.99'
    },
    {
        id: 4,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/',
        price: '149.99'
    },
    {
        id: 5,
        title: 'JavaScript: Understanding the Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://www.udemy.com/understand-javascript/',
        price: '174.99'
    },
    {
        id: 6,
        title: 'Beginner Full Stack Web Development: HTML, CSS, React & Node',
        author: 'Mark Price, Devslopes by Mark Price',
        description: 'Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node',
        topic: 'React, Node.js',
        url: 'https://www.udemy.com/ultimate-web/',
        price: '199.99'
    }
];
 
 var getCourse = function(root, {id}) { 
     return coursesData.filter(course => {
         return course.id === id;
     })[0];
 };
 
 var getAllCourses = function() {
   return coursesData;
 }
 
 // Provide resolver functions for your schema fields
 const resolvers = {
   Query: {
     allCourses: getAllCourses,
     course: getCourse,
   },
 };
 
 // Required: Export the GraphQL.js schema object as "schema"
 export const schema = makeExecutableSchema({
   typeDefs,
   resolvers,
 });