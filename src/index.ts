import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes"; // ✅ Debe ser así
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rutas de la API
app.use("/api", userRoutes);

// Ruta para servir el archivo HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});