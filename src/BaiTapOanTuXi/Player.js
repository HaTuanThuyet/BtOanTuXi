import React, { Component } from 'react'
import { connect } from "react-redux"

class Player extends Component {
    render() {
        // console.log("MangdacCuoc", this.props.mangDatCuoc)
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{ transform: "rotate(120deg)" }} className="mt-3" width={90} height={90} src={this.props.mangDatCuoc.find(item => item.datcuoc === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        // Xét Giá Trị Đặc cược them viền cho item được chọn 
                        let border = {};
                        if (item.datcuoc) {
                            border = { border: '3px soild orange' };
                        }
                        return <div className="col-4">
                            <button onClick={() => {
                                this.props.datcuoc(item.ma);
                            }} style={border} className="btnItem">
                                <img width={50} height={50} src={item.hinhAnh} alt="bua" />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}
const mapDispacthToProps = dispatch => {
    return {
        datcuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            });
            // Khai báo hàm lặp đi lặp lại
           
        }
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(Player);

