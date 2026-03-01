import express from "express";
import bcrypt from "bcrypt";
import { supabase } from "../supabaseClient.js";

const router = express.Router();
