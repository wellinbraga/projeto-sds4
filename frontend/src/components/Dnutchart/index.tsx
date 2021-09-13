import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sales';
import { BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[];
    series: number[]
}

const DonutChart = () => {

    let chatData: ChartData = { labels: [], series: [] };

    //const mockData = {
    //   series: [477138, 499928, 444867, 220426, 473088],
    //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySerires = data.map(x => x.sum);
    
        chatData = { labels: myLabels , series: mySerires };


        console.log(chatData);
    })

    const options = {
        legend: {
            show: true
        }
    }
    return (

        <Chart
            options={{ ...options, labels: chatData.labels }}
            series={chatData.series}
            type="donut"
            height="240"
        />

    );

}

export default DonutChart;