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
        text: 'dateTime'
    }, {
        dataField: 'severity',
        text: 'severity'
    }, {
        dataField: 'message',
        text: 'message'
    }];
    const { list } = props;
    const options = {
        onSizePerPageChange: (sizePerPage: number, page: number) => {
            console.log('Size per page change!!!');
            console.log('Newest size per page:' + sizePerPage);
            console.log('Newest page:' + page);
        },
        onPageChange: (page: number, sizePerPage: number) => {
            console.log('Page change!!!');
            console.log('Newest size per page:' + sizePerPage);
            console.log('Newest page:' + page);
        }
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
            pagination={ paginationFactory(options) }
        />
    )
};

export default LogsDataViewComponent;
