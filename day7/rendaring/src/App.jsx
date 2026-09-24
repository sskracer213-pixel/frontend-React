
 
 const App = () => {
  const name = [
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"},
   { studentname:"santhosh",studentage:"21",studentnumber:"7695876434",studentcourse:"python fullstack"}

  ]
  

   return (<>
   
   <div className="bg-blue-200 p-10">
     {name.map((e,i)=>(<div key={i}>
       <h2>{e.studentname}</h2>
       <p>Age: {e.studentage}</p>
       <p>Number: {e.studentnumber}</p>
       <p>Course: {e.studentcourse}</p>
     </div>))}


   </div>
   
   
   
   
   
   
   
   
    </>)};

 
 export default App;


