import { Avatar, Box, Stack } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const NewCustomer = () => {
    const newCustomer = [
        {
            id: 1,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
        {
            id: 2,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
        {
            id: 3,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
        {
            id: 4,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
        {
            id: 5,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
        {
            id: 6,
            name: "Tahira Khan",
            email: "tahira@gmail.com",
            img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=740&t=st=1687474573~exp=1687475173~hmac=1ed204f426908878425796cecb5fb8c8646ab1511975fcffdffaccc9d66b9b04"
        },
    ]

    return (
        <div className='m-5'>
            <h1 className='text-[#081735] text-xl font-bold mb-10'>New Customers</h1>
            <div>
                <div className='grid gap-4'>
                {
                    newCustomer.map(newCust => <NewCust 
                        name={newCust.name}
                    email={newCust.email}
                    img={newCust.img}
                    >
                    </NewCust>)
                }
                </div>
            </div>
        </div>
    );
};

function NewCust(props){
return (
    <div className='flex gap-3 items-center'>
      <Avatar alt="" sx={{ width: 56, height: 56 }} src={props.img} />
      <div>
      <p className='text-[#1E293B] font-bold'>{props.name}</p>
      <p className='text-[#64748B]'>{props.email}</p>
      </div>
    </div>
  )
}

export default NewCustomer;