import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
//register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
        {
            name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website,
        },
        { rejectWithValue }
    ) => {
        try {
            const { data } = await API.post("/auth/register", {
                name,
                role,
                email,
                password,
                phone,
                organisationName,
                address,
                hospitalName,
                website,
            });
            if (data?.success) {
                alert("User Registered Successfully");
                window.location.replace("/login");
                return { user: data.user }; 
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
//user login
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post("/auth/login", { role, email, password });
            //store token
            if (data.success) {
                alert(data.message);
                localStorage.setItem("token", data.token);
                window.location.replace("/");
                return { user: data.user, token: data.token };
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
//current-user
export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get('/auth/current-user');
            if (res.data) {
                return res?.data;
            }
        }
        catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            else {
                return rejectWithValue(error.message);
            }
        }
    }
);
