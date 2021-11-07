import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Ketqua extends Component {
    render() {
        return (
            <div >
                <div className="display-4 text-warning">{this.props.ketQua}</div> 
                <div className="display-4 text-success">Số Bàn Thắng:{this.props.soBanThang}</div> 
                <div className="display-4 text-warning">Số bàn Chơi:{this.props.soBanChoi}</div> 

            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ketQua :state.BaiTapOanTuXiReducer.ketQua,
        soBanThang : state.BaiTapOanTuXiReducer.soBanThang, 
        soBanChoi : state.BaiTapOanTuXiReducer.soBanChoi, 

    }
}
export default connect(mapStateToProps)(Ketqua);