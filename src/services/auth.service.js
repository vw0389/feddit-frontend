import axios from "axios";
import Constants from "../common/Constants";


class AuthService {
  login(username, password) {
    return axios
      .post(Constants.url.API_URL + "/auth/signin", {
        username,
        password
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(Constants.url.API_URL + "/auth/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
