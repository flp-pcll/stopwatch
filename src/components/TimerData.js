import React, { useReducer, useEffect, useRef } from "react";
import Controls from "./Controls";
import Laps from "./Laps/Laps";
import StopWatch from "./StopWatch";
import styled from "styled-components";

const TimerData = styled.main``;


//Initial State for Reducer:
const initialTimerState = {
    timer: {
        centiseconds: 0,
        seconds: 0,
        minutes: 0
    },

    isRunning: false,
    laps: [],
};

//Custom Hook for setInterval manipulation:
function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function timeRunning() {
            savedCallback.current();
        };
            if(delay !== null) {
                let id = setInterval(timeRunning, delay);
                return () => clearInterval(id);
            };
    }, [delay]);
};

//Reducer Function:
function timerReducer(state, action) {
    switch(action.type) {
        case "ON_RESET" : return {isRunning: false, timer: {centiseconds: 0, seconds: 0, minutes: 0}, laps: []};
        case "ON_START" : return {...state, isRunning: true};
        case "ON_PAUSE" : return {...state, isRunning: false};
        case "SET_CENTISECONDS": return {...state, timer: {...state.timer, centiseconds: action.payload.centiseconds}};
        case "SET_SECONDS": return {...state, timer: {...state.timer, seconds: action.payload.seconds}};
        case "SET_MINUTES": return {...state, timer: {...state.timer, minutes: action.payload.minutes}};
        default: return state;
    };
};


//Component:
function TimerDataControl() {
    const [timerState, dispatchTimerAction] = useReducer(timerReducer, initialTimerState);
    const { timer, laps } = timerState;

    const startCountingHandle = () => dispatchTimerAction({type: "ON_START"});
    const pauseCountingHandle = () => dispatchTimerAction({type: "ON_PAUSE"});
    const resetCountingHandle = () => dispatchTimerAction({type: "ON_RESET"});
    const addLapHandler = () => console.log('Dispatch ADD_LAP action');

    //Centiseconds:
    useInterval(() => {
        if(!timerState.isRunning) return;
        dispatchTimerAction({
            type: "SET_CENTISECONDS",
            payload: {
                centiseconds: timer.centiseconds === 99 ? 0 : timer.centiseconds + 1
            }
        });
    }, 10);

    //Seconds:
    useInterval(() => {
        if(!timerState.isRunning) return;
        dispatchTimerAction({
            type: "SET_SECONDS",
            payload: {
                seconds: timer.seconds === 59 ? 0 : timer.seconds + 1
            }
        });
    }, 1000);

    //Minutes:
    useInterval(() => {
        if(!timerState.isRunning) return;
        dispatchTimerAction({
            type: "SET_MINUTES",
            payload: {
                minutes: timer.minutes === 59 ? 0 : timer.minutes + 1
            }
        })
    }, 60000);

    return (
        <TimerData>
            <StopWatch timer={timer} /> {/*tem que receber um objto timer como prop;*/}
            <Controls onStart={startCountingHandle} onPause={pauseCountingHandle} onReset={resetCountingHandle} onAddLap={addLapHandler} /> {/*controla a renderizacao do timer e cria laps*/}
            <Laps laps={laps} />
        </TimerData>
    );
};

export default TimerDataControl;

