import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const { register, handleSubmit } = useForm();

    const navi = useNavigate();

    function saveData(data) {
        //console.log('data is: ---> ', data)
        axios.post('http://localhost:5000/users', data);
        // alert('Record Added.');
        navi('/user/show');


    }
    return (
        <>
            <div className='container'>
                <center><h1><u>STUDENT REGISTRATION FORM </u></h1></center>
                <form onSubmit={handleSubmit(saveData)} className='mt-5'>
                    <label htmlFor='r'><b>ENTER ROLL:</b></label>
                    <input type='number' id='r' className='form-control'
                        {...register('roll')} />
                    <br /><br />
                    <label htmlFor='n'><b>ENTER NAME:</b></label>
                    <input type='text' id='n' className='form-control'
                        {...register('name')} />
                    <br /><br />
                    <label htmlFor='m'><b>ENTER MARKS</b></label>
                    <input type='number' id='m' className='form-control'
                        {...register('marks')} />
                    <br /><br />
                    <input type='submit' value='ADD STUDENT' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg' />
                </form>
            </div >
        </>
    )
}

export default Add