import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/app/jpa/";
const acesstoken = '';
// axios.interceptors.request.use (
//    config => {
//        config.headers.authorization = `Bearer ${acesstoken}`;
//        return config; 
//    },
//    error => {
//        return Promise.reject(error);
//    }
// )
// neu dung phan nay call API authAxios.get(...url);
// const authAxios = axios.create (
//     {
//         baseURL: EMPLOYEE_API_BASE_URL,
//         headers: {
//             Authorization : `Bearer ${acesstoken}`
//         }
//     }
// )

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + `employees`);
    }

    createEmployee(employee,department_id){
        return axios.post(EMPLOYEE_API_BASE_URL + `departments/${department_id}/employees`, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + `employees/${employeeId}`);
    }

    updateEmployee(department_id, employeeId,employee){
        return axios.put(EMPLOYEE_API_BASE_URL + `departments/${department_id}/employees/${employeeId}`,employee);
    }

    deleteEmployee(department_id,employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + `departments/${department_id}/employees/${employeeId}`);
    }
}

export default new EmployeeService()