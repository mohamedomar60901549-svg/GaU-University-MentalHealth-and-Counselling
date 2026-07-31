import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppointments } from '../context/AppointmentContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import { 
  FaUsers, 
  FaCalendarCheck, 
  FaUserMd, 
  FaChartLine,
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
  FaFilter,
  FaDownload
} from 'react-icons/fa';

function AdminDashboard() {
  const { appointments, counsellors } = useAppointments();
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = [...appointments];
    
    // Apply status filter
    if (filter !== 'all') {
      filtered = filtered.filter(apt => apt.status === filter);
    }
    
    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(apt => 
        apt.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.counsellorName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredAppointments(filtered);
  }, [appointments, filter, searchTerm]);

  const stats = {
    totalAppointments: appointments.length,
    totalStudents: [...new Set(appointments.map(apt => apt.studentId))].length,
    totalCounsellors: counsellors.length,
    pendingAppointments: appointments.filter(apt => apt.status === 'pending').length,
    completedAppointments: appointments.filter(apt => apt.status === 'completed').length,
    approvedAppointments: appointments.filter(apt => apt.status === 'approved').length
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: FaSpinner },
      approved: { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
      completed: { color: 'bg-blue-100 text-blue-800', icon: FaCheckCircle },
      cancelled: { color: 'bg-red-100 text-red-800', icon: FaTimesCircle }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${config.color}`}>
        <Icon className="text-xs" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const exportData = () => {
    const csvContent = [
      ['ID', 'Student', 'Counsellor', 'Date', 'Time', 'Status', 'Reason', 'Feedback'].join(','),
      ...appointments.map(apt => [
        apt.id,
        apt.studentName,
        apt.counsellorName,
        apt.date,
        apt.time,
        apt.status,
        `"${apt.reason}"`,
        `"${apt.feedback || ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointments_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        <Sidebar userRole="admin" />
        
        <div className="flex-1 ml-64 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Monitor and manage all counselling appointments</p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={exportData}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <FaDownload />
              <span>Export Data</span>
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Appointments"
              value={stats.totalAppointments}
              icon={FaCalendarCheck}
              color="primary"
            />
            <DashboardCard
              title="Total Students"
              value={stats.totalStudents}
              icon={FaUsers}
              color="blue"
            />
            <DashboardCard
              title="Total Counsellors"
              value={stats.totalCounsellors}
              icon={FaUserMd}
              color="purple"
            />
            <DashboardCard
              title="Completion Rate"
              value={`${Math.round((stats.completedAppointments / stats.totalAppointments) * 100)}%`}
              icon={FaChartLine}
              color="green"
            />
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-800 text-sm font-medium">Pending</p>
                  <p className="text-2xl font-bold text-yellow-900">{stats.pendingAppointments}</p>
                </div>
                <FaSpinner className="text-yellow-600 text-3xl" />
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 text-sm font-medium">Approved</p>
                  <p className="text-2xl font-bold text-green-900">{stats.approvedAppointments}</p>
                </div>
                <FaCheckCircle className="text-green-600 text-3xl" />
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-800 text-sm font-medium">Completed</p>
                  <p className="text-2xl font-bold text-blue-900">{stats.completedAppointments}</p>
                </div>
                <FaCheckCircle className="text-blue-600 text-3xl" />
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by student or counsellor name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-500" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Counsellor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feedback
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAppointments.map((appointment) => (
                    <motion.tr
                      key={appointment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #{appointment.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {appointment.studentName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.counsellorName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{appointment.date}</div>
                        <div className="text-sm text-gray-500">{appointment.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(appointment.status)}
                      </td>
                      <td className="px-6 py-4">
                        {appointment.feedback ? (
                          <p className="text-sm text-gray-600 max-w-xs truncate">
                            {appointment.feedback}
                          </p>
                        ) : (
                          <span className="text-sm text-gray-400">No feedback yet</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;