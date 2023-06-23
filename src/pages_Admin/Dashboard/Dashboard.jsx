import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Label, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { AiFillFileText } from "react-icons/ai";
import NewCustomer from './NewCustomer';

export async function loader() {
    return {};
}

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 104010,
          },
          {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 245000,
          },
          {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 670100,
          },
          {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 404050,
          },
          {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 509000,
          },
          {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 610000,
          },
          {
            month: "Sep",
            investment: 700000,
            sell: 670,
            revenue: 610000,
          },
          {
            month: "Oct",
            investment: 700000,
            sell: 670,
            revenue: 610000,
          },
          {
            month: "Nov",
            investment: 700000,
            sell: 670,
            revenue: 610000,
          },
          {
            month: "Dec",
            investment: 700000,
            sell: 670,
            revenue: 610000,
          },
    ]

    console.log(data);

        const valueA = 30.5;
        const valueB = 20;

        const totalValue = valueA + valueB;
      
        const calculateRemainingValue = (valueA, valueB) => {
          const remainingValue = 100 - valueA - valueB;
          return remainingValue >= 0 ? remainingValue : 0;
        };
      
        const remainingValue = calculateRemainingValue(valueA, valueB);
      
        const piedata = [
            { name: 'Remaining', value: remainingValue },
          { name: 'Value A', value: valueA },
          { name: 'Value B', value: valueB },
        ];
      
        const COLORS = ['#EAF8EE', '#9EC600', '#45AD6F']; // Customize colors as needed

        const [chartWidth, setChartWidth] = useState(600); // Initial width value

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setChartWidth(350); // Set width for small screens
      } else if (screenWidth < 1024) {
        setChartWidth(420); // Set width for medium screens
      } else {
        setChartWidth(600); // Set width for large screens
      }
    };

    handleResize(); // Set initial width

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

    return (
        <>
        <div>
        <div class="h-[100px] bg-gradient-to-r from-[#4ABA6F] to-[#ECFAEE] relative">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[900px] gap-6 mx-auto lg:absolute lg:inset-x-0 lg:-bottom-11'>
                <div className='w-[200px] h-[90px] rounded-[11px] backdrop-blur-xl bg-white/50 flex items-center justify-center gap-5 drop-shadow-md'>
                <div className='bg-white rounded-xl'>
                <AiFillFileText className='m-2 text-lg' />
                </div>
                    <div>
                    <h3 className='text-[14px] text-[#64748B]'>Total Categories</h3>
                    <p className='text-[30px] text-[#1E293B]'>345</p>
                    </div>
                </div>
                <div className='w-[200px] h-[90px] rounded-[11px] backdrop-blur-xl bg-white/70 flex items-center justify-center gap-5 drop-shadow-md'>
                <div className='bg-white rounded-xl'>
                <AiFillFileText className='m-2 text-lg' />
                </div>
                    <div>
                    <h3 className='text-[14px] text-[#64748B]'>Total Sub-categories</h3>
                    <p className='text-[30px] text-[#1E293B]'>1349</p>
                    </div>
                </div>
                <div className='w-[200px] h-[90px] rounded-[11px] backdrop-blur-xl bg-white/70 flex items-center justify-center gap-5 drop-shadow-md'>
                <div className='bg-white rounded-xl'>
                <AiFillFileText className='m-2 text-lg' />
                </div>
                    <div>
                    <h3 className='text-[14px] text-[#64748B]'>Total Revenue</h3>
                    <p className='text-[30px] text-[#1E293B]'>৳137,193</p>
                    </div>
                </div>
                <div className='w-[200px] h-[90px] rounded-[11px] backdrop-blur-xl bg-white/70 flex items-center justify-center gap-5 drop-shadow-md'>
                <div className='bg-white rounded-xl'>
                <AiFillFileText className='m-2 text-lg' />
                </div>
                    <div>
                    <h3 className='text-[14px] text-[#64748B]'>Total Orders</h3>
                    <p className='text-[30px] text-[#1E293B]'>3,500</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className='mt-24 mx-3 lg:mx-20 grid md:flex gap-5 justify-center'>
            <div className=''>
                <div className='rounded-lg shadow-md'>
                <div className='m-5'>
                <h1 className='text-lg'>Revenue</h1>
            <p className='text-2xl font-bold'>৳112,340</p>
                </div>
                
                <AreaChart
          width={chartWidth}
          height={288}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className=''
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} className='text-[10px]' />
          <YAxis className='text-[10px]' />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={"revenue"} stroke="#B2DF8A" fill="#B2DF8A" />
        </AreaChart>
        
        </div>
                

                <div className='rounded-lg shadow-md'>
                <div className='m-5'>
                <h1 className='text-lg'>Order Summary</h1>
                </div>
                <LineChart
          width={chartWidth}
          height={288}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" className='text-[10px]' />
          <YAxis className='text-[10px]' />
          <Tooltip />
          
          <Line type="monotone" dataKey="sell" stroke="#33A02C" />
        </LineChart>
                </div>

                <div className='rounded-lg shadow-md'>
                <div className='m-5'>
                <h1 className='text-lg'>New Customers</h1>
                </div>
                <BarChart
          width={chartWidth}
          height={288}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" className='text-[10px]' />
          <YAxis className='text-[10px]' />
          <Tooltip />
          
          <Bar dataKey="investment" fill="#4ABA6F" />
        </BarChart>
                </div>
            </div>
            <div className=''>
                <div className='rounded-lg shadow-md'>
                <div className='m-5'>
                <h1 className='text-lg'>Orders completed</h1>
                </div>
                <PieChart width={300} height={300}>
          <Pie
            data={piedata}
            dataKey="value"
            outerRadius={90}
            innerRadius={50}
            labelLine={false}
            
          >
            {piedata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className='shadow-lg' />
            ))}
            <Label
        value={totalValue}
        position="center"
        fontSize={24}
        fontWeight="bold"
      />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
                </div>
                <div className='rounded-lg shadow-md'>
                    <NewCustomer></NewCustomer>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;