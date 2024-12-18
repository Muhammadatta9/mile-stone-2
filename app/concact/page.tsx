export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 p-2 rounded w-full"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
