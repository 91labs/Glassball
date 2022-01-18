import Gradient from "../../components/Gradient/Gradient";
import axios from "axios";

import {useEffect,useState} from "react";
import {
    Grid,
    Table,
    TableHeaderRow,
    TableColumnResizing,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const TableComponent = ({ ...restProps }) => (
    <Table.Table
        {...restProps}
        className="h1 text-black table-striped"
    />
);

function API(props){

    const [data,setData] = useState([]);
    const [columns,setColumns] = useState([]);

    useEffect(async () => {
        try {
            const res = await axios.get(props.URL)

            setData(res.data[`${props.name}`]);
            const columns = res.data.columns;

            const info = columns.map((item) => {
                return {
                    name: item,
                    title: item
                }
            })

            setColumns(info);

        } catch (err) {
            console.log(err)
        }
    }, []);

    useEffect(() => {
        console.log(data)
    }, [data])

    return (<Gradient>
        <h1 className={"h1 text-center text-white "}>{props.name}</h1>

        <div className={"bg-white p-5 m-6 rounded-lg shadow-lg"}>
        <Grid
            rows={data}
            columns={columns}
        >
            <Table
                tableComponent={TableComponent}
            />
            <TableHeaderRow
                className="bg-white font-weight-bold h1"
            />
        </Grid>
        </div>
    </Gradient>);
}

export  default  API;
