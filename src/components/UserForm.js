import React, { useState, useEffect } from 'react';


const UserForm = ({ userToEdit, onSave }) => {
  const [form, setForm] = useState({ id: null, fullname: '', email: '', password: '', address: '' });

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    } else {
      setForm({ id: null, fullname: '', email: '', password: '', address: '' });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ id: null, fullname: '', email: '', password: '', address: '' });
  };

  return (
 <section className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" value={form.fullname} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" required></textarea>
        <button type="submit" className='btn'>Save</button>
      </form>
 </section>
  );
};

export default UserForm;

