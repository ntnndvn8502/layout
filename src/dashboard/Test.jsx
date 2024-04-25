import React, { useState } from 'react';

function Test() {
    // Khởi tạo state cho mảng dữ liệu và object
    const [dataArray, setDataArray] = useState([]);
    const [dataObject, setDataObject] = useState({});

    // Hàm xử lý khi người dùng thay đổi giá trị của input
    const handleChangeInput = (index, value) => {
        const newDataArray = [...dataArray];
        newDataArray[index] = value;
        setDataArray(newDataArray);
    };

    // Hàm xử lý khi người dùng gửi form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Tạo object từ mảng dữ liệu
        const newObject = {};
        dataArray.forEach((value, index) => {
            newObject[`item${index + 1}`] = value;
        });
        // Cập nhật state cho object
        setDataObject(newObject);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Tạo input cho mỗi phần tử của mảng */}
                {dataArray.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleChangeInput(index, e.target.value)}
                    />
                ))}
                {/* Nút submit để gửi form */}
                <button type="submit">Gửi</button>
            </form>
            {/* Hiển thị object kết quả */}
            <pre>{JSON.stringify(dataObject, null, 2)}</pre>
        </div>
    );
}

export default Test;