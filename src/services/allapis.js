import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonStructure";
export const getAllAppointments=async()=>{
    return await commonRequest('GET',`${baseUrl}/appointment`,{})
}
export const DeleteAppointments=async(id)=>{
     return await commonRequest('DELETE',`${baseUrl}/appointment/${id}`,{})
}