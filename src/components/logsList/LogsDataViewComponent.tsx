import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

type IProps = {
    list: [
        {
            id: number;
            datetime: string;
            severity: string;
            message: string;
        }
    ];
};

export const LogsDataViewComponent = (props: IProps) => {
    const columns = [{
        dataField: 'id',
        text: '#'
    }, {
        dataField: 'date',
        text: 'DateTime',

    }, {
        dataField: 'severity',
        text: 'Severity'
    }, {
        dataField: 'message',
        text: 'Message'
    }];
    const { list } = props;
    const options = {
        sizePerPage: 5,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };

    const rowStyle = (row: any, rowIndex: any) => {
        row.index = rowIndex;
        const style: any = {};
        if (rowIndex % 2 === 0) {
            style.backgroundColor = '#343a40';
        } else {
            style.backgroundColor = '#212529';

        }
        style.borderTop = 'none';
        style.color = '#ccc';

        return style;
    };

    // @ts-ignore
    return (
        <BootstrapTable
            striped
            bordered
            hover
            keyField='id'
            data={ list }
            columns={ columns }
            classes="logsTable"
            rowStyle={rowStyle}
            pagination={ paginationFactory(options) }
        />
    )
};

export default LogsDataViewComponent;
