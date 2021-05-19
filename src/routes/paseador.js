const { Router, json } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Paseador = require("../models/paseador");