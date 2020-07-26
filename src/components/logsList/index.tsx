import React, { useState, useEffect, Dispatch } from 'react';
import { useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import _isEmpty from 'lodash/isEmpty';
import { Chart } from "react-google-charts";
import { Row, Col } from 'react-bootstrap';

import './style.css';

import withLoader from "../HOC/withLoader";
import { saveLogs, ISetLogfileAction, apiEndpoint } from "../../redux/actions/logfile.action";
import LogsDataViewComponent from "./LogsDataViewComponent";

const RenderLogs = withLoader(LogsDataViewComponent);

export const LogsListComponent = () => {
    const logsDispatch = useDispatch<Dispatch<ISetLogfileAction>>();
    const [response, setResponse] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const severityLength = (type: string) => {
        return response.filter((log: any) => log.severity === type).length;
    }

    useEffect((): any => {
        let socket = socketIOClient(apiEndpoint);
        socket.on("FromAPI", (data: object) => {
            console.log(data);
            setIsLoading(true);
            setResponse([...response, data]);
            logsDispatch(saveLogs(response));
            setIsLoading(false);
        });

        return () => socket.disconnect();
    }, [isLoading, response, logsDispatch]);

    return (
        <>
          {_isEmpty(response) && <div>Oops! No data to view</div>}
          {!_isEmpty(response) && <Row className="mt-2">
                <Col md={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }}>
                    <RenderLogs loading={isLoading} list={response} />
                </Col>
                <Col  md={{ span: 5, order: 2 }} xs={{span: 12, order: 1 }}>
                    <aside>
                        <Chart
                            width={350}
                            height={350}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Logs Severity', 'Date time per hour'],
                                ['INFO', severityLength('INFO')],
                                ['WARNING', severityLength('WARNING')],
                                ['ERROR', severityLength('ERROR')],
                            ]}
                            options={{
                                title: 'Logs File statistics',
                                pieHole: 0.4,
                            }}
                            rootProps={{
                                'data-testid': 'logStatistic',
                            }}
                        />
                    </aside>

                </Col>
            </Row>
          }
        </>
    )
};

export default LogsListComponent;
