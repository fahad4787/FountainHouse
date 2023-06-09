import axios from "axios";
import { API_URL, ENDPOINT } from "config/constants";

//Get Method
const getMethod = async (endpoint, authentication=true, data, printConsole = false) => {
    header= {};
    if(authentication){
        var bearer_token = localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    return await axios.get(endpoint, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
        })
}
// Post Method
const postMethod = async (endpoint, authentication=true, data=null, printConsole = false) => {
    header= {};
    if(authentication){
        var bearer_token = localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    return await axios.post(endpoint,data, header)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((error) => {
            console.log('error')
            console.error(error)
            return error.response
        })
}
// Delete Method
const deleteMethod = async (endpoint, authentication=true, data=null, printConsole = false) => {
    header= {};
    if(authentication){
        var bearer_token = localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    console.log(header);
    return await axios.delete(endpoint, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
        })
}
//Patch Method

const patchMethod = async (endpoint, authentication=true, data=null, printConsole = false) => {
    header= {};
    if(authentication){
        var bearer_token = localStorage.getItem('accessToken');
        var header = {
            headers: {
                "Authorization": `Bearer ${JSON.parse(bearer_token)}`
            }
        }
    }
    return await axios.patch(endpoint,data, header)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
        })
}



const sendAuthData = (endpoint, headers, data, printConsole = false) => {
  return axios
    .post(endpoint, data, {
      headers: headers,
    })
  // .then((response) => {
  //   if (printConsole) console.log(`${endpoint}: ${JSON.stringify(response)}`);

  //   if (endpoint === ENDPOINT.login) {
  //     if (response.data.accessToken) {
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //     }
  //   }

  //   return response.data;
  // })
  // .catch((error) => {
  //   if (printConsole) console.log(`${endpoint}: ${error.message}`);
  //   if (printConsole) console.log(`${endpoint}: ${error.message}`);
  //   return error.response.data;
  // });
};


// localStorage.getItem("accessToken", "Bearer "+JSON.stringify(`${token}`)), 


const dashboardHomeData = async (endpoint, headers, data, printConsole = false) => {
   var bearer_token = localStorage.getItem('accessToken');
  /* Converting the string to JSON object. */
  var JSON_OBJ = JSON.parse(`${bearer_token}`);
 return await axios.get(endpoint, {
  headers: {
    "Authorization": `Bearer ${JSON_OBJ}`,
  },
  })
  .then((res) => {
    return res
  })
  .catch((error) => {
    console.error(error)
  })
};


const subAdminAllDataRes = async (endpoint, headers, data, printConsole = false) => {
  var bearer_token = localStorage.getItem('accessToken');
  /* Converting the string to JSON object. */
  var JSON_OBJ = JSON.parse(`${bearer_token}`);

  return await axios.get(endpoint, {
    headers: {
      "Authorization": `Bearer ${JSON_OBJ}`,
    },
  })
    .then((res) => {
      return res
    })
    .catch((error) => {
      console.error(error)
    })
};

const subAdminDelete = async (endpoint, headers, data, printConsole = false) => {
    var bearer_token = localStorage.getItem('accessToken');
    /* Converting the string to JSON object. */
    var JSON_OBJ = JSON.parse(`${bearer_token}`);

    return await axios.delete(endpoint, {
        headers: {
            "Authorization": `Bearer ${JSON_OBJ}`,
        },
    })
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.error(error)
        })
};


const logout = () => {
  localStorage.removeItem("user");
};

const forgetPassword = (headers, data, printConsole = false) => {
  const endpoint = ENDPOINT.forget;
  return axios
    .post(endpoint, data, {
      headers: headers,
    })
};

const verify_otp = (headers, data, printConsole = false) => {
  const endpoint = ENDPOINT.verify_otp;
  return axios
    .post(endpoint, data, {
      headers: headers,
    })
};

const resetPassword = (headers, data, printConsole = false) => {
  const endpoint = ENDPOINT.resetPassword;
  return axios
    .post(endpoint, data, {
      headers: headers,
    })
};

const isAuthenticated = () =>{
  if(localStorage.hasOwnProperty('user') || localStorage.hasOwnProperty('token')){
    return true
  } else{
    return false
  }
}

const logoutNdelete = (headers, data, printConsole = false) => {
  const endpoint = ENDPOINT.logout_and_delete;
  return axios
    .post(endpoint, data, {
      headers: headers,
    })
};

const errorMessageHandler = (data) => {
    let error = data.response.data.errors.map(function (value) {
        return Object.values(value)[0];
    })
    return error[0];

};



// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    sendAuthData,
    logout,
    forgetPassword,
    verify_otp,
    resetPassword,
    isAuthenticated,
    logoutNdelete,
    errorMessageHandler,
    dashboardHomeData,
    subAdminAllDataRes,
    subAdminDelete,
    getMethod,
    postMethod,
    deleteMethod,
    patchMethod
 };
