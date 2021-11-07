import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframes =`@keyframes randomItem${Date.now()} {
           0% {top: -50px;}
            25% {top: 50px;}
            50% {top: -50px;}
            75% {top: 50px;}
            100% {top: 0px;}


          }`;
        return (
            <div className="text-center playerGame">
                 <style>
                    {keyframes}
                </style>
                <div className="theThink" style={{position:'relative'}}>
                <img style={{
                    position:'absolute',
                    left:'30%',
                    animation:`randomItem${Date.now()} 0.5s`,
                    transform:"rotate(120deg)"
                }}  className="mt-3" width={90} height={90} src={this.props.computer.hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/playerComputer.png" alt="player" />
               
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        computer: state.BaiTapOanTuXiReducer.computer

    }
}
export default connect(mapStateToProps)(Computer)
