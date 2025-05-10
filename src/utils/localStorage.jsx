const employees = [
     {
       id: 1,
       firstName: "Raj",
       email: "employee1@example.com",
       password: "123",
       tasks: [
         {
           title: "Design login page",
           description: "Create a responsive login page for the app",
           date: "2025-05-10",
           category: "design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           title: "Update README",
           description: "Add instructions to README file",
           date: "2025-05-11",
           category: "documentation",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Fix bug in signup",
           description: "Resolve form validation error in signup page",
           date: "2025-05-12",
           category: "dev",
           active: false,
           newTask: false,
           completed: false,
           failed: true
         }
       ],
       taskCounts: {
         active: 1,
         newTask: 1,
         completed: 1,
         failed: 1
       }
     },
     {
       id: 2,
       firstName: "Anita",
       email: "employee2@example.com",
       password: "123",
       tasks: [
         {
           title: "Create dashboard layout",
           description: "Layout basic components of the admin dashboard",
           date: "2025-05-09",
           category: "design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           title: "Integrate chart library",
           description: "Use Chart.js to show analytics",
           date: "2025-05-10",
           category: "dev",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Write unit tests",
           description: "Ensure coverage for new components",
           date: "2025-05-11",
           category: "testing",
           active: false,
           newTask: false,
           completed: false,
           failed: true
         },
         {
           title: "Update favicon",
           description: "Add new branding favicon",
           date: "2025-05-12",
           category: "misc",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         }
       ],
       taskCounts: {
         active: 1,
         newTask: 1,
         completed: 2,
         failed: 1
       }
     },
     {
       id: 3,
       firstName: "Vikram",
       email: "employee3@example.com",
       password: "123",
       tasks: [
         {
           title: "Design dark mode UI",
           description: "Implement dark theme in settings",
           date: "2025-05-09",
           category: "design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           title: "Create modal component",
           description: "Reusable modal with animation",
           date: "2025-05-10",
           category: "dev",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Refactor codebase",
           description: "Clean up unused variables and methods",
           date: "2025-05-11",
           category: "dev",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Conduct UI audit",
           description: "Check spacing and font inconsistencies",
           date: "2025-05-12",
           category: "review",
           active: false,
           newTask: false,
           completed: false,
           failed: true
         },
         {
           title: "Document API endpoints",
           description: "List and describe all backend endpoints",
           date: "2025-05-13",
           category: "documentation",
           active: false,
           newTask: false,
           completed: false,
           failed: true
         }
       ],
       taskCounts: {
         active: 1,
         newTask: 1,
         completed: 2,
         failed: 2
       }
     },
     {
       id: 4,
       firstName: "Priya",
       email: "employee4@example.com",
       password: "123",
       tasks: [
         {
           title: "Style task card",
           description: "Add shadows and padding to task UI",
           date: "2025-05-09",
           category: "design",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           title: "Create timeline page",
           description: "Design project timeline with steps",
           date: "2025-05-10",
           category: "design",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Fix mobile menu",
           description: "Hamburger toggle not working on small screens",
           date: "2025-05-11",
           category: "dev",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         }
       ],
       taskCounts: {
         active: 1,
         newTask: 1,
         completed: 2,
         failed: 0
       }
     },
     {
       id: 5,
       firstName: "Deepak",
       email: "employee5@example.com",
       password: "123",
       tasks: [
         {
           title: "Implement search bar",
           description: "Search across tasks and users",
           date: "2025-05-09",
           category: "dev",
           active: true,
           newTask: true,
           completed: false,
           failed: false
         },
         {
           title: "Fix alignment issues",
           description: "Left panel overlapping content",
           date: "2025-05-10",
           category: "dev",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         },
         {
           title: "Write onboarding doc",
           description: "Steps for new team members",
           date: "2025-05-11",
           category: "documentation",
           active: false,
           newTask: false,
           completed: false,
           failed: true
         },
         {
           title: "Test payment gateway",
           description: "Simulate payments and verify callbacks",
           date: "2025-05-12",
           category: "testing",
           active: false,
           newTask: false,
           completed: true,
           failed: false
         }
       ],
       taskCounts: {
         active: 1,
         newTask: 1,
         completed: 2,
         failed: 1
       }
     }
   ];
   
   const admin = [
     {
       id: 1,
       firstName: "Suman",
       email: "admin@example.com",
       password: "123"
     }
   ];
   
export const setLocalStorage =()=>{
     localStorage.setItem('employees',JSON.stringify(employees));
     localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage =()=>{
     const employees = JSON.parse(localStorage.getItem('employees'))
     const admin = JSON.parse(localStorage.getItem('admin'))
     
     return{employees,admin};
}
   