import { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [counsellors, setCounsellors] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Load mock data
    loadMockData();
  }, []);

  const loadMockData = () => {
    // Mock counsellors
    setCounsellors([
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialization: 'Clinical Psychology',
        experience: '10+ years',
        availability: ['Mon 9-12', 'Wed 2-5', 'Fri 10-1'],
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        rating: 4.9,
        studentsHelped: 150
      },
      {
        id: 2,
        name: 'Prof. James Mwangi',
        specialization: 'Counseling Psychology',
        experience: '15+ years',
        availability: ['Tue 10-2', 'Thu 1-4', 'Sat 9-12'],
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        rating: 4.8,
        studentsHelped: 200
      },
      {
        id: 3,
        name: 'Ms. Elizabeth Wanjiku',
        specialization: 'Educational Psychology',
        experience: '8+ years',
        availability: ['Mon 2-5', 'Wed 9-12', 'Fri 2-5'],
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        rating: 4.7,
        studentsHelped: 120
      }
    ]);

    // Mock appointments
    setAppointments([
      {
        id: 1,
        studentId: 1,
        studentName: 'John Doe',
        counsellorId: 1,
        counsellorName: 'Dr. Sarah Johnson',
        date: '2024-06-15',
        time: '10:00 AM',
        status: 'pending',
        reason: 'Academic stress',
        feedback: null
      },
      {
        id: 2,
        studentId: 1,
        studentName: 'John Doe',
        counsellorId: 2,
        counsellorName: 'Prof. James Mwangi',
        date: '2024-06-16',
        time: '2:00 PM',
        status: 'approved',
        reason: 'Anxiety',
        feedback: null
      }
    ]);

    // Mock feedbacks
    setFeedbacks([
      {
        id: 1,
        appointmentId: 2,
        counsellorId: 2,
        studentId: 1,
        feedback: 'Student showed good progress. Recommended follow-up session.',
        date: '2024-06-16'
      }
    ]);
  };

  const bookAppointment = (appointmentData) => {
    const newAppointment = {
      id: appointments.length + 1,
      ...appointmentData,
      status: 'pending',
      feedback: null,
      createdAt: new Date().toISOString()
    };
    setAppointments([...appointments, newAppointment]);
    return newAppointment;
  };

  const updateAppointmentStatus = (appointmentId, status) => {
    setAppointments(appointments.map(apt => 
      apt.id === appointmentId ? { ...apt, status } : apt
    ));
  };

  const addFeedback = (feedbackData) => {
    const newFeedback = {
      id: feedbacks.length + 1,
      ...feedbackData,
      date: new Date().toISOString()
    };
    setFeedbacks([...feedbacks, newFeedback]);
    
    // Update appointment with feedback
    setAppointments(appointments.map(apt => 
      apt.id === feedbackData.appointmentId 
        ? { ...apt, feedback: feedbackData.feedback, status: 'completed' }
        : apt
    ));
    
    return newFeedback;
  };

  const getStudentAppointments = (studentId) => {
    return appointments.filter(apt => apt.studentId === studentId);
  };

  const getCounsellorAppointments = (counsellorId) => {
    return appointments.filter(apt => apt.counsellorId === counsellorId);
  };

  const getAllAppointments = () => appointments;

  const getCounsellorById = (id) => {
    return counsellors.find(c => c.id === id);
  };

  const value = {
    appointments,
    counsellors,
    feedbacks,
    bookAppointment,
    updateAppointmentStatus,
    addFeedback,
    getStudentAppointments,
    getCounsellorAppointments,
    getAllAppointments,
    getCounsellorById
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};