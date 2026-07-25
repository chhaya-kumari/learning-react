import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const {userid} = useParams()
  return(
   <div className="bg-gray-600 text-white py-4 text-2xl font-bold text-center mx-auto">User: {userid}</div>
  )
}

export default User