const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
};

const Part = (props) => { 
  console.log(props)
return (
  <div>

  <p>{props.part1} {props.exercises1} </p>
  <p>{props.part2} {props.exercises2} </p>
  <p>{props.part3} {props.exercises3} </p>
  </div>
)

}




const Content = (props) => {
  console.log(props)
return (
  <>
  <Part part1={props.part1} exercises1={props.exercises1} />
  <Part part2={props.part2} exercises2={props.exercises2} />
  <Part part3={props.part3} exercises3={props.exercises3} />
  </>
)

};


const Total = (props) => {
  console.log(props)
  return (
    
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
};



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course.name}></Header>
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}
      part2={course.parts[1].name} exercises2={course.parts[1].exercises}
      part3={course.parts[2].name} exercises3={course.parts[2].exercises} />

      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />


      
    </div>
  )
}

export default App