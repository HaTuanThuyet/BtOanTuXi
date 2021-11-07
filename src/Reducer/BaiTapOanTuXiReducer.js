

const stateDefauilt = {
    mangDatCuoc: [
        { ma: 'bao', hinhAnh: '../img/bao.png', datcuoc: false },
        { ma: 'bua', hinhAnh: '../img/bua.png', datcuoc: false },
        { ma: 'keo', hinhAnh: '../img/keo.png', datcuoc: true },

    ],
    ketQua: "I'm iron man, I Love You 3000",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: '../img/keo.png' }

}
const BaiTapOanTuXiReducer =
    (state = stateDefauilt, action) => {
        switch (action.type) {
            case 'CHON_KEO_BUA_BAO': {
                let mangCuocUpdate = [...state.mangDatCuoc];
                // Tạo ra mảng cược mới từ mảng cược củ và action.maCuoc do người dùng truyền lên
                mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                    if (item.ma === action.maCuoc) {
                        return { ...item, datcuoc: true }
                    }
                    // return {...item,datcuoc:true}
                    return { ...item, datcuoc: false }
                })
                state.mangDatCuoc = mangCuocUpdate;
                return { ...state };

                // // Tìm ra mã cược để chang trặng thái đặc cược ứng với mã cược đó
                // let index = mangCuocUpdate.findIndex(qc=>qc.ma ===action.maCuoc);
                // if(index != -1){
                //     mangCuocUpdate[index].datcuoc=true;
                // }
                // state.mangDatCuoc=mangCuocUpdate;
                // console.log(action)
            }
            case 'RAN_DOM': {
                // console.log('random',action)
                let soNgauNhien = Math.floor(Math.random() * 3);
                let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
                state.computer = quanCuocNgauNhien;

                return { ...state }
            }
            case 'END_GAME':
             
                let player = state.mangDatCuoc.find(item => item.datcuoc === true);
                let computer = state.computer;

                switch (player.ma) {
                    case 'keo':
                        if (computer.ma === 'keo') {
                            state.ketQua = 'hòa nhau';
                        } else if (computer.ma === 'bua') {
                            state.ketQua = 'Thua SML';
                        } else {
                            state.soBanThang +=1;
                            state.ketQua = 'I"m iron man, I Love You 3000';
                        }
                        ; break;
                    case 'bua':
                        if (computer.ma === 'keo') {
                            state.soBanThang +=1;

                            state.ketQua = 'I"m iron man, I Love You 3000';
                        } else if (computer.ma === 'bua') {
                            state.ketQua = 'hòa nhau';
                        } else {
                            state.ketQua = 'Thua SML';
                        }
                        ; break;
                    case 'bao':
                        if (computer.ma === 'keo') {
                            state.ketQua = 'Thua SML';
                        } else if (computer.ma === 'bua') {
                            state.soBanThang +=1;

                            state.ketQua = 'I"m iron man, I Love You 3000';
                        } else {
                            state.ketQua = 'hòa nhau';
                        } break;
                    default: 
                    state.soBanThang +=1;
                    state.ketQua = "I'm iron man, I Love You 3000";

                    // return {...state}

                }

         state.soBanChoi +=1;
            return { ...state }
            default: return { ...state }
               
        }
}

export default BaiTapOanTuXiReducer;





