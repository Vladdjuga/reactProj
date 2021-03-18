import { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { miliseconds: 0 }
    }
    render() {
        let tmp_sec=this.state.miliseconds;
        let hours=Math.trunc(tmp_sec/1000/3600);
        tmp_sec-=Math.trunc(tmp_sec/1000/3600)*1000*3600;

        let mins=Math.trunc(tmp_sec/1000/60);
        tmp_sec-=Math.trunc(tmp_sec/1000/60)*1000*60;

        let secs=Math.trunc(tmp_sec/1000);
        tmp_sec-=Math.trunc(tmp_sec/1000)*1000;

    return (<div>{hours}:{mins}:{secs}:{tmp_sec/100}</div>)
    }
    componentDidMount(){
        this.timerId=setInterval(()=>this.tick(),100);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            miliseconds: this.state.miliseconds + 100
        })
    }
}
export default Timer;
