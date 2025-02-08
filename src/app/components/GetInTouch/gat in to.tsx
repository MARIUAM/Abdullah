import { useState } from "react";

export default function Gatin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending the data to a server
    console.log(formData);
  };

  return (
    <div className=" flex  ">
      <div className="bg-white mt-8  w-full max-w-md">

        <form onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-[20px]">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-[180px] p-2 border border-gray-300 rounded-md mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-mail*"
                value={formData.email}
                onChange={handleChange}
                className="w-[180px] p-2 border border-gray-300 rounded-md mt-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700"></label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-[380px] p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Type Your Message*"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-[380px] p- 2 border border-gray-300 rounded-md mt-2"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-[120px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-[15px]">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
