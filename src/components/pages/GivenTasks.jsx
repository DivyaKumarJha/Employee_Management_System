import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const GivenTasks = () => {
  const { employees } = useContext(AuthContext);
  const navigate = useNavigate();

  // Function to get task status text
  const getTaskStatus = (task) => {
    if (task.completed) return "✅ Completed";
    if (task.failed) return "❌ Failed";
    if (task.active) return "🔄 In Progress";
    if (task.newTask) return "🆕 New Task";
    return "Unknown";
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Fixed header */}
      <div className="bg-gray-900 p-4 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Given Tasks Overview</h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      {/* yeah i made all this below shit using gpt please understand yourself, i was very much done while doing the styling part by my own :/  */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-style">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
            {employees?.map(employee => (
              <div key={employee.id} className="bg-gray-800 rounded-lg p-4 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                  {employee.firstName}
                </h2>
                {employee.tasks.length > 0 ? (
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-style">
                    {employee.tasks.map((task, index) => (
                      <div key={index} className="bg-gray-700 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{task.title}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            task.completed ? 'bg-green-500/20 text-green-400' :
                            task.failed ? 'bg-red-500/20 text-red-400' :
                            task.active ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {getTaskStatus(task)}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mt-2 space-y-1">
                          <div>Category: {task.category}</div>
                          <div>Due Date: {task.date}</div>
                          <div className="mt-2 text-gray-300">
                            {task.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-4">No tasks assigned</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-style {
          scrollbar-width: thin;
          scrollbar-color: #4B5563 #1F2937;
        }
        .scrollbar-style::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-style::-webkit-scrollbar-track {
          background: #1F2937;
          border-radius: 4px;
        }
        .scrollbar-style::-webkit-scrollbar-thumb {
          background-color: #4B5563;
          border-radius: 4px;
          border: 2px solid #1F2937;
        }
      `}</style>
    </div>
  );
};

export default GivenTasks; 