import React, { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {

  // Dependencies

  const { currentUser, logout, deleteAccount } = useAuth();
  const displayNameRef = useRef(); // Changed the ref name for clarity
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [Massege, setMassege] = useState('');
  const [showForm, setShowForm] = useState(false);

  // ---------------------------------------------------

  // Change Name
  const handleSetDisplayName = async (e) => {
    e.preventDefault();
    try {
      const newName = displayNameRef.current.value;
      await updateProfile(currentUser, { displayName: newName });
      navigate('/profile');
    } catch (error) {
      setError('Failed to update display name');
      console.error('Error updating display name:', error.message);
    }
  };
  // End

  // ---------------------------------------------------

  // Logout
  const handleLogout = async () => {
    try {
      await logout();
      setMassege('Logged Out');
    } catch {
      setError('Failed to log out');
    }
  };

  // Delete Account

  const handleDelete = async () => {
    try {
      await deleteAccount()
      setMassege('Account Deleted');
    } catch (error) {
      setError('Failed to delete account');
    }
  }

  // ---------------------------------------------------

  console.log(currentUser); // test
  return (
    <>

      <div className='flex flex-col justify-center md:text-left text-center'>
        <p className='text-4xl text-red-500 font-bold text-center mt-4'>{Massege ? Massege : ''}</p>

        {
          currentUser ?
            <div className='mx-4'>
              <h1 className='text-4xl mt-6 text-orange-500'>Profile</h1>

              <div>
                <p className='text-2xl my-2'>Name : {currentUser.displayName}  {showForm ? <button onClick={() => { setShowForm(false) }} className='mx-2 px-4 py-2 text-sm bg-red-700 hover:bg-red-600 duration-300 text-white'>Close</button> : <button onClick={() => setShowForm(true)} className='mx-2 px-4 py-2 text-sm bg-green-600  duration-300 text-white'>Edit</button>} </p>
                <p className='text-2xl my-2'>Email : {currentUser.email}</p>

                {
                  showForm ? <form onSubmit={handleSetDisplayName} className='my-4'>
                    <label className='text-xl'>Set Name : </label>
                    <input className='border-2 border-gray-300 px-2 py-2' type="text" ref={displayNameRef} placeholder='New Name' />
                    <button type="submit" className='mx-2 px-6 py-2 bg-green-600 hover:bg-green-500 duration-300 text-white'>Set</button>
                  </form>
                    : null
                }

                <button onClick={handleDelete} className='mx-2 px-6 py-2 bg-red-700 hover:bg-red-600 duration-300 text-white'>Delete</button>

                <button onClick={handleLogout} className='text-white py-2 px-6 mt-4 bg-red-700 hover:bg-red-600 duration-300'>Logout</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </div>
            :
            <div>
              <p className='text-4xl text-red-500 font-bold text-center mt-4'>{Massege ? '' : 'You are not logged in'}</p>
            </div>
        }

      </div>

    </>
  );
}

export default Profile;