import React from "react";
import { FaCheck } from 'react-icons/fa';

const TableSection = () => {
    return (
        <div className="bg-gray-100 flex flex-col px-10 lg:px-32 lg:py-20 font-custom">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                                    lg:w-1/3">
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
                                        <div className="text-center text-black py-5">
                                            <p className="text-lg lg:text-2xl font-bold">Standard</p>
                                            <p className="lg:w-2/3 text-lg lg:text-4xl tracking-wider flex items-end justify-end self-end font-extrabold">
                                                <span className="text-lg lg:text-xl">&#163;</span>29/mo
                                            </p>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                                    border">
                                        <div className="text-center text-black py-5">
                                            <p className="text-lg lg:text-2xl font-bold">Standard</p>
                                            <p className="lg:w-2/3 text-lg lg:text-4xl tracking-wider flex items-end justify-end self-end font-extrabold">
                                                <span className="text-lg lg:text-xl">&#163;</span>29/mo
                                            </p>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                                    border">
                                        <div className="text-center text-black py-5">
                                            <p className="text-lg lg:text-2xl font-bold">Standard</p>
                                            <p className="lg:w-2/3 text-lg lg:text-4xl tracking-wider flex items-end justify-end self-end font-extrabold">
                                                <span className="text-lg lg:text-xl">&#163;</span>29/mo
                                            </p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl font-bold border">
                                        Features
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">

                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">

                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">

                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl border">
                                        <p>Lorem ipsum</p>
                                        <p className="font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl border">
                                        <p>Unlimited products</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl border">
                                        <p>24/7 support</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl border">
                                        <p>Locations</p>
                                        <p className="font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-gray-500">
                                        <p className="text-center text-lg lg:text-xl">up to 4</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-gray-500">
                                        <p className="text-center text-lg lg:text-xl">up to 5</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">
                                        <p className="text-center text-lg lg:text-xl">up to 8</p>
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="px-6 py-4 whitespace-nowrap text-black
                                    text-lg lg:text-xl border">
                                        <p>24/7 support</p>
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                    <td className="px-6 border py-4 whitespace-nowrap text-sm text-gray-500">
                                        <FaCheck
                                            size={32}
                                            className="mx-auto text-purple-500" />
                                    </td>
                                </tr>

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableSection;