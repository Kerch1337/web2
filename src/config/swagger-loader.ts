import path from "path";

export const loadSwaggerAnnotations = () => {
  const routesDir = path.join(__dirname, "../dist/routes");
  const files = ["auth.routes.js", "users.routes.js"];
  
  return files.map(file => {
    const route = require(path.join(routesDir, file));
    return route.swaggerDoc || {};
  });
};