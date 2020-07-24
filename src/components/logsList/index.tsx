import React, { useState, useEffect, Dispatch } from 'react';
import { useSelector, useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import _isEmpty from 'lodash/isEmpty';
import {Chart} from "react-google-charts";
import { AppState } from '../../redux/reducers/rootReducer';
import { saveLogs, ISetLogfileAction, apiEndpoint } from "../../redux/actions/logfile.action";

import { Container, Row, Col } from 'react-bootstrap';

import HeaderComponent from "../sharedComponents/header";
import LogsDataViewComponent from "./LogsDataViewComponent";

export const LogsListComponent = () => {
    let socket = socketIOClient(apiEndpoint);
    // const { logs } = useSelector((state: AppState) => state.logs);
    const logsDispatch = useDispatch<Dispatch<ISetLogfileAction>>();
    const [response, setResponse] = useState<object[]>([]);

    // const fetchLogs: Function = () => {
    //     logsDispatch(getLogs());
    // }

    const severityLength = (type: string) => {
        return response.filter(log => log.severity === type).length;
    }

    useEffect(() => {
        const socket = socketIOClient(apiEndpoint);

        socket.on("FromAPI", (data: object) => {
            console.log(data);
            setResponse([...response, data]);
            logsDispatch(saveLogs(response));

            return () => socket.disconnect();
        });
    }, [response]);

    return (
        <Container fluid="md">
        <Row>
            <Col md={{ span: 12 }}>
                <header>
                    <HeaderComponent title="Assets Logs File" />
                </header>
            </Col>
        </Row>
          {_isEmpty(response) && <div>Oops! No data to view</div>}
          {!_isEmpty(response) && <Row>
                <Col md={{ span: 7, order: 1 }} xs={{ span: 12, order: 2 }}>
                    <LogsDataViewComponent list={response} />
                </Col>
                <Col  md={{ span: 4, order: 2 }} xs={{span: 12, order: 1 }}>
                    <aside>
                        <Chart
                            width={400}
                            height={350}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Logs Severity', 'Date time per hour'],
                                ['INFO', severityLength('INFO')],
                                ['ERROR', severityLength('ERROR')],
                                ['WARNING', severityLength('WARNING')],
                            ]}
                            options={{
                                title: 'Logs File',
                                pieHole: 0.4,
                            }}
                            rootProps={{
                                'data-testid': '1',
                            }}
                        />
                    </aside>

                </Col>
            </Row>
          }
        </Container>
    )
};

export default LogsListComponent;
