"use client";

import { useState, useEffect } from "react";

type MockUser = {
  id: number;
  name: string;
};

export default function MockUsers() {
  const [users, setUsers] = useState<MockUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null); // Track deleting state

  // Fetch users initially
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await fetch("https://67e14b6858cc6bf785253382.mockapi.io/users", {
      cache: "no-store", // Always fetch fresh data
    });
    const data = await res.json();
    setUsers(data);
  }

  async function addUser(formData: FormData) {
    const name = formData.get("name") as string;
    if (!name.trim()) return;

    // Optimistically update UI
    const newUser = { id: Date.now(), name };
    setUsers((prevUsers) => [...prevUsers, newUser]); // Instant UI update
    setLoading(true);

    try {
      await fetch("https://67e14b6858cc6bf785253382.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      // Re-fetch users to ensure up-to-date list
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(userId: number) {
    // Optimistically remove from UI
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setDeleting(userId);

    try {
      await fetch(`https://67e14b6858cc6bf785253382.mockapi.io/users/${userId}`, {
        method: "DELETE",
      });

      // Fetch the latest data from the API
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="mt-25 items-center justify-center ">
      <div className="flex items-center justify-center w-full ">
        <form
          action={async (formData) => {
            await addUser(formData);
          }}
        >
          <input type="text" name="name" required className="border p-2 mr-2" />
          <button type="submit" className="bg-blue-700 p-2" disabled={loading}>
            {loading ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-4  mx-auto p-8">
        {users.map((user) => (

            <div className="flex justify-center">
                    <div key={user.id} className="p-4 w-50 bg-white shadow-md rounded-lg text-gray-700 flex justify-between items-center">
            <span>{user.name}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-blue-700 text-sm text-white px-2 py-1 rounded"
              disabled={deleting === user.id}
            >
              {deleting === user.id ? "Deleting..." : "✖"}
            </button>
          </div> 
            </div>
          
        ))}
      </div>
    </div>
  );
}
