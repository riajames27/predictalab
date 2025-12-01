import React, { useState } from "react";

const AuctionPage = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!form.name || !form.quantity || !form.price) return;

    const newItem = {
      id: items.length + 1,
      name: form.name,
      quantity: form.quantity,
      price: form.price,
      updated: new Date().toLocaleString(),
    };

    setItems([...items, newItem]);
    setForm({ name: "", quantity: "", price: "" });
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full space-y-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Auctions Management
      </h1>

      {/* Add New Auction Item */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-5">
          Add New Auction Item
        </h2>

        <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <label className="text-sm text-gray-600">Item Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter item name"
              className="w-full mt-1 px-4 py-3 border border-[#dbe4f0] rounded-lg outline-none shadow-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full mt-1 px-4 py-3 border border-[#dbe4f0] rounded-lg outline-none shadow-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Base Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full mt-1 px-4 py-3 border border-[#dbe4f0] rounded-lg outline-none shadow-sm"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>

      {/* Auction Items Table */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-5">
          All Auction Items
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left py-3">Item ID</th>
                <th className="text-left py-3">Item Name</th>
                <th className="text-left py-3">Quantity</th>
                <th className="text-left py-3">Base Price</th>
                <th className="text-left py-3">Last Updated</th>
                <th className="text-left py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-400">
                    No auction items added.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="border-b last:border-none">
                    <td className="py-3">{item.id}</td>
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">{item.quantity}</td>
                    <td className="py-3">₹{item.price}</td>
                    <td className="py-3 text-gray-500">{item.updated}</td>
                    <td className="py-3 space-x-3">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AuctionPage;
