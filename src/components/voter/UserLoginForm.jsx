import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CommonButton from '../CommonButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginDataSubmit } from '../../redux-thunk/action/userAction';



function UserLoginForm() {
    const { isUserLoggedin } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userLoginData, setUserLoginData] = useState({})

    function adminLoginPage() {
        navigate("/")
    }
    function handleUserLoginData(e) {
        setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value })
    }
    function submitLoginData() {
        dispatch(userLoginDataSubmit(userLoginData))
    }

    useEffect(() => {
        if (isUserLoggedin) {
            navigate("/Voter")
        }
    }, [isUserLoggedin])


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#121481" }}>
                        <div>
                            <svg width="272" height="200" viewBox="0 0 272 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_292_707)">
                                    <path d="M85.6605 48.8994H97.0702L66.8047 73.5959H183.379L205.207 57.7942L189.834 57.3009L194.293 48.8994H231.99L185.87 81.504H40.0218L85.6605 48.8994Z" fill="#CBCBCB" />
                                    <path d="M133.806 0L91.1104 73.5961H169.492L194.788 32.6046L133.806 0Z" fill="white" />
                                    <path d="M91.1104 88.9189L142.957 121.016L163.051 88.9189H91.1104Z" fill="white" />
                                    <path opacity="0.47" d="M40.0218 81.504V86.4375H188.348L231.99 55.8208V48.8994L185.87 81.504H40.0218Z" fill="#8E8E8E" />
                                </g>
                                <path d="M9.82723 153.875V162.104H20.877V167.323H9.82723V176.022H22.2876V181.382H3.2444V148.515H22.2876V153.875H9.82723ZM48.3004 161.821V167.37H28.3639V161.821H48.3004ZM62.2658 153.875V162.104H73.3156V167.323H62.2658V176.022H74.7262V181.382H55.683V148.515H74.7262V153.875H62.2658ZM87.2913 176.163H98.1059V181.382H80.7084V148.562H87.2913V176.163ZM108.873 153.875V162.104H119.923V167.323H108.873V176.022H121.333V181.382H102.29V148.515H121.333V153.875H108.873ZM125.717 164.925C125.717 161.696 126.438 158.812 127.88 156.273C129.353 153.703 131.343 151.712 133.851 150.301C136.39 148.859 139.227 148.139 142.362 148.139C146.029 148.139 149.243 149.079 152.001 150.96C154.76 152.841 156.687 155.442 157.785 158.765H150.214C149.462 157.198 148.396 156.022 147.017 155.239C145.669 154.455 144.102 154.063 142.315 154.063C140.403 154.063 138.694 154.518 137.19 155.427C135.716 156.304 134.557 157.558 133.71 159.188C132.895 160.818 132.488 162.73 132.488 164.925C132.488 167.088 132.895 169 133.71 170.661C134.557 172.291 135.716 173.561 137.19 174.47C138.694 175.348 140.403 175.786 142.315 175.786C144.102 175.786 145.669 175.395 147.017 174.611C148.396 173.796 149.462 172.605 150.214 171.037H157.785C156.687 174.391 154.76 177.009 152.001 178.89C149.274 180.739 146.061 181.664 142.362 181.664C139.227 181.664 136.39 180.959 133.851 179.548C131.343 178.106 129.353 176.116 127.88 173.576C126.438 171.037 125.717 168.153 125.717 164.925ZM185.742 148.562V153.875H176.996V181.382H170.413V153.875H161.667V148.562H185.742ZM197.128 148.562V181.382H190.545V148.562H197.128ZM218.866 181.711C215.794 181.711 212.973 180.99 210.402 179.548C207.832 178.106 205.794 176.116 204.29 173.576C202.785 171.006 202.033 168.106 202.033 164.878C202.033 161.68 202.785 158.812 204.29 156.273C205.794 153.703 207.832 151.696 210.402 150.254C212.973 148.812 215.794 148.092 218.866 148.092C221.969 148.092 224.791 148.812 227.33 150.254C229.9 151.696 231.922 153.703 233.395 156.273C234.9 158.812 235.652 161.68 235.652 164.878C235.652 168.106 234.9 171.006 233.395 173.576C231.922 176.116 229.9 178.106 227.33 179.548C224.759 180.99 221.938 181.711 218.866 181.711ZM218.866 175.833C220.841 175.833 222.581 175.395 224.085 174.517C225.59 173.608 226.765 172.323 227.612 170.661C228.458 169 228.881 167.072 228.881 164.878C228.881 162.683 228.458 160.771 227.612 159.141C226.765 157.48 225.59 156.21 224.085 155.333C222.581 154.455 220.841 154.016 218.866 154.016C216.891 154.016 215.136 154.455 213.6 155.333C212.095 156.21 210.92 157.48 210.073 159.141C209.227 160.771 208.804 162.683 208.804 164.878C208.804 167.072 209.227 169 210.073 170.661C210.92 172.323 212.095 173.608 213.6 174.517C215.136 175.395 216.891 175.833 218.866 175.833ZM268.621 181.382H262.038L247.133 158.859V181.382H240.55V148.515H247.133L262.038 171.084V148.515H268.621V181.382Z" fill="white" />
                                <defs>
                                    <clipPath id="clip0_292_707">
                                        <rect width="191.968" height="121.016" fill="white" transform="translate(40.0218)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="col-6" style={{ padding: "140px 150px 150px 150px" }}>
                        <div className="LogIn-form" style={{ border: "1px solid black", padding: "50px 50px 80px 50px", borderRadius: "12px" }}>
                            <h3>Login With VOTING ID</h3>
                            <br />


                            <label htmlFor="">voteCard Number </label><br />
                            <input type="password" name='cardNo' onChange={handleUserLoginData} placeholder='enter voteCard Number' autocomplete="off" />
                            <br /><br />
                            <label htmlFor="">Enter Password </label><br />
                            <input type="password" name='password' onChange={handleUserLoginData} placeholder='enter your password' autocomplete="new-password" />
                            <br /><br /><br />
                            <CommonButton onClick={submitLoginData} content={"submit"} />
                            <br />

                            <CommonButton onClick={adminLoginPage} content={"Login As Admin"} />



                        </div>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default UserLoginForm