import React, { useState, useMemo } from 'react';
import './Profiles.css';

const mockProfiles = [
  { id: 1, name: 'Alice Johnson', jobTitle: 'Frontend Developer', department: 'Engineering', email: 'alice.johnson@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Bob Smith', jobTitle: 'Backend Developer', department: 'Engineering', email: 'bob.smith@example.com', phone: '321-654-0987' },
  { id: 3, name: 'Claire Evans', jobTitle: 'HR Manager', department: 'Human Resources', email: 'claire.evans@example.com', phone: '456-789-0123' },
  { id: 4, name: 'David Lee', jobTitle: 'Product Manager', department: 'Product', email: 'david.lee@example.com', phone: '567-890-1234' },
  { id: 5, name: 'Emma Wilson', jobTitle: 'UX Designer', department: 'Design', email: 'emma.wilson@example.com', phone: '678-901-2345' },
  { id: 6, name: 'Frank Harris', jobTitle: 'DevOps Engineer', department: 'IT', email: 'frank.harris@example.com', phone: '789-012-3456' },
  { id: 7, name: 'Grace Kim', jobTitle: 'Marketing Specialist', department: 'Marketing', email: 'grace.kim@example.com', phone: '890-123-4567' },
  { id: 8, name: 'Henry Zhao', jobTitle: 'Data Scientist', department: 'Data', email: 'henry.zhao@example.com', phone: '901-234-5678' },
  { id: 9, name: 'Ivy Thompson', jobTitle: 'Technical Writer', department: 'Documentation', email: 'ivy.thompson@example.com', phone: '012-345-6789' },
  { id: 10, name: 'Jack Miller', jobTitle: 'QA Engineer', department: 'Quality Assurance', email: 'jack.miller@example.com', phone: '987-654-3210' },
];

export default function Profiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [sortOption, setSortOption] = useState('nameAsc');

  const roles = useMemo(() => [...new Set(mockProfiles.map(p => p.jobTitle.split(' ')[0]))], []);
  const departments = useMemo(() => [...new Set(mockProfiles.map(p => p.department))], []);

  const filtered = useMemo(() => {
    return mockProfiles
      .filter(p =>
        (!roleFilter || p.jobTitle.includes(roleFilter)) &&
        (!departmentFilter || p.department === departmentFilter) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortOption) {
          case 'nameAsc': return a.name.localeCompare(b.name);
          case 'nameDesc': return b.name.localeCompare(a.name);
          case 'deptAsc': return a.department.localeCompare(b.department);
          case 'deptDesc': return b.department.localeCompare(a.department);
          default: return 0;
        }
      });
  }, [searchTerm, roleFilter, departmentFilter, sortOption]);

  return (
    <div className="page">
      <div className="container-wrapper">
        <h1 className="heading">Employee Directory</h1>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-box"
          />
          <div className="select-group">
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="select-box">
              <option value="">All Roles</option>
              {roles.map(role => <option key={role} value={role}>{role}</option>)}
            </select>
            <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="select-box">
              <option value="">All Departments</option>
              {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
            </select>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="select-box">
              <option value="nameAsc">Name (A-Z)</option>
              <option value="nameDesc">Name (Z-A)</option>
              <option value="deptAsc">Department (A-Z)</option>
              <option value="deptDesc">Department (Z-A)</option>
            </select>
          </div>
        </div>

        <div className="grid-layout">
          {filtered.map(emp => (
            <div key={emp.id} className="card">
              <img className="avatar" src="https://via.placeholder.com/100" alt={emp.name} />
              <h2 className="name">{emp.name}</h2>
              <p className="title">{emp.jobTitle}</p>
              <p className="department">{emp.department}</p>
              <p className="email">{emp.email}</p>
              <p className="phone">{emp.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
