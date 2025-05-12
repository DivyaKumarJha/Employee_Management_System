import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    assignTo: '',
    category: '',
    description: ''
  });

  const { employees, updateEmployees } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // if (!employees) {
    //   alert('Loading employees data...');
    //   return;
    // }

    // Find the employee to assign the task to
    const targetEmployee = employees.find(
      emp => emp.firstName.toLowerCase() === formData.assignTo.toLowerCase()
    );

    if (!targetEmployee) {
      alert('Employee not found!');
      return;
    }

    // Create new task object
    const newTask = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    // Update employee's tasks and task counts
    const updatedEmployees = employees.map(emp => {
      if (emp.id === targetEmployee.id) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1
          }
        };
      }
      return emp;
    });

    // Update both localStorage and context state
    updateEmployees(updatedEmployees);

    // Reset form
    setFormData({
      title: '',
      date: '',
      assignTo: '',
      category: '',
      description: ''
    });

    alert('Task created successfully!');
  };

  // Function to get task status text
  const getTaskStatus = (task) => {
    if (task.completed) return "✅ Completed";
    if (task.failed) return "❌ Failed";
    if (task.active) return "🔄 In Progress";
    if (task.newTask) return "🆕 New Task";
    return "Unknown";
  };

  return (
    <div className='mb-2'>
      <div className="bg-gray-900 border mt-2 border-gray-600 rounded p-2">
        <form onSubmit={handleSubmit} className="flex w-full items-start justify-between gap-4">
          {/* Left Side: Form Inputs */}
          <div className="w-full md:w-1/2 flex flex-col space-y-1">
            <div>
              <h3 className="text-white mb-1 text-sm">Task Title</h3>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Make a UI design"
                className="w-full p-2 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 text-sm"
                required
              />
            </div>

            <div>
              <h3 className="text-white mb-1 text-sm">Date</h3>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 text-sm"
                required
              />
            </div>

            <div>
              <h3 className="text-white mb-1 text-sm">Assign to</h3>
              <input
                type="text"
                name="assignTo"
                value={formData.assignTo}
                onChange={handleChange}
                placeholder="Employee Name"
                className="w-full p-2 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 text-sm"
                required
              />
            </div>

            <div>
              <h3 className="text-white mb-1 text-sm">Category</h3>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="design, dev, etc"
                className="w-full p-2 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 text-sm"
                required
              />
            </div>
          </div>

          {/* Right Side: Description and Button */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <div>
              <h3 className="text-white mb-1 text-sm">Description</h3>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                id="description"
                rows="3"
                className="w-full p-2 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 resize-none text-sm"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <button 
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm"
              >
                Create Task
              </button>
              <button
                type="button"
                onClick={() => navigate('/given-tasks')}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
              >
                Show Given Tasks
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;