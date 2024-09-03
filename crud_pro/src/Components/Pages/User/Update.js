import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const { register, handleSubmit, setValue } = useForm();

    const { userId } = useParams();

    const navi = useNavigate();

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        // console.log(result.data);

        setValue('roll', result.data.roll);
        setValue('name', result.data.name);
        setValue('marks', result.data.marks);
    }

    function saveData(data) {
        // console.log('Updated Data')
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/user/show');

    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className='container'>
                <center><h1><u>STUDENT UPDATE FORM </u></h1></center>
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
                    <input type='submit' value='UPDATE STUDENT' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg' />
                </form>
            </div >
        </>
    )
}

export default Update