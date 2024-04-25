import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';

export default function LineGraph() {
    const data1 = [2, 5.5, 2, null, 8.5, 1.5, null, 5, 9, 10, null, 8];
    const data2 = [5, 3, 4, 8, 7, 2, 6, 7, 3, 9, 5, 11];
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];
    return (
        <>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                    {
                        data: data1,
                        connectNulls: true,

                    },
                ]}
                width={500}
                height={300}
            /><br />
            <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                    {
                        data: data1,
                        connectNulls: true,
                        color: "red"

                    },
                    {
                        data: data2
                    }
                ]}
                width={700}
                height={500}
            /><br />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            /><br />
            <BarChart
                width={500}
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                    { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
        </>

    );
}
