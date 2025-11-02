const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form className="mt-4">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="Doe" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="+233 123 456 789" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="123" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="123 Main St" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="Accra" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="Greater Accra" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="00233" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" placeholder="Ghana" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-4 rounded-md w-full"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
