// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/router'; // Use Next.js router instead of React Router's useNavigate

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter(); // Next.js useRouter hook

//   // Form submission handler
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError('All fields are required!');
//       return;
//     }

//     // Successful login
//     setError('');
//     alert('Login successful');
//     router.push('/dashboard'); // Next.js router navigation
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>

//         <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;















'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';  // Use Next.js router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Next.js router

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('تمام فیلڈز کو بھرنا ضروری ہے!');
      return;
    }

    setError('');
    alert('Login کامیاب');
    router.push('/dashboard');  // Redirect to dashboard using Next.js router
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">لاگ ان کریں</h2>
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

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">پاسورڈ</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="اپنا پاسورڈ درج کریں"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          لاگ ان کریں
        </button>
      </form>
    </div>
  );
};

export default Login;
