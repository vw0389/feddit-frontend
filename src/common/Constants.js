let constants;
if (process.env.NODE_ENV === 'development' || undefined) {
    constants = {
        url: {
            API_URL: "http://localhost:8080/api"
        }
    }
} else if (process.env.NODE_ENV === 'compose'){
    constants = {
        url: {
            API_URL: "http://feddit-backend:80/api"
        }
    }
} else if (process.env.NODE_ENV === 'production'){
    constants = {
        url: {
            API_URL: ""
        }
    }
}

export default constants;