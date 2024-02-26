import React from 'react'
import { MdDeleteForever } from "react-icons/md";
function Table({ Data }) {
    return (
        <>
            {Data.length > 0 && (
                <div className="md:w-[80%] flex flex-col border-2 rounded-md mx-auto md:mr-auto mr-2 mt-12 lg:overflow-visible overflow-scroll">
                    <table className="w-full border-collapse ring-1 ring-gray-300 shadow-sm">
                        <thead>
                            <tr className='ring-1 ring-gray-300 text-center text-green-600 bg-main bg-opacity-10'>
                                <th className='py-3 px-4'>Name</th>
                                <th className='py-3 px-4'>Deadline</th>
                                <th className='py-3 px-4'>Role</th>
                                <th className='py-3 px-4'>Complete</th>
                                <th className='py-3 px-4'>Tasks</th>
                                <th className='py-3 px-4'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item, index) => (
                                <tr className='text-center' key={index}>
                                    <td className='py-3'>{item.name}</td>
                                    <td>
                                        {item.deadline}
                                    </td>
                                    <td>{item.Role}</td>
                                    <td>{item.done ? "Yes" : "No"}</td>
                                    <td>{item.tasks?.toString()}</td>
                                    <td className='cursor-pointer'><MdDeleteForever className='mx-auto' /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Table