import "./App.css";
import CoursesTab from "./components/CoursesTab";

function App() {
  const data = [
    {
      id: 1,
      link: "https://www.udemy.com/course/pythonforbeginners/",
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "679.99",
      rating: 4.4,
      people: "2,948",
    },
    {
      id: 2,
      link: "https://www.udemy.com/course/learning-python-for-data-analysis-and-visualization/",
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "1,599.99",
      rating: 4.4,
      people: "17,999",
    },
    {
      id: 3,
      link: "https://www.udemy.com/course/python-for-beginners-learn-programming-from-scratch/",
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding FAcutly Solutaions",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "679.99",
      rating: 4.4,
      people: "1,781",
    },
    {
      id: 4,
      link: "https://www.udemy.com/course/learn-python/",
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      price: "319.99",
      rating: 4.3,
      people: "2,773",
    },
    {
      id: 5,
      link: "https://www.udemy.com/course/python-beyond-the-basics-object-oriented-programming/",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      price: "519.99",
      rating: 4.4,
      people: "2,930",
    },
  ];
  return (
    <div className="App">
      <CoursesTab data={data}></CoursesTab>
    </div>
  );
}
//id, title, author, image, price, rating, people

export default App;
