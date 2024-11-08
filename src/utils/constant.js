let apiRoot = "";
if (process.env.BUILD_MODE === "dev") {
    apiRoot = "http://167.71.220.5:8080";
}

if (process.env.BUILD_MODE === "production") {
    apiRoot = "http://167.71.220.5:8080/swagger-ui/index.html";
}

console.log("check", apiRoot);

export const API_ROOT = apiRoot;
