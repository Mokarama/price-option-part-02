import { LineChart as LChart, Line} from 'recharts';
const LinkChart = () => {

    const mathMarksData = [
        { id: 1, name: "Alice", mark: 85 },
        { id: 2, name: "Bob", mark: 78 },
        { id: 3, name: "Charlie", mark: 92 },
        { id: 4, name: "David", mark: 65 },
        { id: 5, name: "Emma", mark: 88 },
        { id: 6, name: "Frank", mark: 74 },
        { id: 7, name: "Grace", mark: 90 },
        { id: 8, name: "Henry", mark: 81 },
        { id: 9, name: "Ivy", mark: 69 },
        { id: 10, name: "Jack", mark: 95 },
      ];

      
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
            <Line dataKey="mark" stroke="#8884d8" ></Line>
            </LChart>
            
        </div>
    );
};

export default LinkChart;