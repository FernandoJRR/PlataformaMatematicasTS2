"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const Knex = __importStar(require("knex"));
const objection_1 = require("objection");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json({ limit: '50mb' }));
const corsConfig = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
    exposedHeaders: 'Content-Disposition'
};
const knex = Knex.knex({
    client: process.env.DB_CONNECTION,
    connection: {
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});
objection_1.Model.knex(knex);
app.use((0, cors_1.default)(corsConfig));
app.use('/usuario', usuario_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at port:${port}`);
});
