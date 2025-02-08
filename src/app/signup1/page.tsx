'use client';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';      //TDO-1
  // useNavigate hook import

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

//   const navigate = useNavigate();                 //TDO-1
   // useNavigate hook for redirection

  // Typing the event parameter properly
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('تمام فیلڈز کو بھرنا ضروری ہے!');
      return;
    }

    if (password !== confirmPassword) {
      setError('پاسورڈ میچ نہیں کر رہے!');
      return;
    }

    setError('');
    alert('Signup کامیاب');

    // navigate('/login');                           //TDO-1
     // redirect to login page on success
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">سائن اپ کریں</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">ای میل</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="اپنا ای میل درج کریں"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">پاسورڈ</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="پاسورڈ درج کریں"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">پاسورڈ کی تصدیق کریں</label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="پاسورڈ کی تصدیق کریں"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          سائن اپ کریں
        </button>
      </form>

      <div>
      
      </div>

      <p className="text-center mt-4 text-gray-600">
        پہلے سے اکاؤنٹ ہے؟ 
        {/* <Link hre="/signup//login">login1</Link> */}
        <a href="/signup1/login1" className="text-blue-600 hover:underline">login2</a>
      </p>
    </div>
  );
};

export default Signup;


