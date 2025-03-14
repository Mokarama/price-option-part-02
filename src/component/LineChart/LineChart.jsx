import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 80, chemistry: 78 },
        { id: 2, name: "Bob", math: 78, physics: 75, chemistry: 72 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 94 },
        { id: 4, name: "David", math: 65, physics: 70, chemistry: 68 },
        { id: 5, name: "Emma", math: 88, physics: 85, chemistry: 90 },
        { id: 6, name: "Frank", math: 74, physics: 72, chemistry: 70 },
        { id: 7, name: "Grace", math: 90, physics: 88, chemistry: 86 },
        { id: 8, name: "Henry", math: 81, physics: 79, chemistry: 80 },
        { id: 9, name: "Ivy", math: 69, physics: 72, chemistry: 65 },
        { id: 10, name: "Jack", math: 95, physics: 92, chemistry: 96 },
    ];
     
    return (
        <div>
            <LChart width={1000} height={400} data={mathMarksData}>
           <XAxis dataKey='name'></XAxis>
           <YAxis></YAxis>
           <Line dataKey={"mark"} stroke="red" ></Line>
           <Line dataKey={'physics'} stroke="red" ></Line>
            </LChart>
          
        </div>

       
    );
};

export default LineChart;