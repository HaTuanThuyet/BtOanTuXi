import React, { Component } from 'react'
import Ketqua from './Ketqua'
import './BaiTapOanXuXI.css'
import Computer from './Computer'
import Player from './Player'
import { connect } from 'react-redux'


 class BaiTapOanTuXi extends Component {
     
    render() {
       
        return (
            <div className="gameOanTuXi">
               
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <Ketqua/>
                        <button className="btn btn-success p-3 display-4 mt-5" onClick={() => {
                            this.props.playGame()
                        }}>PlayGame</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                   

                </div>
            </div>
        )
    }
}
const mapDispacthToProps = (dispatch) =>{
    return {
        playGame: ()=>{
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type :'RAN_DOM'
                })
                count++;
                if (count > 10) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type:'END_GAME',
                    })
                }

            }, 100)

          
        }
    }

}
export default connect(null,mapDispacthToProps)(BaiTapOanTuXi)

