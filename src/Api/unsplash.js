import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID DMFAOcO9V4KEUOVVMHprQV2EB090c1q9TouZ-zuxy7U'
      }

});